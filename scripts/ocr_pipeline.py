import argparse
import csv
import os
import re
from pathlib import Path

# Set writable cache/config dirs early (before heavy imports)
_DATA_DIR = Path("data").resolve()
os.environ.setdefault("MPLCONFIGDIR", str(_DATA_DIR / "mpl_cache"))
os.environ.setdefault("YOLO_CONFIG_DIR", str(_DATA_DIR / "ultralytics"))
os.environ.setdefault("CNOCR_HOME", str(_DATA_DIR / "cnocr"))
os.environ.setdefault("CNSTD_HOME", str(_DATA_DIR / "cnstd"))
os.environ.setdefault("PIX2TEXT_HOME", str(_DATA_DIR / "pix2text"))
os.environ.setdefault("HF_HOME", str(_DATA_DIR / "hf"))
os.environ.setdefault("XDG_CACHE_HOME", str(_DATA_DIR / "cache"))
os.environ.setdefault("ORT_DISABLE_COREML", "1")
os.environ.setdefault("ONNXRUNTIME_DISABLE_COREML", "1")

import fitz
import easyocr
import torch
from PIL import Image, ImageOps, ImageEnhance

PDF_PATH = "Core-Maths-Aki-Ola-Series.pdf"
INDEX_PATH = "data/chapters/index.csv"
OUTPUT_DIR = Path("data/chapters")
IMAGE_ROOT = Path("www/images")


def load_chapters():
    with open(INDEX_PATH, newline="") as f:
        return list(csv.DictReader(f))


def guess_offset(doc, reader, p2t=None, max_pages=20):
    # Try to find "Chapter 1" in early pages to align book page 1 to PDF page index.
    for i in range(min(max_pages, doc.page_count)):
        page = doc.load_page(i)
        rect = page.rect
        clip = fitz.Rect(0, 0, rect.width, rect.height * 0.30)
        pix = page.get_pixmap(dpi=150, clip=clip)
        img_path = Path("/tmp") / f"coremath_guess_{i+1}.png"
        pix.save(str(img_path))
        if reader is not None:
            text = " ".join(reader.readtext(str(img_path), detail=0, paragraph=True))
        elif p2t is not None:
            try:
                result = p2t.recognize_page(str(img_path))
                text = extract_pix2text_text(result)
            except Exception:
                text = ""
        else:
            text = ""
        if re.search(r"chapter\s*1", text, re.I) and re.search(r"set", text, re.I):
            return (i + 1) - 1  # pdf_page_index - book_page_number
    return None


def _is_noisy_line(line):
    stripped = line.strip()
    if not stripped:
        return True
    # Preserve likely math/latex lines
    if any(tok in stripped for tok in ("$", "\\", "{", "}", "=")):
        return False

    chars = [c for c in stripped if not c.isspace()]
    if not chars:
        return True

    total = len(chars)
    latin = sum(1 for c in chars if c.isascii() and c.isalpha())
    digits = sum(1 for c in chars if c.isdigit())
    non_ascii = sum(1 for c in chars if not c.isascii())

    # Drop lines that are mostly non-ASCII or too few Latin characters
    if non_ascii / total > 0.3 and latin < 4:
        return True
    if latin + digits < 3 and total < 6:
        return True
    if latin / total < 0.15 and digits / total < 0.15:
        return True

    return False


def clean_lines(lines):
    cleaned = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        # Normalize whitespace
        line = re.sub(r"\s+", " ", line)
        if _is_noisy_line(line):
            continue
        cleaned.append(line)
    return cleaned


def format_as_tutorial(lines):
    out = []
    for line in lines:
        if re.match(r"(?i)^example\b", line):
            out.append(f"### {line}")
        elif re.match(r"(?i)^exercise\b", line):
            out.append(f"### {line}")
        elif re.match(r"(?i)^solution\b", line):
            out.append(f"#### {line}")
        elif re.match(r"(?i)^note\b", line):
            out.append(f"**{line}**")
        else:
            out.append(line)
    return out


