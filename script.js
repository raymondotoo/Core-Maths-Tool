// Configure marked.js to disable strikethrough and other problematic extensions
if (window.marked) {
    marked.setOptions({
        gfm: true,
        breaks: false,
        pedantic: false,
        smartypants: false
    });
    // Override the tokenizer to prevent strikethrough parsing
    const tokenizer = {
        del(src) {
            // Return false to disable strikethrough parsing
            return false;
        }
    };
    marked.use({ tokenizer });
}

// Unified chapter navigation (used by nav and TOC)
function navigateToChapter(chapterId, subsectionId) {
    if (!chapterId) return;

    // Remove active class from all nav links and set on the current chapter
    document.querySelectorAll('nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${chapterId}`);
    });

    // Hide all chapter sections, show the selected one
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = (section.id === chapterId) ? 'block' : 'none';
    });

    const targetSection = document.getElementById(chapterId);
    if (targetSection) {
        // Scroll immediately - don't wait for content
        scrollToSubsection(targetSection, subsectionId);
        
        const mdContainer = targetSection.querySelector('.chapter-md-content');
        if (mdContainer && mdContainer.dataset.loaded !== 'true') {
            // Load content in background
            loadMarkdownContent(mdContainer).then(() => {
                // Prefetch adjacent chapters for faster navigation
                prefetchAdjacentChapters(chapterId);
            });
        } else {
            // Already loaded, just prefetch neighbors
            prefetchAdjacentChapters(chapterId);
        }
    }

    const hash = subsectionId ? `#${subsectionId}` : `#${chapterId}`;
    window.history.pushState(null, '', hash);
}

// Prefetch next/prev chapters in the background
function prefetchAdjacentChapters(currentChapterId) {
    const match = currentChapterId.match(/chapter(\d+)/);
    if (!match) return;
    
    const currentNum = parseInt(match[1], 10);
    const adjacentIds = [currentNum - 1, currentNum + 1];
    
    adjacentIds.forEach(num => {
        const section = document.getElementById(`chapter${num}`);
        if (section) {
            const container = section.querySelector('.chapter-md-content');
            if (container && container.dataset.loaded !== 'true' && container.dataset.mdFile) {
                // Prefetch in idle time
                if ('requestIdleCallback' in window) {
                    requestIdleCallback(() => {
                        fetch(`data/chapters/${container.dataset.mdFile}`)
                            .then(resp => resp.text())
                            .then(md => markdownCache.set(container.dataset.mdFile, md))
                            .catch(() => {}); // Silently ignore prefetch errors
                    });
                }
            }
        }
    });
}

function scrollToSubsection(section, subsectionId) {
    if (!section) return;
    if (subsectionId) {
        const sub = document.getElementById(subsectionId);
        if (sub) {
            sub.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
    }
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
// Enhanced script.js with improved features
// script.js

// Toggle solution visibility with animation
function toggleSolution(id) {
    const content = document.getElementById(id);
    if (!content) {
        console.error(`Element with ID '${id}' not found`);
        return;
    }
    
    const button = content.previousElementSibling?.querySelector('.expandable-content') || 
                  content.parentElement.querySelector('.expandable-content');
    
    if (content.style.display === "block" || content.classList.contains('visible')) {
        content.style.display = "none";
        content.classList.remove('visible');
        content.classList.add('hidden-content');
        
        if (button) {
            button.textContent = "Click to see step-by-step solution";
            button.classList.remove("expanded-content");
        }
    } else {
        content.style.display = "block";
        content.classList.remove('hidden-content');
        content.classList.add('visible');
        
        if (button) {
            button.textContent = "Hide solution";
            button.classList.add("expanded-content");
        }

        // Mark this example as completed for progress tracking and styling
        markExampleCompleted(content.id);
    }
}

// Enhanced progress tracking with detailed analytics
function trackProgress(sectionId) {
    // Mark section as completed
    localStorage.setItem(`section_${sectionId}`, JSON.stringify({
        completed: true,
        timestamp: new Date().toISOString(),
        score: calculateSectionScore(sectionId)
    }));
    
    // Update progress bar
    updateProgressBar();
}

// Calculate score based on user interactions
function calculateSectionScore(sectionId) {
    // Implementation to calculate user performance
    return Math.floor(Math.random() * 100); // Placeholder
}

// Enhanced progress bar with detailed statistics
function updateProgressBar() {
    const totalSections = document.querySelectorAll('.section').length;
    let completedCount = 0;
    
    for (let i = 1; i <= totalSections; i++) {
        const sectionData = localStorage.getItem(`section_${i}`);
        if (sectionData && JSON.parse(sectionData).completed) {
            completedCount++;
        }
    }
    
    const percentage = Math.round((completedCount / totalSections) * 100);
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
        progressFill.style.transition = 'width 0.3s ease';
    }
    if (progressText) {
        progressText.textContent = `Progress: ${completedCount}/${totalSections} sections (${percentage}% Complete)`;
    }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const currentHash = window.location.hash.substring(1);
    if (currentHash) {
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentHash) {
                link.classList.add('active');
            }
        });
    }
});

// Set up intersection observers for all chapter sections
function setupSectionObservers() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackProgress(index + 1);
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(section);
    });
}

