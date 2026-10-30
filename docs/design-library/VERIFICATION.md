# Stage 1 verification — 2026-10-25

## Contemporary draft focused preview — 2026-10-26

- Adapted the user-supplied Markdown and all five supplied PNGs for a private draft. Original files remain intact; WebP derivatives live outside `public/`.
- TypeScript and 12 quick Node tests passed. The local article returned HTTP 200 with noindex, and all five image URLs returned WebP 200. Desktop (1365px) and mobile (390px) browser smoke checks decoded all five figures with no horizontal overflow.
- Full production build, broad accessibility matrix, production asset audit, and hosted checks were deferred. Final editorial claim review and image creator/use-rights confirmation remain open. Contemporary is draft, not approved or published.

## Mid-Century Modern draft focused preview — 2026-10-26

- Adapted the user-supplied Markdown and selected six of nine supplied PNGs for a private draft. Original files remain intact; WebP derivatives live outside `public/`.
- TypeScript and 12 quick Node tests passed. The local article returned HTTP 200 with noindex, and all six image URLs returned WebP 200. Desktop (1365px) and mobile (390px) browser smoke checks decoded all six figures with no horizontal overflow.
- Full production build, broad accessibility matrix, production asset audit, and hosted checks were deferred. Complete editorial claim review and image provenance/use-rights confirmation remain open. Mid-Century Modern is draft, not approved or published.

## Modern draft focused preview — 2026-10-26

- Adapted the user-supplied Markdown and five supplied images into a private draft preview. Original PNGs and source draft remain intact; the five WebP derivatives are served through the existing private endpoint.
- TypeScript passed; 12 quick Node tests passed, including a safeguard that unverified supplied images cannot become publication-ready. The local article returned HTTP 200 and noindex; five image routes returned WebP 200. One 1365-pixel browser smoke check decoded all five figures and found no horizontal overflow.
- Full production build, multi-width browser/accessibility sweep, production asset audit, and hosted checks were intentionally deferred. Creator/use-rights provenance and complete editorial source review remain open. Modern is draft, not approved or published.

## Implemented

Library landing page, six category pages, one Craftsman draft, typed content registry, reusable article/figure/list/breadcrumb components, citation links, related reading, one closing CTA, metadata, and sitemap integration. Header/footer expose one library link only when library access is enabled. No dependencies added.

## Checks completed

- Production build passed using Next.js 16.4.0 and local Node 22.23.3.
- Standalone TypeScript check passed.
- Twelve Node tests passed at the last full verification: six existing inquiry/project tests, five library policy/content tests, and one approved-artifact hash test. Both articles are now approved but private. Tests verify that snapshot images require individual approval and cannot bypass the owning article's publication controls.
- Production build deliberately used `DESIGN_LIBRARY_PREVIEW=true` and a real `NEXT_PUBLIC_SITE_URL` to exercise the unsafe configuration case. The library still returned 404 for landing, all six categories, and Craftsman. Draft body content was absent from those responses.
- Production homepage had no library navigation link; sitemap contained the configured real domain and no library URLs.
- Local preview landing/category/article checked at 1440, 1280, 820, 390, and 320 CSS pixels with Playwright and Edge. No horizontal overflow, page errors, broken local anchors, or automated axe WCAG A/AA violations. One H1 per page, noindex metadata, five generated figures, and one article CTA verified.
- Revised snapshot appears before “In this article”; the common-colors/materials panel is accessible by its heading and contents link. Main figures decode at 1536 × 1024; Victorian's six new snapshot thumbnails decode at 384 × 256 and display at 108 × 72 CSS pixels. Every image has descriptive alt text and generated-image disclosure, and bypasses the public optimizer in preview.
- All sixteen image endpoints (five Craftsman, five Victorian body images, six Victorian thumbnails) return WebP in development preview, with private/no-store and noindex headers. Production returns 404 for each endpoint and direct asset path. A production Next optimizer request for an image also fails. Unknown preview filenames return 404.
- Both Craftsman and Victorian were checked at all five widths. The category index accurately distinguishes approved-awaiting-publication from draft-for-review. Victorian's related reading links to the approved Craftsman article only inside local preview.
- Production Node route tracing includes all sixteen WebP assets, verified in the generated `.nft.json`. Server package inclusion does not create public/static routes.
- Desktop navigation fit checked at 1440/1280; mobile/tablet menu active link, Escape, and focus return checked at smaller sizes.
- All six category routes returned 200 in preview; five empty categories accurately stated that no articles are published. Unknown categories, unknown articles, and a valid slug under the wrong category returned 404.
- Preview sitemap also excluded library URLs.
- Desktop landing and mobile article screenshots inspected. Screenshots are local QA artifacts under `artifacts/design-library/` and are ignored by Git.

