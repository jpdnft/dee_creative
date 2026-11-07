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

## Image-use decision — 2026-10-29

- Studio Dee confirmed that its supplied imagery has no outstanding rights issue. Rights-pending notices and creator-confirmation prompts in current article metadata, visible captions, and review notes were removed. Earlier verification notes describing a rights hold are superseded by this decision.
- Supplied images can pass publication readiness after individual editorial image approval. The four draft articles remain unapproved; the publication gate remains disabled. Captions still avoid attributing conceptual images to specific historic buildings or completed Studio Dee projects.

## Tudor Revival draft check — 2026-10-29

- Adapted the supplied revised Markdown and all five supplied PNGs into one private article with nine sections and approximately 2,157 words of introduction/body prose. The original files remain unchanged; WebP derivatives are outside `public/`.
- Cross-checked the Tudor period, American style features, and the Tarpley, Autzen, and Peacock Lane references against linked primary or institution-maintained records. Captions describe conceptual images without assigning them to named historic buildings.
- `npm.cmd run typecheck` passed; all 12 quick tests passed. The local article and five image routes returned HTTP 200, with noindex on the article. Edge/Playwright at 1365 and 390 CSS pixels decoded five figures with no horizontal overflow. The mobile opening was visually inspected.
- Full production build and broad accessibility/release sweep were deferred under the approved per-article cadence. Tudor Revival is a draft; no content or image approval, push, merge, or publication was performed. The next user action is to review this article and send edits or explicit editorial approval.

## Colonial Revival draft check — 2026-10-29

- Adapted the supplied Markdown and all five supplied PNGs into one private article with nine sections and approximately 1,984 words of introduction/body prose. The original files remain unchanged; WebP derivatives are outside `public/`.
- Checked the style history against National Park Service and Historic New England sources, the Ayer-Shea details against its museum record, and Laurelhurst prevalence against the Oregon Historic Sites Database. An NPS source supports the article's discussion of selective historical memory.
- `npm.cmd run typecheck` passed; all 12 quick tests passed. The local page and five image routes returned HTTP 200, with noindex on the article. Edge/Playwright at 1365 and 390 CSS pixels decoded five figures with no horizontal overflow. The mobile opening was visually inspected.
- Full production build and broad accessibility/release sweep were deferred under the approved per-article cadence. Colonial Revival remains a draft. No approval, push, merge, or publication was performed. The next user action is to review Colonial Revival and provide edits or explicit editorial approval.

## Prairie School draft check — 2026-10-30

- Adapted the supplied Markdown and all five supplied PNGs into one private article with nine sections and approximately 2,057 words of introduction/body prose. The original files remain unchanged; WebP derivatives are outside `public/`.
- Checked the movement and Robie House claims against the Wright Trust, Chicago Architecture Center, and Met. Verified Bennes, Maegly, and Delahunt references against Oregon historic-site records. The supplied interiors have Craftsman/Prairie overlap; captions claim only visible Prairie-influenced features.
- `npm.cmd run typecheck` passed; all 12 quick tests passed. The local page and five image routes returned HTTP 200 with noindex on the article. Edge/Playwright at 1365 and 390 CSS pixels decoded five figures with no horizontal overflow. The mobile opening was visually inspected.
- Full production build and broad accessibility/release sweep were deferred under the approved per-article cadence. Prairie School remains a draft. No approval, push, merge, or publication was performed. The next user action is to review Prairie School and provide edits or explicit editorial approval.

## Mediterranean Revival draft check — 2026-10-30