// Initialize progress tracking, markdown chapters and enhanced features
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();

    // Dynamically add nav links and sections for all markdown-based chapters (1–39)
    initMarkdownChapters().then(() => {
        // If there is an anchor in the URL, show that chapter; otherwise default to chapter 1
        const hash = window.location.hash;
        let targetId = hash && hash.startsWith('#') ? hash.substring(1) : 'chapter1';

        const link = document.querySelector(`nav a[href="#${targetId}"]`) || document.querySelector('nav a');
        if (link) {
            link.click();
        }
        
        // Defer non-critical setup to after initial render
        requestAnimationFrame(() => {
            setupSectionObservers();
            setupBookmarkFeature();
            restoreExampleCompletionState();
        });
    });

    // Delegate navigation click handling so it also works for dynamically-added links
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', function (e) {
            const link = e.target.closest('a');
            if (!link || !link.getAttribute('href')) return;

            const href = link.getAttribute('href');
            if (!href.startsWith('#')) return;

            e.preventDefault();
            navigateToChapter(href.substring(1));
        });
    }

    // Enhanced keyboard accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.classList.contains('expandable-content')) {
                e.preventDefault();
                const content = e.target.nextElementSibling;
                if (content && content.id) {
                    toggleSolution(content.id);
                }
            }
        }
    });
    
    // Defer search functionality setup
    setTimeout(setupSearchFunctionality, 100);

});

// Parse a single CSV line, handling simple quoted fields
function parseCsvLine(line) {
    const fields = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            inQuotes = !inQuotes;
        } else if (ch === ',' && !inQuotes) {
            fields.push(current.trim());
            current = '';
        } else {
            current += ch;
        }
    }
    if (current !== '') {
        fields.push(current.trim());
    }
    return fields;
}

// Parse the chapters index.csv into an array of { id, title, md_file }
function parseChaptersCsv(text) {
    const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
    if (lines.length <= 1) return [];

    // Drop header
    return lines.slice(1).map(line => {
        const cols = parseCsvLine(line);
        return {
            id: parseInt(cols[0], 10),
            title: cols[1] || '',
            md_file: cols[4] || ''
        };
    }).filter(ch => !Number.isNaN(ch.id) && ch.md_file);
}

// Simple in-memory cache for loaded markdown
const markdownCache = new Map();

// Lazy-load markdown content into a container using marked.js
function loadMarkdownContent(container) {
    const mdFile = container.dataset.mdFile;
    if (!mdFile) return Promise.resolve();
    if (container.dataset.loaded === 'true') return Promise.resolve();
    
    // Show loading state
    container.innerHTML = '<div class="content-skeleton"><div class="skeleton-line"></div><div class="skeleton-line short"></div><div class="skeleton-line"></div><div class="skeleton-line short"></div></div>';
    
    // Check cache first
    if (markdownCache.has(mdFile)) {
        return processMarkdown(container, markdownCache.get(mdFile));
    }

    return fetch(`data/chapters/${mdFile}`)
        .then(resp => {
            if (!resp.ok) throw new Error(`Failed to load ${mdFile}`);
            return resp.text();
        })
        .then(md => {
            // Cache the raw markdown
            markdownCache.set(mdFile, md);
            return processMarkdown(container, md);
        })
        .catch(err => {
            console.error(err);
            container.innerHTML = '<p class="error-message">Unable to load this chapter. Please try again.</p>';
        });
}

// Process markdown content and render it
function processMarkdown(container, md) {
    // Remove consecutive tildes to prevent strikethrough rendering from OCR noise
    const cleanedMd = md.replace(/~~+/g, '');
    
    if (window.marked) {
        container.innerHTML = window.marked.parse(cleanedMd);
    } else {
        container.textContent = md;
    }
    container.dataset.loaded = 'true';

    // Defer heavy DOM processing to not block render
    requestAnimationFrame(() => {
        // Convert markdown "Example ... / Solution" blocks into expandable containers
        decorateMarkdownExamples(container);

        // Normalize headings, practice checks, and overall structure
        normalizeMarkdownStructure(container);

        // Build an example index at the top of the chapter for quick access
        buildExamplesIndex(container);

        // Restore completed example styling
        restoreExampleCompletionState(container);

        // Add quiz button at end of chapter
        const section = container.closest('section');
        if (section && section.id) {
            const chapterMatch = section.id.match(/chapter(\d+)/);
            if (chapterMatch && window.addQuizButton) {
                window.addQuizButton(container, chapterMatch[1]);
            }
        }

        // Re-typeset maths in chunks to avoid blocking
        if (window.MathJax && MathJax.typesetPromise) {
            typesetMathInChunks(container);
        }
    });
    
    return Promise.resolve();
}

// Typeset math in smaller chunks to avoid UI freeze
function typesetMathInChunks(container) {
    // Quick check if there's any math content
    const hasInlineMath = container.innerHTML.includes('$') || container.innerHTML.includes('\\(');
    const hasDisplayMath = container.innerHTML.includes('$$') || container.innerHTML.includes('\\[');
    
    if (!hasInlineMath && !hasDisplayMath) {
        return; // No math to typeset
    }
    
    // Find all elements that might contain math
    const mathElements = container.querySelectorAll('p, li, .step-content, .answer-box, .problem-container > p');
    if (mathElements.length === 0) return;
    
    const chunks = [];
    const chunkSize = 8; // Larger chunks for faster processing
    
    for (let i = 0; i < mathElements.length; i += chunkSize) {
        chunks.push(Array.from(mathElements).slice(i, i + chunkSize));
    }
    
    let chunkIndex = 0;
    
    function processNextChunk() {
        if (chunkIndex >= chunks.length) return;
        
        const chunk = chunks[chunkIndex];
        chunkIndex++;
        
        MathJax.typesetPromise(chunk)
            .then(() => {
                // Process next chunk with minimal delay
                if (chunkIndex < chunks.length) {
                    requestAnimationFrame(processNextChunk);
                }
            })
            .catch(err => {
                console.warn('MathJax chunk error:', err);
                // Continue even on error
                if (chunkIndex < chunks.length) {
                    requestAnimationFrame(processNextChunk);
                }
            });
    }
    
    // Start processing immediately
    processNextChunk();
}

