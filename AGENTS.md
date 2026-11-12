<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Codex Repository Instructions — Studio Dee

## Project context
This is the existing Studio Dee website. Preserve established application architecture, visual language, and functionality. The Design Library expansion is specified in `docs/design-library/MASTER-PLAN.md`; its proposed article inventory and state live in `docs/design-library/ARTICLE-QUEUE.md`.

**Read those two files before doing Design Library work.** If the documents are absent, ask for them rather than improvising. Respect other instructions already present in this repository; merge these instructions rather than overwriting unrelated rules.

## Mandatory approval gates
1. **Before application code changes:** inspect the repository, provide a concise implementation plan (routes, components, data format, draft/publication safeguards, dependencies, tests), and wait for explicit approval.
2. **First build:** implement infrastructure and **only one sample article**, Craftsman Architecture. Stop for user review. Do not draft other queued articles.
3. **Subsequent articles:** work on **one article only when explicitly requested**. Present research, copy, image assets or image briefs, and a preview. Iterate until the user explicitly approves the content. Stop after approval; do not begin the next article automatically.
4. **Publication:** content approval is not deployment approval. Do not deploy, publish, merge into a production release, or otherwise expose draft content publicly without separate explicit authorization.
5. **Uncertain details:** ask instead of guessing about site routes, brand styles, research facts, image-generation availability, or publication status.

## Development expectations
- Reuse existing header, footer, menu, typography, colors, spacing, buttons, and responsive patterns.
- Add one top-level library link to its landing page; no category dropdown.
- Prefer simple, maintainable content architecture; evaluate MDX/typed metadata against existing stack before committing to it.
- Ensure breadcrumbs, accessible markup, SEO metadata, internal linking, and published-only sitemap/index behavior.
- Verify build/lint/tests; clearly report what was and was not tested.
- Keep commits and changes focused and reversible. Do not add dependencies without justification and approval.

## Editorial expectations
- Substantive, precise, magazine-quality writing without AI boilerplate.
- Verify historical, technical, and cultural claims; never fabricate sources or image provenance.
- Use images that genuinely illustrate the subject. If actual generation is unavailable, prepare explicit image briefs/placeholders, not fake finished assets.
- Add one understated article-footer CTA to the **existing** Start a Project form.

## Persistence and handoff
Update the queue with actual status; maintain `docs/design-library/DECISIONS.md` for explicitly approved changes and `docs/design-library/EDITORIAL-GUIDE.md` once editorial standards are calibrated. At the end of each session, report current status, changed files, verification results, blockers, and the **single next action requiring user authorization**.