- Adapted the supplied Markdown and all five supplied PNGs into one private article with nine sections and approximately 2,170 words of introduction/body prose. The original files remain unchanged; WebP derivatives are outside `public/`.
- Checked the broad revival characteristics against the National Park Service and City of Miami Beach, and the South Portland Carnegie Library and W. E. Field Tile Co. Building against the Portland design guidelines and ODOT historic resources report. Replaced the source draft's broken ODOT URL with the accessible project report. The Alameda residential reference remains attributed to a local architectural-history source.
- `npm.cmd run typecheck` passed; all 12 quick tests passed. The local article and five images loaded at 1365 and 390 CSS pixels, with HTTP 200 on the article, five decoded figures, and no horizontal overflow. The mobile opening was visually inspected.
- Full production build and broad accessibility/release sweep were deferred under the approved per-article cadence. Mediterranean Revival remains a draft. No approval, push, merge, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Topic folder refactor and Bungalow draft check — 2026-10-30

- Moved all ten Architectural Styles image folders into `assets/design-library/architectural-styles/`. The image handler now resolves a known article's category to its server-only folder; House Types & Forms maps to `home-types`. Existing image URLs remain stable. Updated the Craftsman approval manifest's file paths; its image bytes and editorial hash remain unchanged.
- Adapted the supplied Bungalow draft and all five supplied PNGs into the first private House Types & Forms article, with ten sections and approximately 1,941 introduction/body prose words. The original files remain unchanged; WebP derivatives are outside `public/`.
- Checked the Bengal origin against National Park Service documentation, the American Arts and Crafts context against the City of Los Angeles study, and four bungalow roof subtypes plus the local Portland bungalow against Portland/NPS documentation. The supplied images illustrate the Bungalow house type; none is labeled as a documented historic house or assigned to Colonial Revival.
- `npm.cmd run typecheck`, all 14 quick tests, and `npm.cmd run build` passed. The category page lists Bungalow; Bungalow and five figures loaded at 1365 and 390 CSS pixels without horizontal overflow. The mobile opening was inspected. Craftsman and Victorian pages and sample image routes returned HTTP 200 after the move.
- Bungalow remains a draft, with no content or image approval. No push, merge, deployment, or publication was performed. The next user action is to review Bungalow and provide edits or explicit editorial approval.

## American Foursquare draft check — 2026-11-01

- Adapted the supplied Markdown and all five official PNGs into one private House Types & Forms article with nine sections and approximately 1,726 introduction/body prose words. The source Markdown now lists only the five actual images and omits the superseded plan/interior image briefs; the original PNGs remain unchanged. Private WebP derivatives stay outside `public/`.
- Checked the form and common plan against the City of Naperville manual and Ballard Historical Society; verified Irvington's 305 Foursquare inventory count and the McBride House address in Oregon's historic-site record. The five images are conceptual exteriors; none is presented as a documentary Portland property or as a floor-plan/interior image.
- `npm.cmd run typecheck` and all 14 quick tests passed. The local article and five images loaded at 1365 and 390 CSS pixels with HTTP 200 and no horizontal overflow; the mobile opening was visually inspected. The House Types & Forms page lists the article, and the article preview includes no obsolete image filenames and carries noindex metadata.
- Full production build and broad release sweep remain for the later publication pass. American Foursquare remains a draft. No content or image approval, push, merge, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Ranch House draft check — 2026-11-01

- Adapted the supplied Markdown and all five PNGs into one private House Types & Forms article with nine sections and approximately 1,626 introduction/body prose words. The source Markdown now maps the actual images instead of unmade image briefs; the original PNGs remain unchanged. Private WebP derivatives stay outside `public/`.
- Checked California origins against Save Our Heritage Organisation and the National Park Service, postwar interior-plan variation against an NPS study, and the Oregon examples against Redmond historic-resource documentation, the Oregon City survey, and Restore Oregon's Glendoveer research. Captions describe conceptual exteriors without identifying them as documentary properties.
- `npm.cmd run typecheck` and all 14 quick tests passed. The local article and five images loaded at 1365 and 390 CSS pixels with HTTP 200 and no horizontal overflow; the mobile opening was visually inspected. The House Types & Forms page lists Ranch House, the draft preview has noindex metadata, and no obsolete image-brief filenames appear in the page.
- Full production build and broad release sweep remain for the later publication pass. Ranch House remains a draft. No content or image approval, push, merge, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Townhouse and Rowhouse draft check — 2026-11-01