// Create navigation entries and empty sections for markdown-backed chapters (1–39)
function initMarkdownChapters() {
    return fetch('data/chapters/index.csv')
        .then(resp => {
            if (!resp.ok) throw new Error('Unable to load chapter index.csv');
            return resp.text();
        })
        .then(text => {
            const chapters = parseChaptersCsv(text);
            const navList = document.querySelector('nav ul');
            const main = document.querySelector('main');
            if (!navList || !main) return [];

            // Store chapters globally for TOC building
            window._chaptersData = chapters;

            // Reset nav list to avoid any leftover static items
            navList.innerHTML = '';

            // Use DocumentFragment for faster DOM insertions
            const navFragment = document.createDocumentFragment();
            const mainFragment = document.createDocumentFragment();
            
            chapters.forEach(ch => {
                // Add nav link
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#chapter${ch.id}`;
                a.textContent = `Ch ${ch.id}`;
                a.title = `Chapter ${ch.id}: ${ch.title}`;
                li.appendChild(a);
                navFragment.appendChild(li);

                // Add a section placeholder
                const section = document.createElement('section');
                section.id = `chapter${ch.id}`;
                section.style.display = 'none';

                const titleEl = document.createElement('h1');
                titleEl.className = 'chapter-title';
                titleEl.textContent = `Chapter ${ch.id}: ${ch.title}`;

                const wrapper = document.createElement('div');
                wrapper.className = 'section';

                const mdContainer = document.createElement('div');
                mdContainer.className = 'chapter-md-content';
                mdContainer.dataset.mdFile = ch.md_file;
                
                // Add loading skeleton instead of loading content
                mdContainer.innerHTML = '<div class="content-skeleton"><div class="skeleton-line"></div><div class="skeleton-line short"></div><div class="skeleton-line"></div></div>';

                wrapper.appendChild(mdContainer);
                section.appendChild(titleEl);
                section.appendChild(wrapper);
                mainFragment.appendChild(section);
            });
            
            // Single DOM insertion for all chapters
            navList.appendChild(navFragment);
            main.appendChild(mainFragment);

            // Build simple TOC from chapter data (not content)
            buildSimpleTOC(chapters);
            
            // Hide loading splash, show content
            const splash = document.getElementById('loadingSplash');
            const container = document.getElementById('mainContainer');
            if (splash) splash.style.display = 'none';
            if (container) container.classList.add('loaded');
            
            return Promise.resolve();
        })
        .catch(err => {
            console.error(err);
            // Hide loading splash even on error
            const splash = document.getElementById('loadingSplash');
            const container = document.getElementById('mainContainer');
            if (splash) splash.style.display = 'none';
            if (container) container.classList.add('loaded');
        });
}

// Simple TOC built from chapter titles (fast, no content parsing needed)
function buildSimpleTOC(chapters) {
    const tocBody = document.getElementById('toc-body');
    if (!tocBody) return;
    
    const ul = document.createElement('ul');
    ul.className = 'toc-list';
    
    const fragment = document.createDocumentFragment();
    
    chapters.forEach(ch => {
        const li = document.createElement('li');
        li.className = 'toc-chapter';
        const a = document.createElement('a');
        a.href = `#chapter${ch.id}`;
        a.textContent = `${ch.id}. ${ch.title}`;
        li.appendChild(a);
        fragment.appendChild(li);
    });
    
    ul.appendChild(fragment);
    tocBody.innerHTML = '';
    tocBody.appendChild(ul);
    
    // Use event delegation for TOC clicks
    tocBody.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            navigateToChapter(href.substring(1));
        }
    });
}