def derive_learning_objectives(lines, max_items=4):
    objectives = []
    verb_patterns = [
        r"\bsolve\b", r"\bfind\b", r"\bsimplify\b", r"\bfactor\b", r"\bexpand\b",
        r"\bgraph\b", r"\bprove\b", r"\bconstruct\b", r"\bcalculate\b", r"\bconvert\b",
        r"\bdetermine\b", r"\bshow\b", r"\bexpress\b", r"\bevaluate\b", r"\bidentify\b",
    ]
    header_patterns = [
        (r"^definition\b", "Define key terms introduced on this page."),
        (r"^theorem\b", "State and apply the theorem introduced here."),
        (r"^example\b", "Work through the example and understand each step."),
        (r"^exercise\b", "Attempt the exercise using the method shown."),
        (r"^note\b", "Recognize and apply the key note highlighted here."),
        (r"^solution\b", "Follow the solution steps and replicate the method."),
    ]

    for line in lines:
        low = line.strip().lower()
        for pat, obj in header_patterns:
            if re.match(pat, low):
                objectives.append(obj)
        if len(objectives) >= max_items:
            break

    if len(objectives) < max_items:
        for line in lines:
            low = line.lower()
            for vp in verb_patterns:
                if re.search(vp, low):
                    verb = re.search(vp, low).group(0)
                    obj = f"Learn to {verb} problems similar to those on this page."
                    objectives.append(obj)
            if len(objectives) >= max_items:
                break

    if not objectives:
        objectives = [
            "Identify the key terms and definitions on this page.",
            "Work through the main examples and understand each step.",
            "Practice a similar problem using the methods shown.",
        ]

    # Deduplicate while preserving order
    seen = set()
    deduped = []
    for o in objectives:
        if o not in seen:
            seen.add(o)
            deduped.append(o)
    return deduped[:max_items]


def ocr_page_easyocr(reader, page, dpi=220):
    pix = page.get_pixmap(dpi=dpi)
    img_path = Path("/tmp") / f"coremath_page_{page.number+1}.png"
    pix.save(str(img_path))
    preprocess_image(img_path)
    lines = reader.readtext(str(img_path), detail=0, paragraph=False)
    lines = clean_lines(lines)
    lines = format_as_tutorial(lines)
    return lines, img_path


def get_pix2text(device):
    from pix2text import Pix2Text
    total_configs = {
        "text": {
            "det_model_backend": "pytorch",
            "rec_model_backend": "pytorch",
            "det_root": os.environ["CNSTD_HOME"],
            "rec_root": os.environ["CNOCR_HOME"],
        },
        "mfd": {
            "model_backend": "pytorch",
            "root": os.environ["PIX2TEXT_HOME"],
        },
        "formula": {
            "model_backend": "pytorch",
            "root": os.environ["PIX2TEXT_HOME"],
        },
    }
    return Pix2Text(total_configs=total_configs, device=device)


def _p2t_get_xy(item):
    if isinstance(item, dict):
        if "position" in item and item["position"] is not None:
            pos = item["position"]
            try:
                xs = [p[0] for p in pos]
                ys = [p[1] for p in pos]
                return (min(ys), min(xs))
            except Exception:
                pass
        if "box" in item and item["box"] is not None:
            box = item["box"]
            if len(box) >= 2:
                return (box[1], box[0])
    else:
        if hasattr(item, "position") and item.position is not None:
            try:
                xs = [p[0] for p in item.position]
                ys = [p[1] for p in item.position]
                return (min(ys), min(xs))
            except Exception:
                pass
        if hasattr(item, "box") and item.box is not None:
            box = item.box
            if len(box) >= 2:
                return (box[1], box[0])
    return None


def _p2t_get_text(item):
    if isinstance(item, dict):
        text = item.get("text") or item.get("latex") or item.get("content")
        typ = item.get("type")
    else:
        text = getattr(item, "text", None) or getattr(item, "latex", None) or getattr(item, "content", None)
        typ = getattr(item, "type", None)

    if not text:
        return None

    # Wrap detected formula/embedding as inline LaTeX if not already wrapped.
    if typ in {"embedding", "formula"}:
        text = text.strip()
        if not (text.startswith("$") and text.endswith("$")):
            text = f"${text}$"
    return text


def extract_pix2text_text(result):
    if result is None:
        return ""
    if isinstance(result, str):
        return result
    if hasattr(result, "to_markdown"):
        try:
            return result.to_markdown()
        except Exception:
            pass
    if hasattr(result, "text") and isinstance(result.text, str):
        return result.text

    if hasattr(result, "elements"):
        elements = result.elements
    elif isinstance(result, list):
        elements = result
    elif isinstance(result, dict):
        elements = [result]
    else:
        return str(result)

    items = []
    for idx, elem in enumerate(elements):
        text = _p2t_get_text(elem)
        if not text:
            continue
        pos = _p2t_get_xy(elem)
        if pos is not None:
            items.append((pos[0], pos[1], idx, text))
        else:
            items.append((1e9, 1e9, idx, text))

    if not items:
        return ""
    items.sort(key=lambda t: (t[0], t[1], t[2]))
    return "\n".join([t[3] for t in items])


def ocr_page_pix2text(p2t, page, dpi=220):
    pix = page.get_pixmap(dpi=dpi)
    img_path = Path("/tmp") / f"coremath_page_{page.number+1}.png"
    pix.save(str(img_path))
    preprocess_image(img_path)
    # Pix2Text returns structured blocks; join into plain text lines
    result = p2t.recognize_page(str(img_path))
    text = extract_pix2text_text(result)
    lines = text.splitlines()
    lines = clean_lines(lines)
    lines = format_as_tutorial(lines)
    return lines, img_path


