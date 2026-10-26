# Studio Dee — Design Library Master Plan

**Site:** https://studiodeepdx.com/  
**Business:** Dee Creative Enterprises, LLC  
**Status:** Planning specification; content inventory proposed, not yet editorially approved  
**Implementation:** Existing Next.js repository, using Codex

## Purpose
Build a substantial, beautifully illustrated, editorial-quality reference library about residential architecture, interiors, design principles, materials, and history. It must offer genuine educational value and strengthen Studio Dee's authority without becoming a disguised collection of sales pages.

## Confirmed decisions
- One new top-level navigation item, provisionally **The Design Library**, linking directly to `/design-library/`. **No category dropdown** in the primary navigation.
- Six launch categories; proposed inventory of **46 articles**, tracked in `ARTICLE-QUEUE.md`.
- Existing Studio Dee header, footer, typography, colors, navigation behavior, spacing, buttons, branding, and responsive conventions must be reused. Inspect the codebase rather than guessing implementation details.
- Breadcrumbs on category and article pages, e.g. Home → The Design Library → Architectural Styles → Craftsman Architecture.
- Editorially polished, substantive articles; each should be comprehensive without padding.
- Beautiful, accurate imagery with meaningful captions and alt text; clearly distinguish generated concepts from documentary photos or actual Studio Dee projects.
- One restrained CTA at the end of each article linking to the **existing** Start a Project contact form. Discover its real route/component from the codebase; do not invent one.
- Content is reviewed **one article at a time**. Content approval does not imply publication approval. No automatic deployment.

## Content taxonomy
1. **Architectural Styles** — historical styles, movements, exterior and interior characteristics.
2. **House Types & Forms** — building forms, plans, typologies, regional adaptations; distinguish type from style.
3. **Interior Design Styles** — visual languages, philosophies, furnishing and finish traditions.
4. **Architectural Elements & Details** — architectural millwork, openings, built-ins, stairs, fireplaces, and related details.
5. **Materials & Finishes** — properties, history, appearance, limitations, installation/maintenance considerations.
6. **Design Principles & Philosophies** — color, proportion, light, space, and historically grounded schools of thought.

The full provisional 46-article list is in `ARTICLE-QUEUE.md`. Do not create all articles in the first phase.

## Required pages and navigation
- Library landing page `/design-library/`: compelling introduction and six category entry points using the existing visual system.
- Category landing pages: descriptive introductions and links to available articles. Unwritten articles must not be shown as published content.
- Article pages with clear headings, breadcrumbs, responsive editorial imagery, contextual related articles, citations/further reading, and one closing CTA.
- Readable URLs, semantic markup, keyboard accessibility, sensible focus states, responsive layouts, and good Core Web Vitals.
- Preserve all existing pages and navigation behavior; add only the new top-level entry.

## Content architecture
Evaluate the existing repository before choosing an approach. Prefer lightweight, typed structured metadata with MDX if compatible with the current Next.js app; do not install a CMS or substantial dependencies without explaining the tradeoffs and obtaining approval. Support:
- Stable slug, title, category, excerpt, status, author/publisher, last reviewed date, SEO metadata.
- Hero/inline images with captions, alt text, and provenance/illustration labels.
- References, internal links, related content, and automatically derived breadcrumbs.
- Draft-versus-published gating: draft pages must not be publicly discoverable or included in sitemap/indexing. Implement a safe preview strategy compatible with the existing deployment setup; don't assume unpublished local files can never deploy.
- Category lists and related-article navigation derived from metadata rather than duplicated hardcoded arrays.

## Article standards
Use subject-appropriate templates, not one mechanical outline for every article.

**Architectural styles:** introduction; origins and historical context; cultural/philosophical influences; defining exterior and interior features; materials and finishes; colors; variants; representative buildings/architects where verified; contemporary interpretation; misconceptions; related reading; sources.

**House types:** origins, physical form, characteristic plans, regional variations, style overlaps, construction considerations, adaptation.

**Interior styles:** origins, principles, spatial character, furnishings, materials, colors, applications, distinctions from related styles.