- Adapted the supplied Markdown and five PNGs into one private House Types & Forms article with nine body sections and approximately 1,754 introduction/body prose words. The original PNGs remain in `home-types/townhouse/`; WebP derivatives serve through the private image endpoint using a validated article asset-folder override.
- Checked rowhouse history and characteristics against Philadelphia and New York City manuals, Kentlands against the Congress for the New Urbanism, and the Campbell Townhouses against Oregon's Historic Sites Database. Removed the unsupported Trenkmann attached-row example. Captions label all five images as illustrations and do not claim they document named places.
- `npm.cmd run typecheck`, all 14 quick tests, and `npm.cmd run build` passed. The localhost article and five images returned HTTP 200. Browser checks at 1365 and 390 CSS pixels found five decoded images and no horizontal overflow; the mobile opening was inspected.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Shotgun and Dogtrot House draft check — 2026-11-01

- Replaced the two planned House Types & Forms queue entries with one combined draft at `shotgun-dogtrot-house`, using the five supplied PNGs from `home-types/shotgun-dogtrot/` and five private WebP derivatives. Eight body sections and approximately 1,757 introduction/body prose words are presented in the established article layout.
- Added a labeled, accessible SVG plan sketch to At a glance. The text also states the defining difference between walking through shotgun rooms and between dogtrot rooms. The two images with glazed upper connectors are identified as later interpretations, and none of the illustrations is attributed to a real historic building.
- Checked shotgun form, origin debate, and street-frontage tax folklore against the Preservation Resource Center and Jay D. Edwards; checked dogtrot construction and the Johnson cabin against the National Park Service and Texas State Historical Association.
- `npm.cmd run typecheck`, all 14 quick tests, and `npm.cmd run build` passed. The local article and five images returned HTTP 200; browser checks at 1365 and 390 CSS pixels found five decoded figures and no horizontal overflow. The mobile opening and plan sketch were visually inspected.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Split-Level House draft check — 2026-11-01

- Adapted `docs/SPLIT-LEVEL-HOUSE.md` and all five supplied PNGs into one private House Types & Forms article with eight body sections and approximately 1,508 introduction/body prose words. Private WebP derivatives live in `home-types/split-level/` alongside the originals.
- Added a labeled, accessible SVG section comparing tri-level and split-entry arrangements, with the essential distinctions also available as selectable text. Captions describe the five images as illustrations and do not assign them to real properties. The article makes no unverified claim about a specific Portland split-level.
- Checked the postwar chronology and terrain response against the South Dakota State Historic Preservation Office, regional form against Vancouver Heritage Foundation, and the broader postwar housing context against the National Park Service.
- `npm.cmd run typecheck`, all 14 quick tests, and `npm.cmd run build` passed. The local article, five images, and House Types & Forms category link returned HTTP 200. Browser checks at 1365 and 390 CSS pixels found five decoded figures and no horizontal overflow; the mobile opening and diagram were inspected.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Farmhouse draft check — 2026-11-02

- Adapted `docs/design-library/FARMHOUSE.md` and all five supplied PNGs into one private House Types & Forms article with nine body sections and approximately 1,862 introduction/body prose words. Private WebP derivatives live in `home-types/farmhouse/` alongside the originals.
- Added a labeled, accessible SVG farmstead sketch, with its house, work yard, garden, barn, and field relationships also described in selectable text. Captions identify the images as illustrations, including the Oregon image, and do not attribute any to the documented properties named in the copy. The historic farmhouse versus Modern Farmhouse table was adapted into prose.
- Checked the broad diversity of farm dwellings against the USDA National Agricultural Library; the I-house against the Pennsylvania Historical & Museum Commission; and Manning–Kamna Farm, Shipley–Cook Farmstead, and Lamson Ranch against Oregon historic-site records.
- `npm.cmd run typecheck`, all 14 quick tests, and `npm.cmd run build` passed. The local article and House Types & Forms category link returned HTTP 200. Browser checks at 1365 and 390 CSS pixels found five decoded figures and no horizontal overflow; the mobile opening and farmstead sketch were inspected.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Cape Cod House draft check — 2026-11-02

