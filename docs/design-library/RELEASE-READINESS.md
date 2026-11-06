# Design Library release preparation — publication on hold

## Explicit authorization recorded 2026-10-25

The user approved the Craftsman article, images, and layout as the reference template and authorized publication preparation. They explicitly deferred any push until a larger selection of articles is finished. No number of finished articles or release date has been chosen. This instruction authorizes neither a push nor deployment, public hosting, nor publication of an article.

## Prepared now

- Craftsman has `status: approved`, its actual content approval date, and individual image approval dates. Body copy, palettes, diagrams, and approved image files are preserved.
- A release manifest records the approved article and image hashes in `CRAFTSMAN-RELEASE-MANIFEST.json`.
- Publication readiness is separate from public eligibility. A ready article still needs `status: published`, an explicit publication authorization date, an actual publication date, and the library release gate. None of those publication switches is set for Craftsman.
- The existing image endpoint supports either explicit local preview or authorized published content. It checks the owning article, so releasing one article cannot expose another article's images before its publication authorization. Assets remain in server-only `assets/design-library/`, outside public/static assets.
- Next file tracing explicitly includes the WebP assets for the Node image handler, so a production package can include the server-side files without moving drafts into `public/`.
- Listings, metadata lookup, static parameters, related links, navigation, and sitemap retain publication gating. Canonical paths and article metadata are generated through the existing site helpers.
- Tests cover approval without publication, asset approval, mixed approved/draft records, and image access before/after simulated release authorization. No real article has been made public for those tests.

## Current hold

`libraryReleaseAuthorized` remains `false`. Craftsman and Victorian are editorially approved, with individual image approval dates; neither has `publicationAuthorizedAt` or `publishedAt`. Modern, Mid-Century Modern, Contemporary, Art Deco, Tudor Revival, Colonial Revival, Prairie School, Mediterranean Revival, Bungalow, American Foursquare, Ranch House, Townhouse and Rowhouse, Shotgun and Dogtrot House, Split-Level House, Farmhouse, Cape Cod House, Cottage, Traditional Interior Design, Transitional Interior Design, Scandinavian Interior Design, Minimalist Interior Design, Maximalist Interior Design, Eclectic Interior Design, Industrial Interior Design, Wainscoting and Wall Paneling, Crown Molding, Baseboards, and Interior Trim, Coffered, Beamed, and Decorative Ceilings, and Built-In Bookcases and Architectural Cabinetry remain drafts awaiting editorial approval. Studio Dee has authorized use of the supplied images; no image-rights hold remains. Production library pages and image endpoints must continue to return 404, including when the development preview environment setting is accidentally present.

## Later, only after explicit release authorization

1. Agree on the launch selection. Verify that every selected article has final content and image approval.
2. Verify the deployment's actual `NEXT_PUBLIC_SITE_URL` is `https://studiodeepdx.com`, as specified in the master plan. Local builds test this value; live provider configuration has not been inspected or changed.
3. Check the approved manifest against the actual files; reapprove any editorial or image changes. Record the actual publication authorization and publication dates rather than pre-filling them now.
4. Enable only the authorized article records and the library release gate, rebuild, and verify canonical/Open Graph metadata, structured data, sitemap, image delivery, production access, and exclusion of drafts.
5. Perform the authorized push/deployment and post-deploy checks. A provider dry run and live CDN/adapter behavior remain release-time verification, not a claim made by local tests.

No CMS, MDX package, new dependency, commit, merge, push, or deployment is part of this preparation.
