# Design Library decisions

## Approved 2026-10-25

The user explicitly approved the Stage 1 audit proposal, with the following editorial adjustment.

- Implement infrastructure and exactly one sample: Craftsman Architecture. Stop for review.
- Typed local content and reusable article components; no new dependencies or MDX configuration in this phase.
- Routes: `/design-library`, `/design-library/[category]`, `/design-library/architectural-styles/craftsman`.
- Six category introductions; no unwritten article listings and no primary-navigation category dropdown.
- Local-only draft preview. Production library access and navigation remain disabled pending separate authorization. Content approval does not authorize publication or deployment.
- Image briefs and labeled placeholders for the first review; no finished assets claimed. Documentary rights or generation availability must be verified before finished assets are created.
- Article length: approximately **1,400–2,500 words**, as flexible guidelines. Use the natural length the subject warrants; do not pad or truncate to meet a number.
- Above approximately **1,800 words**, add one or two additional photos or infographics to break up the text. Apply this to the eventual assets as well as the brief plan.
- Existing brand styles and the `/start-a-project` destination are retained. One restrained closing CTA.

The final library name, inventory approval, sample content approval, image approval, and publication schedule remain open. “The Design Library” remains the working name.

## Sample revision authorized 2026-10-25

- The user requested a snapshot/infographic summary immediately above “In this article.” Implemented as “At a glance,” with short facts, a recognition diagram, and defining features.
- The user requested a common-colors-and-materials recognition guide. Implemented as a separately scannable, cited panel beside the materials discussion; illustrative swatches are distinguished from documented historic paint matches. Future articles should adapt the panel to the subject rather than force house-recognition content into unrelated topics.
- The user explicitly approved the image **direction** and authorized developing finished imagery and these revisions for Craftsman. Five photorealistic generated architectural illustrations were created using the built-in tool, with individual captions and provenance/prompt records. This is not approval of final assets or revised copy.
- Reusable summary and recognition components are part of the infrastructure; no additional queued article may be drafted without explicit instruction.
- Article remains in `revision` until the user explicitly approves the revised content. Publication remains separately unauthorized.

## Reference approval and next article — 2026-10-25

- The user explicitly approved the revised Craftsman article, images, and layout as the reference template. Record `approved`, with content and image approval dates; no further approval of that version is required.
- Publication preparation is authorized, but **no push or release** until a larger selection is finished and the user separately authorizes it. The user did not set a launch count or date.
- The user explicitly requested the next Architectural Styles article. That is **Victorian Architecture**, slug `victorian`, using the same category/article route pattern and approved editorial presentation. Only Victorian is authorized as the next draft; no third article may begin automatically.
- The user requested a quick Pacific Northwest coverage audit. Missing-title recommendations are in `PNW-COVERAGE-AUDIT.md`; adding new titles still awaits their approval. The 46-title inventory remains unchanged.

## Victorian snapshot revision requested — 2026-10-25

- User requested six generated small images, one above each item in Victorian's “At a glance”: Victoria portrait, pattern-book/ornament illustration, roof detail, Italianate example, Second Empire example, and Queen Anne example.
- Implemented as optional per-item images; the approved Craftsman snapshot and its image files are preserved. Victorian remains in revision, not approved.
- The six new assets use a consistent hand-colored engraving appearance, with generated-image disclosure and an explicit imagined-likeness note for Victoria. Asset access and approval checks cover snapshot images as well as hero/body images.
- No queue additions, publication, push, or deployment are authorized by this revision request.

## Victorian approval and verification cadence — 2026-10-25

- The user approved the complete Victorian article, including its layout, five article illustrations, and six small “At a glance” illustrations. Record editorial and individual asset approval. Publication remains on hold; no push or deployment was authorized.
- The user asked to speed work across the large article queue without lowering quality. For each subsequent article, keep source verification, image/provenance review, local preview, and a focused content/access check. Run build/typecheck or targeted browser checks when a change affects shared code or reveals a concrete risk. Reserve the full production build, cross-site responsive/accessibility sweep, release manifest verification, sitemap/publication-gate audit, and hosting checks for the prepublication release candidate. Any code change still gets an appropriate focused check before review.
- Next in the unchanged Architectural Styles queue is Modern Architecture (`modern`). Identifying it is not authorization to draft it. Four proposed Pacific Northwest titles remain pending separately.

## Modern preview authorized — 2026-10-26

- The user explicitly requested Modern Architecture as the next article, supplied a Markdown draft and five images, and asked for a localhost preview using a quick, focused check.
- Adapt the supplied copy into the established article structure and use all five supplied images, with captions that match the actual visuals. Preserve the source draft and original PNGs; keep derivative assets private.
- Modern remains a draft. The supplied source list is a verification checklist, not prior editorial approval. Image creator/provenance and use rights need confirmation before approval. No publication, push, or deployment is authorized.

