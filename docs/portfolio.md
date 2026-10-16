# Updating the Portfolio

The Portfolio lives at `/portfolio` and reads `content/portfolio.ts`. It is independent of the older disabled Projects routes.

To add an item, provide the image filenames, any background facts, and an approximate position. Add one `PortfolioProject` record with:

- `id`: unique, stable URL anchor.
- `order`: lower numbers appear first; gaps of 10 leave space for additions.
- `title` and `category`: editorial heading and a short project descriptor.
- `description`: one or more paragraphs, grounded in supplied facts.
- `images`: paths, natural dimensions, alt text, and optional captions. Array order controls image order.
- `tags`: material, style, technique, or scope descriptors.

The page sorts a copy of the collection and alternates paper and full-width graphite backgrounds by position. Reordering does not require layout changes. Images retain their proportions. More than one photograph is supported per project.

Writing should be specific, warm, and magazine-like. Avoid invented dates, locations, materials, outcomes, or technical claims. Early personal projects should be credited to Jim without implying that they were all contracted through the current company. Do not imply that a higher sale price establishes design as its sole cause.
