# Local Design Library review

No hosting, upload, publication, or deployment is authorized.

From PowerShell, with the repository's Node 22+ tooling on PATH:

```powershell
$env:DESIGN_LIBRARY_PREVIEW = 'true'
npm run dev -- --hostname 127.0.0.1 --port 3002
```

Open `http://127.0.0.1:3002/design-library` or `http://127.0.0.1:3002/design-library/architectural-styles/craftsman`.

Victorian approved article: `http://127.0.0.1:3002/design-library/architectural-styles/victorian`. Craftsman and Victorian are approved editorially; both remain private.

Modern draft: `http://127.0.0.1:3002/design-library/architectural-styles/modern`. It uses the supplied Markdown draft and five supplied images; editorial approval is pending. Like the approved articles, it is visible only in the local development preview.

Mid-Century Modern draft: `http://127.0.0.1:3002/design-library/architectural-styles/mid-century-modern`. Six images were selected from the nine supplied; image mapping and review notes are in `MID-CENTURY-MODERN-REVIEW.md`. Modern and Mid-Century Modern remain private drafts, not approved articles.

Contemporary draft: `http://127.0.0.1:3002/design-library/architectural-styles/contemporary`. All five supplied images are used with captions that follow the visible scenes; mapping and review notes are in `CONTEMPORARY-REVIEW.md`. It is also private and unapproved.

Art Deco draft: `http://127.0.0.1:3002/design-library/architectural-styles/art-deco`. All five supplied images are used; image mapping and research corrections are in `ART-DECO-REVIEW.md`. It is private and unapproved.

Tudor Revival draft: `http://127.0.0.1:3002/design-library/architectural-styles/tudor-revival`. All five supplied images are used, including the supplemental infographic. Text equivalents of its main feature labels remain in the article. Image mapping and source notes are in `TUDOR-REVIVAL-REVIEW.md`. It is private and unapproved.

Colonial Revival draft: `http://127.0.0.1:3002/design-library/architectural-styles/colonial-revival`. All five supplied images are used as conceptual illustrations; mapping and source notes are in `COLONIAL-REVIVAL-REVIEW.md`. It is private and unapproved.

Prairie School draft: `http://127.0.0.1:3002/design-library/architectural-styles/prairie-school`. All five supplied images are used as conceptual illustrations; mapping and source notes are in `PRAIRIE-SCHOOL-REVIEW.md`. It is private and unapproved.

Mediterranean Revival draft: `http://127.0.0.1:3002/design-library/architectural-styles/mediterranean-revival`. All five supplied images are used as conceptual illustrations; mapping and source notes are in `MEDITERRANEAN-REVIVAL-REVIEW.md`. It is private and unapproved.

Bungalow draft: `http://127.0.0.1:3002/design-library/house-types-and-forms/bungalow`. The first House Types & Forms article uses five supplied images; image mapping and source notes are in `BUNGALOW-REVIEW.md`. It is private and unapproved.

American Foursquare draft: `http://127.0.0.1:3002/design-library/house-types-and-forms/american-foursquare`. It uses the five official images supplied under `home-types/american-foursquare/`; image mapping and source notes are in `AMERICAN-FOURSQUARE-REVIEW.md`. It is private and unapproved.

Ranch House draft: `http://127.0.0.1:3002/design-library/house-types-and-forms/ranch-house`. It uses all five supplied exteriors; image mapping and source notes are in `RANCH-HOUSE-REVIEW.md`. It is private and unapproved.

Townhouse and Rowhouse draft: `http://127.0.0.1:3002/design-library/house-types-and-forms/townhouse-rowhouse`. It uses all five supplied illustrations from `home-types/townhouse/`; image mapping and source notes are in `TOWNHOUSE-ROWHOUSE-REVIEW.md`. It is private and unapproved.

Shotgun and Dogtrot House draft: `http://127.0.0.1:3002/design-library/house-types-and-forms/shotgun-dogtrot-house`. It uses all five supplied illustrations from `home-types/shotgun-dogtrot/`; image mapping and source notes are in `SHOTGUN-AND-DOGTROT-REVIEW.md`. It is private and unapproved.

Split-Level House draft: `http://127.0.0.1:3002/design-library/house-types-and-forms/split-level-house`. It uses all five supplied illustrations from `home-types/split-level/`; image mapping and source notes are in `SPLIT-LEVEL-HOUSE-REVIEW.md`. It is private and unapproved.

Farmhouse draft: `http://127.0.0.1:3002/design-library/house-types-and-forms/farmhouse`. It uses all five supplied illustrations from `home-types/farmhouse/`; image mapping and source notes are in `FARMHOUSE-REVIEW.md`. It is private and unapproved.

Cape Cod House draft: `http://127.0.0.1:3002/design-library/house-types-and-forms/cape-cod-house`. It uses all five supplied illustrations from `home-types/cape-cod/`; image mapping and source notes are in `CAPE-COD-HOUSE-REVIEW.md`. It is private and unapproved.

Victorian's “At a glance” panel includes six approved 108 × 72-pixel generated engraving-style thumbnails. Provenance and exact prompts: `VICTORIAN-SNAPSHOT-IMAGES.md`.

The setting must be exactly `true` and NODE_ENV must be `development`. Production builds ignore it. Library release is separately disabled in `lib/design-library-policy.ts`. Layout, page lookup, metadata, static parameters, navigation, related content, and sitemap use these controls. Sitemap generation always uses public eligibility, even during preview. No draft images are placed in `public/`.

Run preview on loopback only. Do not tunnel it or bind it to a public interface. A hosted review requires a separately verified access-control and asset-protection strategy. Noindex is supplementary and is not access control.

Review the prose, “At a glance” summary, color/material recognition panel, and five finished generated architectural illustrations. These images depict illustrative designs, not documentary views of identified buildings or completed Studio Dee work. Exact prompts and source outputs are recorded in `CRAFTSMAN-IMAGES.md`. Identify documentary buildings accurately if added later.

WebP assets live in `assets/design-library/{topic}/{article-slug}/`, outside `public/`. Architectural Styles use `architectural-styles`; House Types & Forms use `home-types`. The `/api/design-library-images/[filename]` endpoint serves known assets during explicit development preview, with private/no-store and noindex headers. Preview images bypass the Next optimizer. The endpoint is prepared for later public serving only when both the library release and the owning article's publication authorization are recorded. With the current release hold, production still returns 404 for every library image. Next file tracing includes these server-only assets in the handler package; it does not make them static public files.

Before eventual publication, record explicit content and publication approvals separately; prepare approved assets for public serving; verify the real canonical domain and metadata; change the release gate only with explicit authorization. No automated deployment is part of this workflow.