## Mid-Century Modern preview authorized — 2026-10-26

- The user explicitly requested the Mid-Century Modern article using their supplied Markdown and image set, with discretion to select the useful images. Modern remains a draft and is paused while this requested article is prepared.
- Use the established private preview and content format. Select distinct exterior, interior, roof, material, and Northwest views; preserve all original assets and omit redundant near-duplicate exteriors. Supplied-image provenance and use rights are pending review.
- The article remains a draft. No content or image approval, queue addition beyond the existing title, publication, push, or deployment was authorized.

## Contemporary preview authorized — 2026-10-26

- The user explicitly requested the next queued article, Contemporary Architecture, using a supplied Markdown draft and five supplied images. Modern and Mid-Century Modern remain private drafts; neither approval is inferred from proceeding to this requested article.
- Adapt the copy to the established private article route and components. Use all five supplied images according to what they depict, preserve their original files, and keep creator/generation/use-rights provenance pending review.
- Contemporary remains a draft. No content or image approval, publication, push, or deployment was authorized.

## Art Deco preview authorized — 2026-10-26

- The user explicitly requested the Art Deco article from the newly supplied draft and images. Adapt it into the existing private article template, using the five supplied scenes where they illustrate the copy.
- Preserve the original Markdown and PNGs. The article remains a draft pending editorial review, image provenance and rights confirmation. This request grants no publication, push, or deployment authorization.

## Local working branch — 2026-10-29

- The user requested that the Design Library work become a working branch that can be pushed together when ready. Consolidate the existing implementation, research notes, supplied drafts, and private image assets on `design-library/working-draft` with a local commit.
- This is a version-control handoff, not editorial approval or publication authorization. Keep the library release gate off and all draft article statuses unchanged. Do not push, merge, or deploy the branch until separately requested.

## Studio Dee image use — 2026-10-29

- The user states that all supplied Design Library images may be treated as having no image-rights issue; they are primarily the user's own or generated images. Remove rights-pending and creator-confirmation reminders from current image metadata, captions, and review checklists. Do not invent individual creators, licenses, or documentary building identities.
- A supplied image may pass release readiness after explicit editorial image approval. Article content approval, publication authorization, and the library release gate remain separate requirements. Earlier rights-pending notes in this decision log are superseded by this instruction.

## Tudor Revival preview authorized — 2026-10-29

- The user explicitly requested the next queued article, Tudor Revival Architecture, from the supplied revised Markdown and five images. Adapt it into the existing private Design Library layout and use the supplied images where they illustrate the copy.
- Preserve the original Markdown and PNGs. The article remains a draft until the user approves its editorial content. No publication, push, merge, or deployment was authorized.

## Colonial Revival preview authorized — 2026-10-29

- The user explicitly requested the next queued article, Colonial Revival Architecture, from the supplied Markdown and five images. Adapt the copy and supplied images into the established private article layout. The images supersede the draft's older production brief stating they still needed to be made.
- Preserve the original Markdown and PNGs. The article remains a draft until editorial approval. This request gives no authorization to push, merge, deploy, or publish.

## Prairie School preview authorized — 2026-10-30

- The user explicitly requested the next queued article, Prairie School Architecture, from the supplied Markdown and five images. Adapt both into the established private article layout; the supplied images supersede the draft's old briefs-only metadata.
- Preserve the original Markdown and PNGs. The article remains a draft until editorial approval. No push, merge, deployment, or publication was authorized.

## Mediterranean Revival preview authorized — 2026-10-30

- The user explicitly requested the final Architectural Styles article for now, Mediterranean Revival Architecture, from supplied text and images. Adapt it into the established private article layout and use the images where they support the copy.
- Preserve the original Markdown and PNGs. The article remains a draft until editorial approval. No push, merge, deployment, or publication was authorized.

## Topic-based image folders and Bungalow preview authorized — 2026-10-30

- The user requested `assets/design-library/{topic}/{article}`. Move the ten existing style folders into `architectural-styles/` and use the supplied `home-types/bungalow/` folder for the first House Types & Forms article. Keep existing article and image URLs while resolving files from their category folders.
- The user explicitly requested Bungalow from the supplied text and images. Adapt it into the established private layout, maintaining the distinction between house form and architectural style. Preserve the original text and images. The draft awaits editorial approval; no push, merge, deployment, or publication was authorized.

## American Foursquare preview authorized — 2026-11-01

- The user explicitly requested the American Foursquare as the next House Types & Forms article. The five PNGs in `assets/design-library/home-types/american-foursquare/` are the official images for this draft, superseding the text's earlier floor-plan/interior image briefs.
- Update the supplied Markdown so its image notes describe only those five images, then adapt it into the existing private article layout. Keep the house form distinct from the styles applied to it. Editorial approval and publication authorization remain separate; no push, merge, deployment, or publication was authorized.