// Convert markdown "Example ... / Solution" sections into step-by-step
// problem containers with expandable solutions, similar to chapters 1–7.
function decorateMarkdownExamples(root) {
    const section = root.closest('section');
    const chapterId = section ? section.id : 'chapter';
    let counter = 0;

    const headings = root.querySelectorAll('h3');
    headings.forEach(h3 => {
        if (!/^Example/i.test(h3.textContent.trim())) return;

        // Find the corresponding "Solution" heading (h4) after this h3
        let cursor = h3.nextElementSibling;
        let solutionHeading = null;
        while (cursor) {
            if (cursor.tagName === 'H4' && /^Solution/i.test(cursor.textContent.trim())) {
                solutionHeading = cursor;
                break;
            }
            // Stop if we hit a section boundary
            if (cursor.tagName === 'H2' || cursor.tagName === 'H3' || cursor.tagName === 'HR') break;
            cursor = cursor.nextElementSibling;
        }
        if (!solutionHeading) return;

        // Collect problem nodes (between h3 and solutionHeading)
        const problemNodes = [];
        cursor = h3.nextElementSibling;
        while (cursor && cursor !== solutionHeading) {
            // Skip "Problem" h4 heading if present
            if (cursor.tagName === 'H4' && /^Problem/i.test(cursor.textContent.trim())) {
                cursor = cursor.nextElementSibling;
                continue;
            }
            const next = cursor.nextElementSibling;
            problemNodes.push(cursor);
            cursor = next;
        }

        // Collect solution nodes (after solutionHeading up to next section/example/hr)
        const solutionNodes = [];
        cursor = solutionHeading.nextElementSibling;
        while (cursor) {
            // Stop at section boundaries
            if (cursor.tagName === 'H2' || cursor.tagName === 'H3' || cursor.tagName === 'HR') break;
            
            // Stop at another h4 that isn't part of the solution (like "Problem" for next example)
            if (cursor.tagName === 'H4' && !/^(Step|Part|Note|Answer|Therefore|Hence|Thus)/i.test(cursor.textContent.trim())) break;
            
            const next = cursor.nextElementSibling;
            solutionNodes.push(cursor);
            cursor = next;
        }

        // Build problem-container
        const container = document.createElement('div');
        container.className = 'problem-container';

        const headingP = document.createElement('p');
        headingP.innerHTML = `<strong>${h3.textContent.trim()}</strong>`;
        container.appendChild(headingP);

        problemNodes.forEach(node => {
            container.appendChild(node);
        });

        counter += 1;
        const hiddenId = `${chapterId}-ex-${counter}`;

        const button = document.createElement('button');
        button.className = 'expandable-content';
        button.setAttribute('onclick', `toggleSolution('${hiddenId}')`);
        button.textContent = 'Click to see step-by-step solution';
        container.appendChild(button);

        const hidden = document.createElement('div');
        hidden.className = 'hidden-content';
        hidden.id = hiddenId;

        const stepsWrapper = document.createElement('div');
        stepsWrapper.className = 'solution-steps';

        // Group solution content more intelligently
        let stepNo = 1;
        let currentStepContent = [];
        
        solutionNodes.forEach((node, index) => {
            const text = node.textContent.trim();
            const isLast = index === solutionNodes.length - 1;
            
            // Check if this is a final answer (bold text at end, or starts with answer keywords)
            const isFinalAnswer = isLast || 
                /^(Therefore|Hence|Thus|Answer|∴|The answer|So,?\s+(the\s+)?answer)/i.test(text) ||
                (node.querySelector('strong') && isLast);
            
            // Check if this starts a new logical step
            const startsNewStep = /^(\(?\s*[a-z]\s*\)|Step\s*\d|Part\s*[a-z]|\d+[\.\)])/i.test(text);
            
            if (startsNewStep && currentStepContent.length > 0) {
                // Flush current step
                createStepItem(stepsWrapper, stepNo, currentStepContent);
                stepNo++;
                currentStepContent = [];
            }
            
            if (isFinalAnswer && !startsNewStep) {
                // Flush any pending content first
                if (currentStepContent.length > 0) {
                    createStepItem(stepsWrapper, stepNo, currentStepContent);
                    stepNo++;
                    currentStepContent = [];
                }
                // Create answer box instead of regular step
                const answerBox = document.createElement('div');
                answerBox.className = 'answer-box';
                answerBox.appendChild(node);
                stepsWrapper.appendChild(answerBox);
            } else {
                currentStepContent.push(node);
            }
        });
        
        // Flush remaining content
        if (currentStepContent.length > 0) {
            createStepItem(stepsWrapper, stepNo, currentStepContent);
        }

        hidden.appendChild(stepsWrapper);
        container.appendChild(hidden);

        // Replace the original heading with the new container
        h3.parentNode.insertBefore(container, h3);

        // Remove the original heading and solution heading
        h3.remove();
        solutionHeading.remove();
    });
}

// Helper to create a step item with badge
function createStepItem(wrapper, stepNo, nodes) {
    const stepItem = document.createElement('div');
    stepItem.className = 'step-item';

    const badge = document.createElement('span');
    badge.className = 'step-number';
    badge.textContent = stepNo.toString();
    stepItem.appendChild(badge);

    const content = document.createElement('div');
    content.className = 'step-content';
    nodes.forEach(node => content.appendChild(node));
    stepItem.appendChild(content);
    
    wrapper.appendChild(stepItem);
}

// Normalize markdown-rendered chapters so they visually match static chapters 1–7
function normalizeMarkdownStructure(root) {
    if (!root) return;

    // Remove top-level markdown chapter heading to avoid duplicate chapter titles
    const firstH1 = root.querySelector('h1');
    if (firstH1) {
        firstH1.remove();
    }

    // Treat all h2 elements inside markdown as section titles for consistent styling and TOC
    const h2s = root.querySelectorAll('h2');
    h2s.forEach(h2 => {
        h2.classList.add('section-title');

        // Ensure each section title has a stable id for TOC links
        if (!h2.id) {
            const slug = h2.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'section';
            h2.id = `${root.closest('section')?.id || 'chapter'}-${slug}`;
        }
    });

    // Wrap "Practice Check" blocks in a dedicated container for better emphasis
    const h3s = Array.from(root.querySelectorAll('h3'));
    h3s.forEach(h3 => {
        const text = h3.textContent.trim();
        if (!/^Practice Check/i.test(text)) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'practice-box';

        // Move the h3 and subsequent siblings up to the next h2/h3 into the wrapper
        const parent = h3.parentNode;
        parent.insertBefore(wrapper, h3);

        let cursor = h3;
        while (cursor) {
            const next = cursor.nextElementSibling;
            wrapper.appendChild(cursor);
            if (next && (next.tagName === 'H2' || next.tagName === 'H3')) {
                break;
            }
            cursor = next;
        }
    });
}