**Elements and details:** terminology, history, variants, proportions, materials, applications, design tradeoffs.

**Materials:** composition and varieties, visual properties, durability, care, limitations, installation context, sustainability claims where supportable.

**Principles and philosophies:** definition, historical and cultural context, foundational concepts, practical applications, limitations, misconceptions, evidence levels where relevant.

## Editorial voice and verification
Aim for the standard of a sophisticated architecture/interiors publication: precise, elegant, human, accessible, and engaging. Favor specific observations, useful distinctions, original synthesis, and natural sentence variation. Avoid inflated adjectives, boilerplate intros, repetitive transitions, generic conclusions, unsupported superlatives, and keyword stuffing.

Research and verify historical, cultural, material, and technical claims with reliable sources. Do not invent references, historical examples, quotations, or building attributions. Keep source links or bibliographic information in the article. Flag unresolved claims for review rather than presenting them as facts. A later reusable editorial skill may enforce these standards; it is not a substitute for fact-checking.

Feng Shui must be culturally and historically contextualized; distinguish traditional beliefs from scientifically established outcomes. Wabi-Sabi must not be reduced to a superficial decor trend. Biophilic design should distinguish evidence-backed findings from broader assertions. Roman clay, Venetian plaster, traditional plaster, and limewash must not be conflated.

## Image standards
Images should illustrate specific architectural features and principles, not merely fill space. Use varied exterior/interior/detail compositions. Ensure historical and stylistic plausibility, clear captions, descriptive alt text, responsive sizes, efficient formats, and appropriate licensing/provenance. Generated illustrations must be labeled when necessary to prevent confusion with actual buildings or completed client work. **Do not assume Codex can generate image assets in the current environment**; if unavailable, use clearly labeled placeholders and provide detailed image briefs for approval.

## SEO and accessibility
Unique useful page titles and descriptions; proper headings; canonical URLs; XML sitemap for approved/published pages only; semantic HTML; accurate `BreadcrumbList`, `Article`, and `Organization` structured data where appropriate; accessible image descriptions; internal linking that helps readers; no manufactured keyword density. Validate markup and avoid claiming Google rich-result eligibility without verification.

## CTA
At the end of each article, reuse the existing CTA/button styling and actual Start a Project destination. Provisional text:

**Have a project in mind?**  
Whether you're restoring a home's original character or imagining something entirely new, Studio Dee can help bring your ideas to life.  
**Button:** Start a Project

No intrusive pop-ups or repeated sales blocks in the body.

## Delivery stages
**Stage 0 — Audit and proposal (approval required):** inspect repository, summarize existing stack and conventions, propose content architecture, routing, draft protection, component reuse, tests, and image workflow. Stop for approval before changing application code.

**Stage 1 — Infrastructure + one sample:** after approval, implement library landing/category pages, metadata system, breadcrumbs, reusable article layouts, SEO plumbing, and **exactly one** complete draft: *Craftsman Architecture*. Use verified research; supply image assets if actually supported or image briefs/placeholders otherwise. Test build, lint, accessibility basics, and responsive behavior. Do not generate remaining articles. Stop for review.

**Stage 2 — Editorial and visual calibration:** iterate on the Craftsman sample until explicitly approved. Record reusable lessons in `DECISIONS.md` / `EDITORIAL-GUIDE.md` if created. Do not infer approval from silence.

**Stage 3 — One-at-a-time production:** choose the next article from `ARTICLE-QUEUE.md` only on explicit user instruction. Research → draft → image work → preview → revisions → explicit content approval. Then stop. Publication/deployment requires separate explicit approval.

## Decisions still open
- Final library name and subtitle.
- Approval or adjustment of proposed 46 titles.
- Exact article length/depth guidelines and citation presentation.
- Image count and generation/approval process.
- Full-text search and alphabetical index (not required for initial infrastructure).
- Final content format after repository audit.
- Initial launch/release schedule.

## Operating rule
This master plan is the product specification. `AGENTS.md` governs agent behavior and approval gates; `ARTICLE-QUEUE.md` tracks article status. Record newly approved decisions durably in repository documentation. Do not override a confirmed decision without asking.