Reproduce browser checks with `node tests/design-library-browser.mjs` after starting the local preview at port 3002 and production server at port 3003. Bind both to `127.0.0.1`; the production server uses a build with a real site URL for the sitemap assertion.

## Limits and pending work

- No lint script/configuration exists; lint was not run. No lint dependency was added.
- Craftsman has five user-approved generated illustrations (about 1.38 MB total). Victorian has five approved main illustrations (about 1.85 MB total) plus six approved 108 × 72-display engraving-style thumbnails (145,054 bytes total, 15–30 KB each). WebP quality 85, no cropping; exact prompts and original tool paths recorded separately. Victoria's thumbnail is an imagined likeness, not a photograph. No documentary photo rights are claimed.
- Automated accessibility checks are not a complete manual accessibility audit. No assistive-technology or real-device testing performed.
- No field Core Web Vitals or production hosting checks performed. No claim of search rich-result eligibility.
- No live form submission, external upload, hosted preview, publication, merge, commit, or deployment performed.
- Node emitted the existing module-type warning during TypeScript-based unit tests; tests passed. Package module semantics were not changed.
- The editorial guide now records the explicitly approved Craftsman reference and lighter per-article checks. Victorian uses that template and is approved. Ipswich municipal color guidance and the SMJ museum description were verified from indexed first-party text; direct requests redirected/timed out, disclosed in the Victorian review notes.

## Handoff

Status: Craftsman and Victorian are approved, with publication on hold. The other 44 articles remain planned. No push, commit, merge, or deployment performed. No technical blocker to local review. Four suggested PNW inventory additions await user authorization; none were added. Modern Architecture is next in the existing queue; it needs an explicit request before drafting.

## Art Deco draft check — 2026-10-26

- The user requested Art Deco as the next private draft. Its page returned HTTP 200 with noindex, and each of its five guarded WebP image routes returned HTTP 200 in explicit loopback development preview.
- `npm.cmd run typecheck` passed. `npm.cmd test` passed all 12 tests, including the new Art Deco reference, anchor, category, and figure checks.
- Edge/Playwright at 1365 and 390 CSS pixels loaded and decoded all five figures with no horizontal overflow. Mobile opening screenshot was inspected.
- Full production build and broad accessibility/release checks were deferred under the approved faster per-article cadence. Image provenance and usage rights remain unresolved; Art Deco is not editorially approved or publication authorized.
- Current local preview: `http://127.0.0.1:3002/design-library/architectural-styles/art-deco`. Craftsman and Victorian remain approved but private. Modern, Mid-Century Modern, Contemporary, and Art Deco remain private drafts. No push, commit, merge, or deployment was performed. The single next user action is to review Art Deco and provide edits or editorial approval, including confirmation of image provenance and rights.

## Local working branch check — 2026-10-29

- Created `design-library/working-draft` from the existing local Design Library planning commit, preserving all existing work.
- Production `npm.cmd run build` passed with the release gate still disabled; `npm.cmd run typecheck` and all 12 tests passed.
- The Design Library implementation, article drafts, research/review records, original supplied images, and private WebP assets are being consolidated in a local commit. Generated caches, local tools, and screenshots remain ignored.
- No remote push, merge, deployment, article status change, or public release was authorized.