- Added the user-requested Cape Cod House to the House Types & Forms queue; it was not previously listed. Adapted `docs/CAPE-COD-HOUSE.md` and all five supplied PNGs into one private article with nine body sections and approximately 1,797 introduction/body prose words. WebP derivatives stay in `home-types/cape-cod/` outside `public/`.
- Added a labeled, accessible SVG elevation comparing half, three-quarter, and full Cape bay arrangements, with the same information in selectable text. None of the supplied images clearly shows a textbook three-quarter Cape, so no image is captioned as one. All five are identified as illustrations rather than documentary historic houses.
- Checked the bay definitions against Historic New England, the Royal Barry Wills context against its archive, and the Northwest Revival chronology and Western Pine Association 1939 model-home claim against Washington's Department of Archaeology and Historic Preservation.
- `npm.cmd run typecheck`, all 14 quick tests, and `npm.cmd run build` passed. The local article, five images, and category link returned HTTP 200. Browser checks at 1365 and 390 CSS pixels found five decoded figures and no horizontal overflow; the mobile opening and bay diagram were inspected.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Cottage draft check — 2026-11-02

- Added the user-requested Cottage article to the House Types & Forms queue; it was not previously listed. Adapted `docs/THE-COTTAGE.md` and all five supplied PNGs into one private article with nine body sections and approximately 1,610 introduction/body prose words. WebP derivatives stay in `home-types/cottage/` outside `public/`.
- Mapped the images to English country, Storybook, coastal, Northwest woodland, and contemporary expressions. Captions identify all five as illustrations, not documentary properties. Corrected a stray line in the supplied draft and replaced its research prompts with linked sources.
- Checked the picturesque cottage and house–garden discussion against Historic England, the American Storybook context against National Park Service documentation, and Portland English Cottage examples against the city's King's Hill guidelines and Irvington page. The regional passage now distinguishes documented local examples from broader design interpretation.
- `npm.cmd run typecheck`, all 14 quick tests, and `npm.cmd run build` passed. The local article, five images, and category link returned HTTP 200. Browser checks at 1365 and 390 CSS pixels found five decoded figures and no horizontal overflow; the mobile opening was inspected.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Traditional Interior Design draft check — 2026-11-03

- Adapted `TRADITIONAL-INTERIOR-DESIGN.md` and all five supplied PNGs into the first private Interior Design Styles article with nine body sections and approximately 1,961 introduction/body prose words. The queue's `traditional` slug is used for both article route and private asset folder. WebP derivatives stay outside `public/`.
- Added an accessible room-vignette SVG with six numbered, selectable cues and a colors-and-materials panel. Swatches are labeled illustrative contemporary color families rather than authenticated historic paints. The draft's comparison table was adapted into prose. Captions identify all five supplied room images as illustrations, not Studio Dee projects or documented period interiors.
- Checked Georgian room organization and eighteenth-century furniture against Metropolitan Museum of Art and English Heritage sources, historic interior renovation against National Park Service guidance, and Portland house-style context against the City of Portland's Irvington record. The article explicitly limits the current American design use of traditional to a Western lineage.
- `npm.cmd run typecheck`, all 14 quick tests, and `npm.cmd run build` passed. The local article, five images, and Interior Design Styles category link returned HTTP 200. Browser checks at 1365 and 390 CSS pixels found five decoded figures and no horizontal overflow; the mobile opening and At a glance panel were inspected.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Transitional Interior Design draft check — 2026-11-03