// Build a per-chapter example index so examples are easy to select and navigate
function buildExamplesIndex(root) {
    if (!root) return;
    const section = root.closest('.section');
    const chapterSection = root.closest('section');
    if (!section || !chapterSection) return;

    // Avoid duplicating the index if it already exists
    if (section.querySelector('.examples-index')) return;

    const examples = section.querySelectorAll('.problem-container');
    if (!examples.length) return;

    const indexDiv = document.createElement('div');
    indexDiv.className = 'examples-index';

    const heading = document.createElement('h3');
    heading.textContent = 'Examples in this chapter';
    indexDiv.appendChild(heading);

    // Summary line showing how many examples are completed
    const summary = document.createElement('p');
    summary.className = 'examples-summary';
    indexDiv.appendChild(summary);

    const list = document.createElement('ol');

    examples.forEach((ex, i) => {
        // Ensure each example has an id for linking
        if (!ex.id) {
            ex.id = `${chapterSection.id}-example-${i + 1}`;
        }

        const strong = ex.querySelector('strong');
        const labelText = strong ? strong.textContent.replace(/^Example\s*/i, '').trim() : `Example ${i + 1}`;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${ex.id}`;
        a.textContent = labelText || `Example ${i + 1}`;
        a.addEventListener('click', function (e) {
            e.preventDefault();
            ex.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Temporarily highlight the example to draw attention
            ex.classList.add('example-highlight');
            setTimeout(() => {
                ex.classList.remove('example-highlight');
            }, 1200);
        });

        li.appendChild(a);
        list.appendChild(li);
    });

    indexDiv.appendChild(list);

    // Insert the index at the top of the markdown content
    const firstChild = root.firstElementChild;
    if (firstChild) {
        root.insertBefore(indexDiv, firstChild);
    } else {
        root.appendChild(indexDiv);
    }

    // Initialise the completion summary for this chapter
    updateExamplesSummary(chapterSection);
}

// Update the per-chapter examples summary ("X of Y examples completed")
function updateExamplesSummary(chapterSection) {
    if (!chapterSection) return;

    const summaryEls = chapterSection.querySelectorAll('.examples-index .examples-summary');
    if (!summaryEls.length) return;

    const examples = chapterSection.querySelectorAll('.problem-container');
    const total = examples.length;
    let completed = 0;

    examples.forEach(ex => {
        const hidden = ex.querySelector('.hidden-content[id]');
        if (!hidden) return;
        try {
            const status = localStorage.getItem(`example_${hidden.id}`);
            if (status === 'completed') {
                completed += 1;
            }
        } catch (e) {
            // If storage is unavailable, fall back to CSS class
            if (ex.classList.contains('completed-example')) {
                completed += 1;
            }
        }
    });

    const text = total
        ? `You have completed ${completed} of ${total} examples in this chapter.`
        : 'No worked examples in this chapter yet.';

    summaryEls.forEach(el => {
        el.textContent = text;
    });
}

// Mark an example as completed (called when its solution is first opened)
function markExampleCompleted(hiddenId) {
    if (!hiddenId) return;
    try {
        localStorage.setItem(`example_${hiddenId}`, 'completed');
    } catch (e) {
        // Ignore storage errors (e.g., private mode)
    }

    const hidden = document.getElementById(hiddenId);
    if (!hidden) return;
    const container = hidden.closest('.problem-container');
    if (container) {
        container.classList.add('completed-example');

        const chapterSection = container.closest('section');
        if (chapterSection) {
            updateExamplesSummary(chapterSection);
        }
    }
}

// Restore completed example styling from localStorage, optionally scoped to a root element
function restoreExampleCompletionState(root) {
    const scope = root || document;
    const hiddenBlocks = scope.querySelectorAll('.hidden-content[id]');

    hiddenBlocks.forEach(block => {
        const id = block.id;
        try {
            const status = localStorage.getItem(`example_${id}`);
            if (status === 'completed') {
                const container = block.closest('.problem-container');
                if (container) {
                    container.classList.add('completed-example');
                }
            }
        } catch (e) {
            // Ignore storage errors
        }
    });
}

// Build a side-pane table of contents listing all chapters and subsection titles
function buildTableOfContents() {
    const tocBody = document.getElementById('toc-body');
    if (!tocBody) return;

    tocBody.innerHTML = '';

    const list = document.createElement('ul');
    list.className = 'toc-list';

    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        const chapterTitle = section.querySelector('.chapter-title');
        if (!chapterTitle) return;

        const li = document.createElement('li');
        li.className = 'toc-chapter';

        const a = document.createElement('a');
        a.href = `#${section.id}`;
        a.textContent = chapterTitle.textContent;
        a.addEventListener('click', function (e) {
            e.preventDefault();
            navigateToChapter(section.id);
        });
        li.appendChild(a);

        // Gather subsection titles
        const subs = section.querySelectorAll('h2.section-title');
        if (subs.length > 0) {
            const subList = document.createElement('ul');
            subList.className = 'toc-subsections';
            subs.forEach(sub => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.href = `#${sub.id || section.id}`;
                subA.textContent = sub.textContent;
                subA.addEventListener('click', function (e) {
                    e.preventDefault();
                    navigateToChapter(section.id, sub.id);
                });
                subLi.appendChild(subA);
                subList.appendChild(subLi);
            });
            li.appendChild(subList);
        }

        list.appendChild(li);
    });

    tocBody.appendChild(list);
}

