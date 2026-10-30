# Craftsman image provenance and prompts

Created 2026-10-25 with the built-in `image_gen` tool. Five photorealistic architectural illustrations; none depicts a verified building or completed Studio Dee project. The user explicitly approved the final Craftsman images, article, and layout as the reference template on 2026-10-25. Publication remains on hold.

Selected project assets are WebP files in `assets/design-library/craftsman/` (1536 × 1024). Source outputs remain at the recorded original tool paths. WebP conversion used the existing transitive Sharp installation, quality 85; no semantic image edits or cropping and no new dependency.

Assets are outside `public/` and currently served only in development preview through `/api/design-library-images/[filename]`, with private/no-store and noindex headers. Preview rendering bypasses the Next image optimizer to avoid a public optimizer cache. Following explicit reference approval, the handler is prepared to serve an article's approved assets publicly only after both article publication authorization and the library release gate are enabled. Those publication controls remain disabled. See `RELEASE-READINESS.md`.

Review notes: inspected all five tool outputs. Each illustrates its assigned subject: a sheltering roof/porch, a usable porch threshold, visible roof-edge members, a framed connection between rooms, and a wood/brick junction. The images are explanatory concepts, not measured construction details or evidence of historic finishes. They must retain generated-illustration captions. Generated interiors/exteriors are independent studies and are not asserted to be views of a single real house.

## exterior

- Project file: `assets/design-library/craftsman/craftsman-exterior.webp`
- Original tool output: `C:\Users\proje\.codex\generated_images\01a175b4-cb12-7e42-98f7-33899c7ab691\exec-2279fb85-d734-45e2-ac5e-a3055f8940f5.png`
- Tool: built-in image generation, no input reference image.

### Exact prompt

Use case: photorealistic-natural. Asset: landscape 3:2 hero for a scholarly residential architecture article. Create a beautiful photorealistic architectural illustration of a plausible modest American Craftsman bungalow circa 1915, a fictional house, never a named building or client project. Pedestrian eye-level three-quarter view; whole house and porch visible. Low-pitched front gabled roof, broad overhanging eaves, realistic exposed rafter tails, simple knee brackets beneath gable, horizontal muted olive-gray wood siding, natural reddish-brown shingle gable, deep recessed front porch on squat brick piers with tapered wood posts. Appropriate double-hung windows, restrained wood entrance door. Mature garden, simple planting, soft overcast daylight, believable material wear and tactile wood grain, quiet architectural magazine photography. Sheltering roof and transition from garden to porch are the subject. Avoid oversized timber, alpine chalet styling, elaborate Victorian trim, multiple improbable intersecting roofs, fake joinery, people, cars, text, logos, watermark. Image only, no labels or infographic.

## eave

- Project file: `assets/design-library/craftsman/craftsman-eave.webp`
- Original tool output: `C:\Users\proje\.codex\generated_images\01a175b4-cb12-7e42-98f7-33899c7ab691\exec-11e895a5-7cb6-4bc5-974a-2710b334b4ab.png`
- Tool: built-in image generation, no input reference image.

### Exact prompt

Use case: photorealistic-natural. Asset: landscape 3:2 editorial architectural detail illustration for a Craftsman architecture guide. Create a photorealistic close oblique view looking upward along the side eave of a fictional circa-1915 American Craftsman bungalow. Clearly show regularly spaced exposed wood rafter tails projecting beyond muted olive-gray horizontal siding, the underside of actual roof boards, dark shingle roof edge, and one simple wood knee bracket at a gable corner. Warm muted ivory paint with subtle age, natural wood texture. A small part of the shingled gable is visible. Believable traditional wood construction, no impossible joints, no oversized decorative timber. Soft daylight, restrained architecture magazine photography, crisp readable detail, leaves softly out of focus at edge. This is an illustrative concept, not a named historic property. No people, words, logos, watermark, arrows, or labels.

## porch

- Project file: `assets/design-library/craftsman/craftsman-porch.webp`
- Original tool output: `C:\Users\proje\.codex\generated_images\01a175b4-cb12-7e42-98f7-33899c7ab691\exec-436ff822-07a4-40ad-946b-2f82cdb1e10b.png`
- Tool: built-in image generation, no input reference image.

### Exact prompt

Use case: photorealistic-natural. Asset: landscape 3:2 editorial illustration for a Craftsman architecture article. Photorealistic architectural view from within the deep sheltered porch of a fictional modest American Craftsman bungalow, looking diagonally toward the front door and the garden beyond one porch opening. Foreground substantial tapered ivory-painted wood porch post resting naturally on a red-brown brick pier; muted olive-gray horizontal siding, honest warm wood front door with small divided glass panes, wood porch floor, simple wood slatted chair beside the entrance with generous unobstructed walking space, small quiet planter, soft daylight reflecting beneath ceiling. A porch as a usable outdoor room, no staged luxury or clutter. Eye-level 35mm architectural photography, believable connections, verticals straight, subtle natural texture, no large modern glass walls, no people, text, logos, watermark. An illustrative house, never a named historic building or claimed client project.

## rooms

- Project file: `assets/design-library/craftsman/craftsman-rooms.webp`
- Original tool output: `C:\Users\proje\.codex\generated_images\01a175b4-cb12-7e42-98f7-33899c7ab691\exec-147c6ba1-94ef-4610-a800-c0caaea9acb6.png`
- Tool: built-in image generation, no input reference image.

### Exact prompt

Use case: photorealistic-natural. Asset: landscape 3:2 editorial interior illustration for a Craftsman architecture article. Photorealistic eye-level architectural view in a fictional modest early-20th-century American Craftsman interior, looking from a quiet living room through a broad rectangular oak-trimmed cased opening toward a small dining room. Low built-in oak bookcases flank the opening, with substantial square oak posts continuing from their ends to a plain wood header. Clear doorway passage about 5 feet wide, no furniture blocking it. A single restrained table and wood chairs in the dining room, visible simple divided-light double-hung window gives soft side daylight. Warm natural wood, matte plaster walls, quiet olive accents, legible proportions, realistic wood joinery, tactile grain, modest lived-in warmth, minimal books and pottery. Natural architectural magazine photography, no people, text, labels, logos, watermark. Not the Gamble House, not a documented historic interior or a client project. Avoid grand mansion scale, luxury staging, excessive beams, decorative Victorian carving, modern open-plan kitchen.

## materials

- Project file: `assets/design-library/craftsman/craftsman-materials.webp`
- Original tool output: `C:\Users\proje\.codex\generated_images\01a175b4-cb12-7e42-98f7-33899c7ab691\exec-16d1a31c-8323-4ffe-80a5-d35486fc6d9a.png`
- Tool: built-in image generation, no input reference image.

### Exact prompt

Use case: photorealistic-natural. Asset: landscape 3:2 intimate material-detail illustration for an editorial Craftsman architecture guide. Photorealistic close architectural composition of a fictional Craftsman-inspired fireplace: a simple broad quarter-sawn oak mantel with subtle ray-fleck grain, a portion of a red-brown brick fire surround and dark unlit firebox, matte warm plaster wall, a small handmade-looking muted green ceramic vase placed naturally on the mantel. Show the actual junction of timber and brick and softly reflected side daylight. Quiet earthy material palette, warm but neutral white balance, crisp detail, understated architectural magazine photography. Historically plausible proportions, no ornate carvings, no elaborate stacked stone, no modern gas flame, no people, text, labels, logos, watermark. An illustrative design study, no claim that it depicts an original historic interior, named building, or completed client work.