- Adapted the supplied Transitional draft and all five PNGs into a private article with eleven body sections and approximately 2,305 introduction/body prose words. WebP derivatives remain outside `public/`.
- Reviewed the five room images against captions and alt text. The hero and four body images are presented as illustrations. The At a glance panel and illustrative color/material guide use existing components.
- Checked the style description against Architectural Digest's designer interviews and the renovation guidance against National Park Service Preservation Brief 18. The article avoids a precise founding date and treats Portland examples as editorial applications.
- `npm.cmd run typecheck` and all 14 quick tests passed. The local article and hero image returned HTTP 200. Browser checks at 1365 and 390 CSS pixels found five decoded figures and no horizontal overflow; the mobile opening was inspected. Per the editorial guide's efficient review workflow, the full production build and broader release sweep are deferred to the release gate.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Scandinavian Interior Design draft check — 2026-11-03

- Adapted the supplied Scandinavian draft and all five PNGs into a private article with nine body sections and approximately 2,364 introduction/body prose words. WebP derivatives remain outside `public/`.
- Reviewed each room image against its caption and alt text. The At a glance panel and illustrative colors/materials guide use the existing article components. The article keeps the geographical distinction between Scandinavia and the broader Nordic region.
- Checked the 1930 Stockholm Exhibition against ArkDes, Scandinavian organic modernism against the Metropolitan Museum of Art, transatlantic exchange against Milwaukee Art Museum and Nationalmuseum Sweden, and the 1954–57 exhibition tour against the Milwaukee Art Museum Research Center.
- `npm.cmd run typecheck` and all 14 quick tests passed. Browser checks at 1365 and 390 CSS pixels returned HTTP 200, found five decoded figures, and found no horizontal overflow; the mobile opening was inspected. Per the editorial guide, the full production build and broader release sweep are deferred to the release gate.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Minimalist Interior Design draft check — 2026-11-03

- Adapted the supplied Minimalist draft and all five PNGs into a private article with twelve body sections and approximately 2,542 introduction/body prose words. WebP derivatives remain outside `public/`.
- Reviewed each room image against its caption and alt text. The At a glance panel and illustrative colors/materials guide use existing components. The article distinguishes early modernist reduction, the 1960s Minimalist art movement, and later residential design.
- Checked art history against Museum of Modern Art entries, modernism against the Victoria and Albert Museum, and John Pawson against the Design Museum. The Japanese precedents are described without equating Japanese design with minimalism.
- `npm.cmd run typecheck` and all 14 quick tests passed. Browser checks at 1365 and 390 CSS pixels returned HTTP 200, found five decoded figures, and found no horizontal overflow; the mobile opening was inspected. Per the editorial guide, the full production build and broader release sweep are deferred to the release gate.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Maximalist Interior Design draft check — 2026-11-03

- Adapted the supplied Maximalist draft and all six PNGs into a private article with thirteen body sections and approximately 2,531 introduction/body prose words. WebP derivatives remain outside `public/`.
- Reviewed the living room, dining room, painted staircase, library, bedroom, and powder room against their captions and alt text. The staircase is included as an illustration of decorated architectural surfaces. At a glance and illustrative colors/materials use existing components.
- Checked Victorian collecting and patterned interiors against the Metropolitan Museum of Art, Dorothy Draper against Cooper Hewitt, Memphis's 1981 formation against the Metropolitan Museum of Art, and renovation guidance against National Park Service and the City of Portland.
- `npm.cmd run typecheck` and all 14 quick tests passed. Browser checks at 1365 and 390 CSS pixels returned HTTP 200, found six decoded figures, and found no horizontal overflow; the mobile opening was inspected. Per the editorial guide, the full production build and broader release sweep are deferred to the release gate.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.

## Eclectic Interior Design draft check — 2026-11-04