// Search functionality implementation
function setupSearchFunctionality() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="searchInput" placeholder="Search topics...">
        <button id="searchButton">🔍</button>
        <div id="searchResults" class="search-results"></div>
    `;
    
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(searchContainer);
        
        document.getElementById('searchButton').addEventListener('click', performSearch);
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (!searchTerm) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    // Simple text-based search (could be enhanced with more sophisticated algorithms)
    const sections = document.querySelectorAll('.section');
    let results = [];
    
    sections.forEach(section => {
        const title = section.querySelector('h2')?.textContent.toLowerCase() || '';
        const content = section.textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            results.push({
                title: section.querySelector('h2')?.textContent || '',
                element: section
            });
        }
    });
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
        return;
    }
    
    resultsContainer.innerHTML = `
        <h3>Search Results:</h3>
        <ul>
            ${results.map(result => `
                <li>
                    <a href="#" onclick="scrollToSection('${result.element.id}')">
                        ${result.title}
                    </a>
                </li>
            `).join('')}
        </ul>
    `;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('searchResults').innerHTML = '';
    }
}

// Bookmark feature implementation
function setupBookmarkFeature() {
    // Add bookmark buttons to each section
    document.querySelectorAll('.section').forEach(section => {
        if (section.querySelector('.bookmark-btn')) {
            return; // Avoid adding duplicate buttons if called multiple times
        }
        const bookmarkBtn = document.createElement('button');
        bookmarkBtn.className = 'bookmark-btn';
        bookmarkBtn.textContent = '🔖';
        bookmarkBtn.title = 'Bookmark this section';
        bookmarkBtn.onclick = function() {
            toggleBookmark(section.id);
        };
        
        const titleElement = section.querySelector('h2');
        if (titleElement) {
            titleElement.appendChild(bookmarkBtn);
        }
    });
}

function toggleBookmark(sectionId) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const index = bookmarks.indexOf(sectionId);
    
    if (index > -1) {
        bookmarks.splice(index, 1);
        alert('Bookmark removed');
    } else {
        bookmarks.push(sectionId);
        alert('Bookmarked!');
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// ============================================
// Enhanced UI Features
// ============================================

// Initialize all enhanced UI features
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    initFontSizeControls();
    initBackToTop();
    initReadingProgress();
    initImageLightbox();
    initCollapsibleToc();
    initKeyboardShortcuts();
});

// Dark Mode Toggle
function initDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) return;
    
    // Check saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (savedMode === null && prefersDark)) {
        document.body.classList.add('dark-mode');
    }
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
}

// Font Size Controls
function initFontSizeControls() {
    const decreaseBtn = document.getElementById('fontDecrease');
    const increaseBtn = document.getElementById('fontIncrease');
    if (!decreaseBtn || !increaseBtn) return;
    
    const sizes = ['font-small', '', 'font-large', 'font-xlarge'];
    let currentSize = parseInt(localStorage.getItem('fontSize') || '1', 10);
    
    // Apply saved font size
    if (sizes[currentSize]) {
        document.body.classList.add(sizes[currentSize]);
    }
    
    decreaseBtn.addEventListener('click', () => {
        if (currentSize > 0) {
            document.body.classList.remove(sizes[currentSize]);
            currentSize--;
            if (sizes[currentSize]) document.body.classList.add(sizes[currentSize]);
            localStorage.setItem('fontSize', currentSize);
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        if (currentSize < sizes.length - 1) {
            document.body.classList.remove(sizes[currentSize]);
            currentSize++;
            if (sizes[currentSize]) document.body.classList.add(sizes[currentSize]);
            localStorage.setItem('fontSize', currentSize);
        }
    });
}

// Back to Top Button
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    
    const showThreshold = 300;
    
    const checkScroll = throttle(() => {
        if (window.scrollY > showThreshold) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, 100);
    
    window.addEventListener('scroll', checkScroll, { passive: true });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Throttle utility for scroll performance
function throttle(fn, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn.apply(this, args);
        }
    };
}

// Reading Progress Bar
function initReadingProgress() {
    const progressBar = document.getElementById('readingProgress');
    if (!progressBar) return;
    
    const updateProgress = throttle(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    }, 16); // ~60fps
    
    window.addEventListener('scroll', updateProgress, { passive: true });
}

// Image Lightbox
function initImageLightbox() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.chapter-md-content img')) {
            const lightbox = document.createElement('div');
            lightbox.className = 'image-lightbox';
            lightbox.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt || 'Image'}">`;
            lightbox.addEventListener('click', () => lightbox.remove());
            document.body.appendChild(lightbox);
            
            // Close with Escape key
            const closeOnEscape = (evt) => {
                if (evt.key === 'Escape') {
                    lightbox.remove();
                    document.removeEventListener('keydown', closeOnEscape);
                }
            };
            document.addEventListener('keydown', closeOnEscape);
        }
    });
}

// Collapsible TOC on Mobile
function initCollapsibleToc() {
    const tocPanel = document.getElementById('toc-panel');
    const tocBody = document.getElementById('toc-body');
    const tocTitle = tocPanel?.querySelector('.toc-title');
    if (!tocPanel || !tocBody) return;
    
    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toc-toggle';
    toggleBtn.textContent = 'Table of Contents';
    
    // Insert before toc-body
    tocPanel.insertBefore(toggleBtn, tocBody);
    
    // Start collapsed on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        tocBody.classList.add('collapsed');
        toggleBtn.classList.add('collapsed');
        if (tocTitle) tocTitle.style.display = 'none';
    }
    
    toggleBtn.addEventListener('click', () => {
        tocBody.classList.toggle('collapsed');
        toggleBtn.classList.toggle('collapsed');
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        const nowMobile = window.innerWidth <= 768;
        if (!nowMobile) {
            tocBody.classList.remove('collapsed');
            toggleBtn.classList.remove('collapsed');
            if (tocTitle) tocTitle.style.display = '';
        } else {
            if (tocTitle) tocTitle.style.display = 'none';
        }
    });
}

// Keyboard Shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Don't trigger if typing in an input
        if (e.target.matches('input, textarea')) return;
        
        // D: Toggle dark mode
        if (e.key === 'd' && !e.ctrlKey && !e.metaKey) {
            document.getElementById('darkModeToggle')?.click();
        }
        
        // T: Scroll to top
        if (e.key === 't' && !e.ctrlKey && !e.metaKey) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Left/Right arrows for chapter navigation
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeLink = document.querySelector('nav a.active');
            if (activeLink) {
                const allLinks = Array.from(document.querySelectorAll('nav a'));
                const currentIndex = allLinks.indexOf(activeLink);
                const newIndex = e.key === 'ArrowLeft' ? currentIndex - 1 : currentIndex + 1;
                
                if (newIndex >= 0 && newIndex < allLinks.length) {
                    allLinks[newIndex].click();
                }
            }
        }
        
        // ? : Show keyboard shortcuts
        if (e.key === '?') {
            showKeyboardHints();
        }
    });
}

