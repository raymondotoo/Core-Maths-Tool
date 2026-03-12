packages <- c("shiny", "bslib", "readr", "markdown")
missing <- packages[!packages %in% rownames(installed.packages())]
if (length(missing) > 0) {
  install.packages(missing)
}