- Adapted the supplied Eclectic draft and all seven PNGs into a private article with fourteen body sections and approximately 4,495 introduction/body prose words. The longer length is retained for editorial review, with seven images distributed through the piece. WebP derivatives remain outside `public/`.
- Reviewed each image against its caption and alt text. The supplied catio is described as a catio; the actual dining room and bedroom images guide their captions rather than the earlier briefs. At a glance and the illustrative colors/materials guide use existing components.
- Checked nineteenth-century eclecticism against the Smithsonian; Portland salvage and reuse context against the Oregon Encyclopedia and City of Portland; and renovation, permit, and lead/asbestos notes against the National Park Service and City of Portland.
- `npm.cmd run typecheck` and all 14 quick tests passed. Browser checks at 1365 and 390 CSS pixels returned HTTP 200, found seven decoded figures, and found no horizontal overflow; the mobile opening was inspected. Per the editorial guide, the full production build and broader release sweep are deferred to the release gate.
- The article remains a private draft awaiting editorial review. No push, merge, deployment, or publication was performed. The next user action is to review this article and provide edits or explicit editorial approval.
## Industrial Interior Design draft check — 2026-11-04

- Adapted the supplied Industrial draft and all seven PNGs into a private article with thirteen body sections and approximately 4,375 introduction/body prose words. Seven images are distributed through the longer piece. WebP derivatives remain outside `public/`.
- Checked SoHo loft history against Aaron Shkuda’s chapter abstract, Central Eastside context against Prosper Portland, and renovation context against the Oregon Health Authority and City of Portland.
- `npm run typecheck` passed; `npm test` passed (14 tests). Local desktop (1365px) and mobile (390px) browser previews returned 200, decoded seven images, and had no horizontal overflow. Full build deferred to the publication gate.
- Editorial status: draft; no publication or deployment authorized.

## Wainscoting and Wall Paneling draft check — 2026-11-04

- Adapted the supplied draft and all seven PNGs into the first private Architectural Elements & Details article. Its canonical copy is the typed article file; the Markdown remains an editorial input. The article has thirteen body sections and approximately 3,557 introduction/body prose words. Seven images are distributed through it, with WebP derivatives outside `public/`.
- Added the category-to-asset-folder mapping for `architectural-elements-and-details` to `architectural-elements`.
- Checked terminology with This Old House, wood-paneling standards context with the Architectural Woodwork Institute, historic-interior guidance with the National Park Service, and lead-safe renovation context with the US EPA.
- `npm run typecheck` passed; `npm test` passed (14 tests). Local desktop (1365px) and mobile (390px) browser previews returned 200, decoded seven images, and had no horizontal overflow. Full build deferred to the publication gate.
- Editorial status: draft; no publication or deployment authorized.

## Crown Molding, Baseboards, and Interior Trim draft check — 2026-11-04

- Adapted the supplied draft and all eight PNGs into a private Architectural Elements & Details article. The typed article is the canonical site copy; the Markdown is editorial input. The article has thirteen body sections and approximately 3,680 introduction/body prose words. All eight images have WebP derivatives outside `public/`.
- Checked trim vocabulary and historic-profile matching against This Old House, crown installation details against Fine Homebuilding, and historic-interior preservation against the National Park Service.
- `npm run typecheck` passed; `npm test` passed (14 tests). Local desktop (1365px) and mobile (390px) browser previews returned 200, decoded eight images, and had no horizontal overflow. Full build deferred to the publication gate.
- Editorial status: draft; no push, publication, or deployment authorized by this article request.

## Design Library founder introduction check — 2026-11-04

- Added the supplied portrait and introduction to a right-side founder panel on `/design-library`; the six category links remain in the main column. The panel follows them on mobile.
- `npm run typecheck` passed. Local browser checks at 1440px, 900px, and 390px returned 200, loaded the portrait, found all six categories, and found no horizontal overflow. The desktop full page and mobile opening were visually inspected.
- The page remains inside the existing private Design Library gate. No push or deployment was performed.

## Coffered, Beamed, and Decorative Ceilings draft check — 2026-11-05

- Adapted the supplied draft and all eight PNGs into a private Architectural Elements & Details article. The typed article is the canonical site copy; the Markdown is editorial input. The article has eleven body sections and approximately 1,909 introduction/body prose words. All eight images have WebP derivatives outside `public/`.
- Checked ancient coffer precedents with the Metropolitan Museum of Art, pressed-metal and ornamental-plaster history with National Park Service briefs, decorative wood-beam construction with This Old House, and lead-safe renovation context with the US EPA.
- `npm run typecheck` passed; `npm test` passed (14 tests). Local desktop (1365px) and mobile (390px) browser previews returned 200, decoded eight images, and had no horizontal overflow. Full build deferred to the publication gate.
- Editorial status: draft; no push, publication, or deployment authorized by this article request.

