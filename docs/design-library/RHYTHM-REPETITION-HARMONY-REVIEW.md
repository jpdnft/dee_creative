# Rhythm, Repetition, and Visual Harmony — editorial review

Status: private draft, awaiting content and image approval. Canonical article copy is `content/design-library/rhythm-repetition-harmony.ts`. The supplied Markdown is an editorial input and is not part of the release source.

Preview: `http://127.0.0.1:3002/design-library/design-principles-and-philosophies/rhythm-repetition-harmony`

The article has 2,391 prose words and eight selected images. All eight supplied PNGs were used, converted to WebP, and served from the private `design-principles/rhythm-repetition-visual-harmony` asset folder. The image of the Mediterranean passage is the hero. The reading nook illustrates regular rhythm; teal bathroom, alternating rhythm; pendant stair, progression; organic living room, flowing rhythm; Craftsman rooms, continuity; botanical bedroom, pattern hierarchy; and dining gallery, a sequence with emphasis. Captions describe visible features without claiming a specific built project.

Correction on 2026-11-09: five image placements were missing from the rendered article because numbered subsection IDs did not match the image mapping. The hero, bedroom, and Craftsman images appeared; the reading nook, bathroom, stair, living room, and dining gallery did not. The mappings now use the actual subsection IDs, and a focused test checks that all eight image references are present.

The source's image briefs and editorial appendix are excluded from article body. The final Studio Dee passage remains as article copy; the site supplies its existing footer CTA. Source links are included in the article reference list. Getty's definitions, Cooper Hewitt's 1972 textile example, and the National Park Service's treatment of historic interior features were checked against their original sources.

Focused verification on 2026-11-08: typecheck passed; localhost article and hero image returned 200. Test suite: 13 passed, one existing asset test failed because `decorative-ceilings-plaster.webp` is absent from a separate coffered ceilings asset folder. No full build or deployment was run.
