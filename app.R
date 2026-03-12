library(shiny)
library(bslib)
library(readr)
library(markdown)

chapters <- read_csv("data/chapters/index.csv", show_col_types = FALSE)

make_chapter_ui <- function(chapter_id, title, md_file) {
  nav_panel(
    title,
    value = sprintf("chapter_%02d", chapter_id),
    div(
      class = "chapter-wrap",
      uiOutput(sprintf("chapter_%02d_content", chapter_id))
    )
  )
}

nav_panels <- lapply(seq_len(nrow(chapters)), function(i) {
  make_chapter_ui(chapters$id[i], chapters$title[i], chapters$md_file[i])
})

ui <- tagList(
  withMathJax(),
  page_sidebar(
    title = "Core Mathematics Tutorial",
    theme = bs_theme(
      version = 5,
      bootswatch = "flatly",
      base_font = "Georgia",
      heading_font = "Avenir",
      code_font = "Menlo"
    ),
    sidebar = sidebar(
      width = 320,
      h4("Core Mathematics"),
      p("Structured tutorial view of the scanned text, organized by chapter."),
      checkboxInput("show_images", "Show page images", value = FALSE),
      hr(),
      p("Tip: If any page text looks jumbled, toggle page images and verify the original scan.")
    ),
    tags$style(HTML(
      "body { background: linear-gradient(180deg, #f7f4ef 0%, #ffffff 40%); }\n",
      ".bslib-sidebar { border-right: 1px solid #e6e1d8; }\n",
      ".chapter-wrap { max-width: 960px; margin: 0 auto; padding: 1.25rem 1.5rem 2rem; }\n",
      ".chapter-card { background: #ffffff; border: 1px solid #e9e3d7; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.06); padding: 1.5rem; }\n",
      ".chapter-content h1 { font-size: 2.1rem; margin-bottom: 0.75rem; }\n",
      ".chapter-content h2 { font-size: 1.5rem; margin-top: 1.75rem; }\n",
      ".chapter-content h3 { font-size: 1.15rem; margin-top: 1.25rem; }\n",
      ".chapter-content p { line-height: 1.6; }\n",
      ".learn-obj { background: #f7f1e6; border: 1px solid #e6d7bf; border-radius: 10px; padding: 0.75rem 1rem; margin: 0.75rem 0 1rem; }\n",
      ".learn-obj h3 { margin: 0 0 0.4rem; }\n",
      ".page-image-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 1rem; }\n",
      ".page-image { width: 100%; height: auto; border: 1px solid #e5e5e5; border-radius: 10px; }\n"
    )),
    do.call(navset_pill_list, c(nav_panels, list(widths = c(3, 9))))
  )
)

server <- function(input, output, session) {
  for (i in seq_len(nrow(chapters))) {
    local({
      chapter_id <- chapters$id[i]
      md_file <- chapters$md_file[i]
      output[[sprintf("chapter_%02d_content", chapter_id)]] <- renderUI({
        md_path <- file.path("data/chapters", md_file)
        if (!file.exists(md_path)) {
          return(tags$p("Missing chapter file:", md_path))
        }
        html <- markdownToHTML(md_path, fragment.only = TRUE)
        content <- HTML(html)

        # Optional page images for scanned diagrams
        img_dir <- file.path("www", "images", sprintf("chapter_%02d", chapter_id))
        img_tags <- NULL
        if (isTRUE(input$show_images) && dir.exists(img_dir)) {
          imgs <- list.files(img_dir, pattern = "\\.(png|jpg|jpeg)$", full.names = TRUE)
          if (length(imgs) > 0) {
            # Convert to web paths
            web_paths <- file.path("images", sprintf("chapter_%02d", chapter_id), basename(imgs))
            img_tags <- lapply(web_paths, function(p) {
              tags$img(src = p, class = "page-image")
            })
          }
        }

        tagList(
          tags$div(
            class = "chapter-card",
            tags$div(class = "chapter-content", content)
          ),
          tags$div(class = "page-image-grid", img_tags)
        )
      })
    })
  }
}

shinyApp(ui, server)