## Built-In Bookcases and Architectural Cabinetry draft check — 2026-11-05

- Adapted the supplied draft and all seven PNGs into a private Architectural Elements & Details article. The typed article is the canonical site copy; the Markdown is editorial input. The article has nine body sections and approximately 1,755 introduction/body prose words. All seven images have WebP derivatives outside `public/`.
- Checked Arts and Crafts context against The Gamble House, casework standards against the Architectural Woodwork Institute, wood behavior against the USDA Forest Service, and historic-interior considerations against the National Park Service.
- `npm run typecheck` passed; `npm test` passed (14 tests). Local desktop (1365px) and mobile (390px) browser previews returned 200, decoded seven images, and had no horizontal overflow. Full build deferred to the publication gate.
- Editorial status: draft; no push, publication, or deployment authorized by this article request.

## Interior Arches and Architectural Openings draft check — 2026-11-06

- Adapted the supplied draft and eight of nine PNGs into a private Architectural Elements & Details article. The typed article is the canonical site copy; the Markdown is editorial input. The article has nine body sections and approximately 1,640 introduction/body prose words. Eight WebP derivatives live outside `public/`.
- Checked historic-interior context with the National Park Service, local construction-permit claims with Portland and Oregon government guidance, and Jaipur haveli variation and multifoil arches with the Rajasthan government heritage regulations.
- `npm run typecheck` passed. `npm test` passed 13 of 14 tests; the article-image test is blocked by the pre-existing deletion of `assets/design-library/architectural-elements/coffered-beamed-decorative-ceilings/decorative-ceilings-plaster.webp`, which is unrelated to this article. The local route returned 200 and contained the article heading, hero asset, and `noindex` metadata. Full build deferred to the publication gate.
- Editorial status: draft; no push, publication, or deployment authorized by this article request.

## Staircases, Balustrades, and Railings draft check — 2026-11-06

- Adapted the supplied draft and all six PNGs into a private Architectural Elements & Details article. The typed article is the canonical site copy; the Markdown is editorial input. The article has ten body sections and approximately 1,634 introduction/body prose words. Six WebP derivatives live outside `public/`.
- Checked component terminology against the Stairbuilders and Manufacturers Association, Portland permit guidance, and the Oregon Building Codes Division's 2026 code adoption schedule.
- `npm run typecheck` passed. `npm test` passed 13 of 14 tests; the image test still fails on the pre-existing missing `decorative-ceilings-plaster.webp` asset in an unrelated article. The local route returned 200, contained the article heading and `noindex` metadata, and all six images returned 200. Full build deferred to the publication gate.
- Editorial status: draft; no push, publication, or deployment authorized by this article request.

## Fireplaces and Architectural Surrounds draft check — 2026-11-07

- Adapted the supplied draft and all seven PNGs into a private Architectural Elements & Details article. The typed article is the canonical site copy; the Markdown in `docs/` is editorial input. The article has ten body sections and approximately 2,060 introduction/body prose words. Seven WebP derivatives live outside `public/`.
- Checked preservation context with the National Park Service and Historic England, and appliance and permit discussion with Portland, Oregon DEQ, and EPA sources. The EPA page is historical and no longer updated, so it is not used for current permit requirements.
- `npm run typecheck` passed. `npm test` passed 13 of 14 tests; the image test still fails on the pre-existing missing `decorative-ceilings-plaster.webp` asset in an unrelated article. The local route returned 200, contained the article heading and `noindex` metadata, and all seven images returned 200. Full build deferred to the publication gate.
- Editorial status: draft; no push, publication, or deployment authorized by this article request.