function showKeyboardHints() {
    // Remove existing hint
    const existing = document.querySelector('.keyboard-hint-modal');
    if (existing) {
        existing.remove();
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'image-lightbox keyboard-hint-modal';
    modal.innerHTML = `
        <div style="background: var(--gray-800); color: white; padding: 2rem; border-radius: 1rem; max-width: 400px;">
            <h3 style="margin-bottom: 1rem; font-size: 1.25rem;">⌨️ Keyboard Shortcuts</h3>
            <ul style="list-style: none; line-height: 2;">
                <li><kbd style="background: #4b5563; padding: 4px 8px; border-radius: 4px;">D</kbd> Toggle dark mode</li>
                <li><kbd style="background: #4b5563; padding: 4px 8px; border-radius: 4px;">T</kbd> Scroll to top</li>
                <li><kbd style="background: #4b5563; padding: 4px 8px; border-radius: 4px;">←</kbd> <kbd style="background: #4b5563; padding: 4px 8px; border-radius: 4px;">→</kbd> Navigate chapters</li>
                <li><kbd style="background: #4b5563; padding: 4px 8px; border-radius: 4px;">Esc</kbd> Close modals</li>
                <li><kbd style="background: #4b5563; padding: 4px 8px; border-radius: 4px;">?</kbd> Show this help</li>
            </ul>
            <p style="margin-top: 1rem; opacity: 0.7; font-size: 0.85rem;">Click anywhere to close</p>
        </div>
    `;
    modal.addEventListener('click', () => modal.remove());
    document.body.appendChild(modal);
    
    const closeOnEscape = (evt) => {
        if (evt.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
}

// ============================================
// WebAssign-Style Quiz System
// ============================================
let currentQuiz = {
    chapterKey: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    score: 0,
    submitted: []
};

function openQuiz(chapterNum) {
    const chapterKey = `chapter${chapterNum}`;
    if (!window.quizBank || !window.quizBank[chapterKey]) {
        console.error('Quiz not found for chapter:', chapterNum);
        return;
    }
    
    // Reset quiz state
    currentQuiz = {
        chapterKey: chapterKey,
        questions: window.getQuizQuestions(chapterKey, 5),
        currentIndex: 0,
        answers: [],
        score: 0,
        submitted: []
    };
    
    // Update UI
    const modal = document.getElementById('quizModal');
    const title = document.getElementById('quizTitle');
    const results = document.getElementById('quizResults');
    const body = document.getElementById('quizBody');
    
    title.textContent = `${window.quizBank[chapterKey].title} Quiz`;
    results.style.display = 'none';
    body.style.display = 'block';
    
    // Reset buttons
    document.getElementById('quizSubmit').style.display = 'inline-flex';
    document.getElementById('quizNext').style.display = 'none';
    document.getElementById('quizFinish').style.display = 'none';
    document.getElementById('quizPrev').disabled = true;
    
    renderQuestion();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuiz() {
    const modal = document.getElementById('quizModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderQuestion() {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    const body = document.getElementById('quizBody');
    const questionNum = document.getElementById('quizQuestionNum');
    const scoreEl = document.getElementById('quizScore');
    const progressBar = document.getElementById('quizProgressBar');
    
    // Update progress
    const progress = ((currentQuiz.currentIndex + 1) / currentQuiz.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionNum.textContent = `Question ${currentQuiz.currentIndex + 1} of ${currentQuiz.questions.length}`;
    scoreEl.textContent = `Score: ${currentQuiz.score}/${currentQuiz.submitted.filter(Boolean).length}`;
    
    // Check if already submitted
    const isSubmitted = currentQuiz.submitted[currentQuiz.currentIndex];
    const savedAnswer = currentQuiz.answers[currentQuiz.currentIndex];
    
    let html = `<div class="quiz-question">${q.question}</div>`;
    
    if (q.type === 'multiple') {
        html += '<div class="quiz-options">';
        q.options.forEach((opt, i) => {
            let classes = 'quiz-option';
            if (savedAnswer === i) classes += ' selected';
            if (isSubmitted) {
                classes += ' disabled';
                if (i === q.correct) classes += ' correct';
                else if (savedAnswer === i) classes += ' incorrect';
            }
            const markers = ['A', 'B', 'C', 'D', 'E', 'F'];
            html += `
                <div class="${classes}" onclick="${isSubmitted ? '' : `selectOption(${i})`}">
                    <span class="quiz-option-marker">${markers[i]}</span>
                    <span class="quiz-option-text">${opt}</span>
                </div>
            `;
        });
        html += '</div>';
    } else if (q.type === 'numeric') {
        let inputClass = 'quiz-numeric-input';
        let disabled = '';
        if (isSubmitted) {
            disabled = 'disabled';
            const isCorrect = Math.abs(parseFloat(savedAnswer) - q.answer) <= (q.tolerance || 0);
            inputClass += isCorrect ? ' correct' : ' incorrect';
        }
        html += `
            <div class="quiz-numeric">
                <input type="number" step="any" class="${inputClass}" id="numericAnswer" 
                       value="${savedAnswer !== undefined ? savedAnswer : ''}" 
                       ${disabled}
                       placeholder="Enter your answer..."
                       onkeypress="if(event.key==='Enter'){submitAnswer();}">
            </div>
        `;
    }
    
    // Add explanation if submitted
    if (isSubmitted) {
        html += `<div class="quiz-explanation show"><strong>Explanation:</strong> ${q.explanation}</div>`;
    }
    
    body.innerHTML = html;
    
    // Update MathJax if present
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([body]).catch(err => console.log('MathJax error:', err));
    }
    
    // Update navigation buttons
    document.getElementById('quizPrev').disabled = currentQuiz.currentIndex === 0;
    
    if (isSubmitted) {
        document.getElementById('quizSubmit').style.display = 'none';
        if (currentQuiz.currentIndex === currentQuiz.questions.length - 1) {
            document.getElementById('quizNext').style.display = 'none';
            document.getElementById('quizFinish').style.display = 'inline-flex';
        } else {
            document.getElementById('quizNext').style.display = 'inline-flex';
            document.getElementById('quizFinish').style.display = 'none';
        }
    } else {
        document.getElementById('quizSubmit').style.display = 'inline-flex';
        document.getElementById('quizNext').style.display = 'none';
        document.getElementById('quizFinish').style.display = 'none';
    }
}

function selectOption(index) {
    currentQuiz.answers[currentQuiz.currentIndex] = index;
    renderQuestion();
}

function submitAnswer() {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    let answer = currentQuiz.answers[currentQuiz.currentIndex];
    
    // Get numeric answer if applicable
    if (q.type === 'numeric') {
        const input = document.getElementById('numericAnswer');
        if (input) {
            answer = input.value;
            currentQuiz.answers[currentQuiz.currentIndex] = answer;
        }
    }
    
    // Check if answer provided
    if (answer === undefined || answer === '') {
        // Highlight the input/options to indicate missing answer
        const options = document.querySelectorAll('.quiz-option');
        const input = document.getElementById('numericAnswer');
        if (input) {
            input.style.borderColor = 'var(--error)';
            input.focus();
        }
        options.forEach(opt => opt.style.animation = 'shake 0.3s');
        return;
    }
    
    // Check answer
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = answer === q.correct;
    } else if (q.type === 'numeric') {
        const numAnswer = parseFloat(answer);
        isCorrect = Math.abs(numAnswer - q.answer) <= (q.tolerance || 0);
    }
    
    if (isCorrect) {
        currentQuiz.score++;
    }
    
    currentQuiz.submitted[currentQuiz.currentIndex] = true;
    renderQuestion();
}

function nextQuestion() {
    if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
        currentQuiz.currentIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQuiz.currentIndex > 0) {
        currentQuiz.currentIndex--;
        renderQuestion();
    }
}

function finishQuiz() {
    const body = document.getElementById('quizBody');
    const results = document.getElementById('quizResults');
    const finalScore = document.getElementById('quizFinalScore');
    const finalMessage = document.getElementById('quizFinalMessage');
    const review = document.getElementById('quizReview');
    const progressBar = document.getElementById('quizProgressBar');
    
    body.style.display = 'none';
    document.querySelector('.quiz-footer').style.display = 'none';
    results.style.display = 'block';
    progressBar.style.width = '100%';
    
    const total = currentQuiz.questions.length;
    const score = currentQuiz.score;
    const percentage = (score / total) * 100;
    
    finalScore.textContent = `${score}/${total}`;
    
    // Set message based on performance
    if (percentage >= 80) {
        finalMessage.textContent = '🌟 Excellent work! You\'ve mastered this topic!';
        document.querySelector('.quiz-results-icon').textContent = '🏆';
    } else if (percentage >= 60) {
        finalMessage.textContent = '👍 Good job! Keep practicing to improve.';
        document.querySelector('.quiz-results-icon').textContent = '✨';
    } else if (percentage >= 40) {
        finalMessage.textContent = '📚 Review the chapter and try again!';
        document.querySelector('.quiz-results-icon').textContent = '📖';
    } else {
        finalMessage.textContent = '💪 Don\'t give up! Study the material and retry.';
        document.querySelector('.quiz-results-icon').textContent = '📝';
    }
    
    // Build review
    let reviewHtml = '';
    currentQuiz.questions.forEach((q, i) => {
        const answer = currentQuiz.answers[i];
        let isCorrect = false;
        let yourAnswer = '';
        let correctAnswer = '';
        
        if (q.type === 'multiple') {
            isCorrect = answer === q.correct;
            yourAnswer = answer !== undefined ? q.options[answer] : 'No answer';
            correctAnswer = q.options[q.correct];
        } else {
            const numAnswer = parseFloat(answer);
            isCorrect = Math.abs(numAnswer - q.answer) <= (q.tolerance || 0);
            yourAnswer = answer !== undefined ? answer : 'No answer';
            correctAnswer = q.answer;
        }
        
        reviewHtml += `
            <div class="quiz-review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="quiz-review-question">Q${i + 1}: ${q.question}</div>
                <div class="quiz-review-answer">
                    Your answer: ${yourAnswer}<br>
                    ${!isCorrect ? `Correct answer: ${correctAnswer}` : '✓ Correct'}
                </div>
            </div>
        `;
    });
    
    review.innerHTML = reviewHtml;
}

function retakeQuiz() {
    // Reset and reopen
    const chapterNum = currentQuiz.chapterKey.replace('chapter', '');
    document.querySelector('.quiz-footer').style.display = 'flex';
    openQuiz(chapterNum);
}

// Add "Take Quiz" button to chapters after content loads
function addQuizButton(container, chapterNum) {
    // Only add if quiz exists for this chapter
    const chapterKey = `chapter${chapterNum}`;
    if (!window.quizBank || !window.quizBank[chapterKey]) return;
    
    // Check if button already exists
    if (container.querySelector('.take-quiz-btn')) return;
    
    const btn = document.createElement('button');
    btn.className = 'take-quiz-btn';
    btn.innerHTML = 'Take Chapter Quiz';
    btn.onclick = () => openQuiz(chapterNum);
    
    // Find the end of the chapter content
    const chapterContent = container.querySelector('.chapter-md-content') || container;
    chapterContent.appendChild(btn);
}

// Escape key to close quiz
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const quizModal = document.getElementById('quizModal');
        if (quizModal && quizModal.classList.contains('active')) {
            closeQuiz();
        }
    }
});

// Export quiz functions
window.openQuiz = openQuiz;
window.closeQuiz = closeQuiz;
window.selectOption = selectOption;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.finishQuiz = finishQuiz;
window.retakeQuiz = retakeQuiz;
window.addQuizButton = addQuizButton;