def preprocess_image(img_path):
    try:
        img = Image.open(img_path).convert("L")
        img = ImageOps.autocontrast(img)
        img = ImageEnhance.Contrast(img).enhance(1.4)
        img = ImageEnhance.Sharpness(img).enhance(1.3)
        img.save(img_path)
    except Exception:
        pass


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--start-chapter", type=int, default=1)
    parser.add_argument("--end-chapter", type=int, default=39)
    parser.add_argument("--offset", type=int, default=None, help="PDF page index offset: pdf_page = book_page + offset")
    parser.add_argument("--dpi-text", type=int, default=200)
    parser.add_argument("--dpi-image", type=int, default=150)
    parser.add_argument("--with-images", action="store_true")
    parser.add_argument("--engine", choices=["pix2text", "easyocr"], default="pix2text")
    parser.add_argument("--device", choices=["auto", "cpu", "mps"], default="auto")
    args = parser.parse_args()

    doc = fitz.open(PDF_PATH)

    # Ensure writable cache/config dirs exist
    for env_key in ["MPLCONFIGDIR", "YOLO_CONFIG_DIR", "CNOCR_HOME", "CNSTD_HOME", "PIX2TEXT_HOME", "HF_HOME", "XDG_CACHE_HOME"]:
        Path(os.environ[env_key]).mkdir(parents=True, exist_ok=True)

    if args.device == "cpu":
        device = "cpu"
    elif args.device == "mps":
        device = "mps"
    else:
        device = "mps" if torch.backends.mps.is_available() else "cpu"

    if device == "mps":
        try:
            import platform
            mac_ver = platform.mac_ver()[0]
            if mac_ver:
                major, minor = [int(x) for x in mac_ver.split(".")[:2]]
                if (major, minor) < (13, 0):
                    device = "cpu"
        except Exception:
            device = "cpu"

    reader = None
    p2t = None
    if args.engine == "easyocr":
        model_dir = "data/easyocr/models"
        user_net_dir = "data/easyocr/user_network"
        Path(model_dir).mkdir(parents=True, exist_ok=True)
        Path(user_net_dir).mkdir(parents=True, exist_ok=True)
        reader = easyocr.Reader(
            ["en"],
            gpu=False,
            model_storage_directory=model_dir,
            user_network_directory=user_net_dir,
            download_enabled=True,
        )
    else:
        try:
            import onnxruntime as ort
            ort.get_available_providers = lambda: ["CPUExecutionProvider"]
        except Exception:
            pass
        p2t = get_pix2text(device=device)

    chapters = load_chapters()

    offset = args.offset
    if offset is None:
        offset = guess_offset(doc, reader, p2t=p2t)
        if offset is None:
            raise SystemExit("Unable to auto-detect page offset. Rerun with --offset N.")

    for ch in chapters:
        cid = int(ch["id"])
        if cid < args.start_chapter or cid > args.end_chapter:
            continue

        title = ch["title"]
        book_start = int(ch["book_start"])
        book_end = int(ch["book_end"])

        pdf_start = book_start + offset
        pdf_end = book_end + offset

        if pdf_start < 1 or pdf_end > doc.page_count:
            raise SystemExit(f"Chapter {cid} range out of PDF bounds: {pdf_start}-{pdf_end}")

        md_path = OUTPUT_DIR / ch["md_file"]
        lines_out = [f"# Chapter {cid}: {title}", ""]

        for p in range(pdf_start - 1, pdf_end):
            page = doc.load_page(p)
            if args.engine == "easyocr":
                lines, img_path = ocr_page_easyocr(reader, page, dpi=args.dpi_text)
            else:
                lines, img_path = ocr_page_pix2text(p2t, page, dpi=args.dpi_text)

            lines_out.append(f"## Page {p+1}")
            objectives = derive_learning_objectives(lines)
            lines_out.append("<div class=\"learn-obj\">")
            lines_out.append("<h3>Learning Objectives</h3>")
            lines_out.append("<ul>")
            for obj in objectives:
                lines_out.append(f"<li>{obj}</li>")
            lines_out.append("</ul>")
            lines_out.append("</div>")
            lines_out.append("")
            lines_out.append("### Page Text")
            lines_out.extend(lines)
            lines_out.append("")
            lines_out.append("### Practice Check")
            lines_out.append("- Write a short summary of the method used on this page.")
            lines_out.append("- Solve one new problem using the same method.")
            lines_out.append("")

            if args.with_images:
                img_dir = IMAGE_ROOT / f"chapter_{cid:02d}"
                img_dir.mkdir(parents=True, exist_ok=True)
                img_out = img_dir / f"page_{p+1:03d}.png"
                if not img_out.exists():
                    pix = page.get_pixmap(dpi=args.dpi_image)
                    pix.save(str(img_out))

        md_path.write_text("\n".join(lines_out), encoding="utf-8")
        print(f"Wrote {md_path}")


if __name__ == "__main__":
    main()
