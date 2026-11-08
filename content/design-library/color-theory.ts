import type { LibraryArticle } from "./types.ts";

// Canonical article copy. Adapted from the supplied editorial draft for private review.
export const colorTheory: LibraryArticle = {
  "slug": "color-theory",
  "category": "design-principles-and-philosophies",
  "assetFolder": "color-theory",
  "title": "Color Theory for Interior Design",
  "excerpt": "A practical way to understand hue, value, saturation, undertones, light, and color relationships in real rooms.",
  "description": "Explore interior color theory through palettes, contrast, color wheels, undertones, light, materials, and a practical sample-based selection process.",
  "status": "draft",
  "author": "Dee Creative Enterprises",
  "publisher": "Dee Creative Enterprises, LLC",
  "lastReviewed": "2026-11-08",
  "introduction": "Color in a home is shaped by light, neighboring surfaces, texture, and scale. A useful palette begins with these relationships and the real materials already in the room.",
  "snapshot": {
    "facts": [
      {
        "label": "What",
        "text": "Hue, value, saturation, temperature, undertone, and context."
      },
      {
        "label": "The idea",
        "text": "Color changes in appearance beside other colors and under different light."
      },
      {
        "label": "First question",
        "text": "Which fixed finishes and lighting conditions will this palette meet?"
      }
    ],
    "features": [
      {
        "label": "Hue",
        "text": "The color family."
      },
      {
        "label": "Value",
        "text": "How light or dark a surface appears."
      },
      {
        "label": "Saturation",
        "text": "How vivid or muted the color feels."
      },
      {
        "label": "Harmony",
        "text": "Relationships among colors and materials."
      },
      {
        "label": "Light",
        "text": "Daylight and lamps change perceived color."
      },
      {
        "label": "Sample",
        "text": "Test substantial physical samples in the room."
      }
    ],
    "distinction": "Color-wheel schemes and 60–30–10 proportions are design tools, not laws. Digital previews and tiny chips cannot replace samples in the actual room.",
    "sources": [
      "albers",
      "benjamin-samples"
    ]
  },
  "recognition": {
    "section": "hue-the-family",
    "colors": [
      {
        "name": "Peacock teal",
        "hex": "#205568",
        "use": "Deep living-room envelope."
      },
      {
        "name": "Rust",
        "hex": "#A75F48",
        "use": "Warm complementary upholstery."
      },
      {
        "name": "Olive",
        "hex": "#5F6946",
        "use": "Layered green library."
      },
      {
        "name": "Burgundy",
        "hex": "#673642",
        "use": "Color-drenched dining room."
      },
      {
        "name": "Cream",
        "hex": "#E6D9C3",
        "use": "Light neutral backdrop."
      }
    ],
    "materials": [
      {
        "name": "Paint and plaster",
        "detail": "Large surfaces establish value and undertone."
      },
      {
        "name": "Wood and stone",
        "detail": "Fixed materials arrive with their own color and texture."
      },
      {
        "name": "Fabric and rugs",
        "detail": "Pattern and surface add saturation and warmth."
      },
      {
        "name": "Light sources",
        "detail": "Daylight and lamps alter how every finish is perceived."
      }
    ],
    "note": "These swatches and images are conceptual. Confirm colors with physical samples in the room under planned lighting.",
    "sources": [
      "albers",
      "benjamin-samples"
    ]
  },
  "hero": {
    "id": "teal-living-room",
    "title": "Color as a complete composition",
    "caption": "Teal walls, rust upholstery, warm wood, and patterned textiles form a confident room palette.",
    "alt": "Living room with deep teal walls, rust sofa, wood, and patterned rug.",
    "brief": "Image supplied by Studio Dee; illustrative room or material palette, not a verified finished project or product sample.",
    "kind": "supplied",
    "src": "/api/design-library-images/color-theory-teal-living-room.webp",
    "width": 1402,
    "height": 1122,
    "credit": "Image provided by Studio Dee",
    "license": "Studio Dee authorized use"
  },
  "sections": [
    {
      "id": "what-color-theory-really-means-in-a-home",
      "heading": "What Color Theory Really Means in a Home",
      "paragraphs": [
        "Color theory is the study of how colors relate to one another and how we perceive them. Josef Albers demonstrated simultaneous contrast: the same color can look different against different backgrounds. In an interior, it is less about memorizing a color wheel than understanding why a particular blue feels serene against warm oak, why a white wall suddenly looks green beside cream cabinetry, or why a deep burgundy library can seem more inviting than a pale gray one.",
        "Unlike a graphic composition, a room is experienced from many positions and at many times of day. Color covers floors, walls, ceilings, upholstery, and objects; it is also reflected from one surface onto another. Its effect depends on architecture, daylight, electric lighting, texture, and the people who occupy the space."
      ],
      "sources": [
        "albers",
        "smithsonian"
      ],
      "figure": {
        "id": "same-color-contexts",
        "title": "The same color in two contexts",
        "caption": "Both center squares are exactly #998F89. Their different surroundings can change how that color appears.",
        "alt": "Two identical gray-brown squares, one on deep blue and one on pale gold, demonstrating simultaneous contrast.",
        "brief": "Code-drawn color comparison with identical center values; based on the supplied editorial brief.",
        "kind": "generated",
        "src": "/api/design-library-images/color-theory-same-color-contexts.webp",
        "width": 1200,
        "height": 620,
        "credit": "Diagram created for Studio Dee",
        "license": "Studio Dee authorized use"
      }
    },
    {
      "id": "hue-the-family",
      "heading": "Hue: the family",
      "paragraphs": [
        "Hue identifies the broad color: ocher, teal, violet, coral, or green. Designers commonly describe colors as belonging to warm or cool families, but a hue name alone tells us little about how it will behave. There are fiery yellow-greens and restrained blue-greens, brick reds and crimson reds, warm violets and icy violets."
      ],
      "sources": []
    },
    {
      "id": "value-the-light-dark-relationship",
      "heading": "Value: the light–dark relationship",
      "paragraphs": [
        "Value establishes much of a room's structure. Imagine a pale plaster wall, a medium-toned walnut cabinet, and nearly black window frames. Even if each surface had little discernible hue, their differences in value would create hierarchy and depth.",
        "LRV is helpful, but not the same as perceived value. Paint manufacturers publish light reflectance values to describe how much visible light a finish reflects. Higher numbers generally indicate more reflective colors, while lower numbers indicate darker, less reflective colors. But LRV does not tell you whether a color is warm or cool, whether it will look good with the floor, or exactly how bright the room will feel. Illumination, gloss, surrounding surfaces, and the size of the painted area still matter."
      ],
      "sources": []
    },
    {
      "id": "saturation-the-intensity",
      "heading": "Saturation: the intensity",
      "paragraphs": [
        "Saturation distinguishes a brilliant cobalt from a smoky blue-gray or a vivid emerald from a dusty sage. Reducing saturation often makes a strong hue easier to use over a large surface without abandoning color altogether."
      ],
      "sources": []
    },
    {
      "id": "how-the-color-wheel-helps-and-where-it-falls-short",
      "heading": "How the Color Wheel Helps—and Where It Falls Short",
      "paragraphs": [
        "A traditional artist's color wheel arranges hues in a circle to reveal relationships. It is excellent for exploring combinations and explaining why some pairings produce contrast while others feel related.",
        "But the familiar red-yellow-blue wheel is a simplified model rooted in artistic practice, not a complete description of human color vision or modern pigment mixing. Digital displays use additive RGB light; printing commonly uses subtractive CMYK inks. Architectural paint uses complex mixtures of colorants whose behavior cannot be predicted perfectly from a classroom wheel."
      ],
      "sources": [
        "smithsonian"
      ]
    },
    {
      "id": "five-ways-to-build-a-color-scheme",
      "heading": "Five Ways to Build a Color Scheme",
      "paragraphs": [
        "Monochromatic: Variations of one hue through lightness and saturation Example: Celadon walls, forest-green upholstery, olive cabinetry",
        "Analogous: Neighboring families on the wheel Example: Blue, blue-green, and green in a layered sitting room",
        "Complementary: Broadly opposite hues Example: Deep blue cabinetry with warm orange-brown leather and wood",
        "Split-complementary: One hue and colors adjacent to its opposite Example: A blue-green room with terracotta and muted golden accents",
        "Triadic: Three roughly spaced hues Example: Muted red, mustard, and blue in an eclectic interior"
      ],
      "sources": []
    },
    {
      "id": "monochromatic-does-not-mean-flat",
      "heading": "Monochromatic does not mean flat",
      "paragraphs": [
        "A monochromatic room becomes interesting through tonal range and surface variation: matte limewash, polished ceramic, velvet, woven linen, and painted wood can all explore a single family differently. A green room, for example, might move from gray-green plaster to bottle-green cabinetry to small touches of almost-black foliage."
      ],
      "sources": [],
      "figure": {
        "id": "green-library",
        "title": "Many values of green",
        "caption": "A green library illustrates how one color family can gain depth through value and material changes.",
        "alt": "Library with olive walls, green cabinetry, and green upholstered chair.",
        "brief": "Image supplied by Studio Dee; illustrative room or material palette, not a verified finished project or product sample.",
        "kind": "supplied",
        "src": "/api/design-library-images/color-theory-green-library.webp",
        "width": 1402,
        "height": 1122,
        "credit": "Image provided by Studio Dee",
        "license": "Studio Dee authorized use"
      }
    },
    {
      "id": "analogous-creates-continuity",
      "heading": "Analogous creates continuity",
      "paragraphs": [
        "Colors close to one another share visual characteristics and can produce a gentle transition across a room or connected spaces. Blue, blue-green, and green can be calm and atmospheric; rust, orange, and ocher can be enveloping and lively. Distinguish surfaces by value and texture so adjacent hues do not become a muddle."
      ],
      "sources": [],
      "figure": {
        "id": "teal-kitchen",
        "title": "Neighboring greens and blues",
        "caption": "Blue-green cabinetry and green-gray tile create an analogous palette in this kitchen.",
        "alt": "Kitchen with teal cabinets, green-gray backsplash, and warm wood table.",
        "brief": "Image supplied by Studio Dee; illustrative room or material palette, not a verified finished project or product sample.",
        "kind": "supplied",
        "src": "/api/design-library-images/color-theory-teal-kitchen.webp",
        "width": 1402,
        "height": 1122,
        "credit": "Image provided by Studio Dee",
        "license": "Studio Dee authorized use"
      }
    },
    {
      "id": "complementary-creates-energy",
      "heading": "Complementary creates energy",
      "paragraphs": [
        "Opposing hues tend to intensify one another. That does not require equal amounts of each color. A little copper upholstery or orange-red artwork can animate a largely blue room. The most compelling versions often use softened, complex hues rather than two equally vivid colors competing for attention.",
        "The popular 60–30–10 guideline—60% dominant, 30% secondary, 10% accent—can help someone begin distributing color. It is not a law. A dark color-drenched study, a mostly white gallery-like interior, or a richly patterned maximalist room may work beautifully without resembling those proportions."
      ],
      "sources": [],
      "figure": {
        "id": "navy-study",
        "title": "A restrained complementary contrast",
        "caption": "Deep blue shelves and cognac leather bring cool and warm families into balance.",
        "alt": "Study with navy built-ins, brown leather chair, and warm wood desk.",
        "brief": "Image supplied by Studio Dee; illustrative room or material palette, not a verified finished project or product sample.",
        "kind": "supplied",
        "src": "/api/design-library-images/color-theory-navy-study.webp",
        "width": 1402,
        "height": 1122,
        "credit": "Image provided by Studio Dee",
        "license": "Studio Dee authorized use"
      }
    },
    {
      "id": "warmth-coolness-and-the-problem-of-undertones",
      "heading": "Warmth, Coolness, and the Problem of Undertones",
      "paragraphs": [
        "Color temperature in design is perceptual. Reds, oranges, and yellows are generally called warm; blues and many greens are called cool. Yet individual colors are relative: one cream can look cool beside golden oak and warm beside a blue-white countertop. Even a single green can move from yellow-leaning olive to blue-leaning spruce.",
        "Undertones become particularly important with neutrals. An off-white may carry a pink, yellow, green, or gray bias that remains nearly invisible on its chip. Place it beside a large beige floor or a white quartz slab and the difference may suddenly announce itself.",
        "Compare physical samples together. Keep fixed finishes—flooring, brick, stone, tile, existing cabinetry—in the conversation from the beginning. When selecting multiple whites, compare them side by side and consider whether one should clearly contrast with the other rather than appear like an unsuccessful match."
      ],
      "sources": [
        "benjamin-handbook"
      ],
      "figure": {
        "id": "warm-bathroom",
        "title": "Undertones among fixed finishes",
        "caption": "Warm stone-looking tile, pale walls, and wood make undertone relationships visible in this bath.",
        "alt": "Bathroom with warm beige tile, pale walls, wood vanity, and tub.",
        "brief": "Image supplied by Studio Dee; illustrative room or material palette, not a verified finished project or product sample.",
        "kind": "supplied",
        "src": "/api/design-library-images/color-theory-warm-bathroom.webp",
        "width": 1402,
        "height": 1122,
        "credit": "Image provided by Studio Dee",
        "license": "Studio Dee authorized use"
      }
    },
    {
      "id": "light-changes-everything",
      "heading": "Light Changes Everything",
      "paragraphs": [
        "Paint does not generate color; it reflects the light it receives. Morning and evening daylight differ from midday light, shaded windows differ from direct sun, and electric lighting introduces its own spectral characteristics. The same wall may read fresh in the morning, muted on a rainy afternoon, and unexpectedly warm at night.",
        "Room orientation provides clues, not guarantees. North-facing rooms often receive cooler, more indirect daylight in the Northern Hemisphere; south-facing rooms may receive stronger direct sun. But neighboring buildings, trees, overhangs, window size, and regional weather can matter as much as the compass. In Portland, a palette should be judged on a gray afternoon as well as a sunny one.",
        "Electric lighting has two useful specifications:",
        "Correlated color temperature (CCT), measured in kelvins, describes whether the light appears warmer or cooler. Residential ambient lighting commonly falls around 2700–3000 K, but the right choice depends on use and design intent.",
        "Color rendering describes how faithfully a light source reveals the colors of objects. The familiar Color Rendering Index (CRI) is one metric; a CRI of 90 or higher generally indicates excellent fidelity, though CRI does not describe every aspect of a lamp's spectrum.",
        "Two lamps with the same kelvin rating may render fabrics, wood, and paint differently. That is why samples should be examined under the actual fixtures intended for the room, not just under showroom lights."
      ],
      "sources": [
        "doe-spectrum",
        "sherwin-direction"
      ]
    },
    {
      "id": "color-materials-and-architectural-character",
      "heading": "Color, Materials, and Architectural Character",
      "paragraphs": [
        "Some of the best interior palettes begin with materials rather than paint swatches. Walnut brings dark brown, amber, and sometimes purple notes; white oak can range from pale straw to warm honey; soapstone offers shifting charcoal and greenish tones; aged brass contributes an uneven golden warmth. Brick, terrazzo, richly veined stone, tile, and vintage rugs each arrive with their own palette.",
        "Treat these finishes as colors with texture, sheen, and scale—not as a separate category called “neutral materials.” An expansively veined marble backsplash may be the liveliest element in a kitchen. A reclaimed timber beam may establish the temperature of an entire room.",
        "Architecture also influences the appropriate distribution of color. Painting walls, trim, doors, and ceiling in a single hue—a technique often called color drenching—can make a room feel cohesive and enveloping, particularly where visual continuity matters. Contrasting trim, on the other hand, can clarify the proportions and details of a historic room. A fireplace surround, arched opening, coffered ceiling, or run of built-in bookcases may deserve its own color treatment to reinforce its role as an architectural focal point."
      ],
      "sources": [],
      "figure": {
        "id": "burgundy-dining",
        "title": "Color across the architecture",
        "caption": "Burgundy walls and trim form an enveloping architectural backdrop for this dining room.",
        "alt": "Dining room with burgundy walls, paneled trim, and warm lighting.",
        "brief": "Image supplied by Studio Dee; illustrative room or material palette, not a verified finished project or product sample.",
        "kind": "supplied",
        "src": "/api/design-library-images/color-theory-burgundy-dining.webp",
        "width": 1402,
        "height": 1122,
        "credit": "Image provided by Studio Dee",
        "license": "Studio Dee authorized use"
      }
    },
    {
      "id": "a-practical-process-for-choosing-a-palette",
      "heading": "A Practical Process for Choosing a Palette",
      "paragraphs": [
        "Identify what cannot easily change. Collect physical samples or accurate references for floors, countertops, tile, brick, woodwork, and other major finishes. Note their dominant colors and subtler biases.",
        "Define the room's desired character. Is it intended to feel restorative, intimate, theatrical, energetic, or quietly functional? A mood is more useful than an arbitrary list of favorite colors.",
        "Choose an anchor. This might be a patterned rug, significant artwork, a stone slab, an inherited chair, or a cabinet finish. Extract a small family of related colors rather than matching everything literally.",
        "Establish a value structure. Decide where the darkest and lightest surfaces belong. Consider sightlines, large built-ins, windows, ceiling height, and the places where emphasis would help the architecture.",
        "Set a saturation hierarchy. Determine whether the room needs one saturated focal point, broadly muted tones, or an intentionally immersive treatment. This often matters more than the exact number of hues.",
        "Test substantial samples. Paint movable sample boards with sufficient coats for proper coverage, and view them against the actual finishes. Put them on different walls and observe them through daylight and evening lighting. A tiny chip alone is rarely adequate.",
        "Review transitions. Look into adjoining rooms, hallways, and through doorways. Connected spaces need not match, but changes should feel considered. Repeated wood tones, trim treatments, or an accent family can help tie them together.",
        "Make the final judgment in context. Compare finishes together at their likely proportions. Check samples with the planned bulbs, furniture, and textiles before committing to extensive painting or custom fabrication."
      ],
      "sources": [
        "benjamin-samples"
      ],
      "figure": {
        "id": "material-palette",
        "title": "The palette as real materials",
        "caption": "A board of wood, stone, fabric, tile, and color samples illustrates why paint should be chosen with the room’s fixed finishes.",
        "alt": "Mood board with wood, stone, fabric, paint samples, and metal finish.",
        "brief": "Image supplied by Studio Dee; illustrative room or material palette, not a verified finished project or product sample.",
        "kind": "supplied",
        "src": "/api/design-library-images/color-theory-material-palette.webp",
        "width": 1402,
        "height": 1122,
        "credit": "Image provided by Studio Dee",
        "license": "Studio Dee authorized use"
      }
    },
    {
      "id": "common-color-mistakes",
      "heading": "Common Color Mistakes",
      "paragraphs": [
        "Choosing a paint color first. Paint usually offers far more flexibility than installed tile, countertops, or flooring. Work from the least flexible and most influential finishes outward.",
        "Judging color only under one light. A beautiful morning sample can be disappointing at night. Review it under the lighting conditions in which the room will actually be used.",
        "Confusing brightness with harmony. A higher-LRV paint can reflect more light without making an awkward palette coherent. Conversely, dark paint can produce a successful and comfortable room when lighting and material choices are planned appropriately.",
        "Using every color at equal intensity. Even adventurous combinations usually benefit from hierarchy. Decide which surfaces should lead and which should support.",
        "Treating neutrals as colorless. Whites, grays, browns, and blacks have undertones and interact with other materials as strongly as more obviously colorful paints.",
        "Relying on digital previews as proof. Screens, cameras, and rendering software interpret color differently. They are excellent for comparing concepts, not reliable substitutes for real samples.",
        "Following psychological claims too literally. A green room is not automatically calming, and red is not automatically stimulating. Associations vary by culture, context, shade, personal experience, and the broader design. Consider the actual room rather than assigning each color a fixed emotional meaning."
      ],
      "sources": [
        "benjamin-samples"
      ]
    },
    {
      "id": "should-every-room-in-a-house-use-the-same-color-palette",
      "heading": "Should every room in a house use the same color palette?",
      "paragraphs": [
        "No. An entire house can feel coherent through shared materials, repeated trim or hardware finishes, or related value and saturation levels. Individual rooms can still have distinct identities. Consider what is visible through each opening and how the sequence of spaces unfolds."
      ],
      "sources": []
    },
    {
      "id": "do-dark-walls-always-make-a-small-room-feel-smaller",
      "heading": "Do dark walls always make a small room feel smaller?",
      "paragraphs": [
        "Not necessarily. Dark surfaces may reduce reflected light, but they can also soften boundaries and make a room feel intimate or visually continuous. Lighting, contrast, ceiling treatment, and furnishings largely determine the result."
      ],
      "sources": []
    },
    {
      "id": "is-it-acceptable-to-mix-warm-and-cool-colors",
      "heading": "Is it acceptable to mix warm and cool colors?",
      "paragraphs": [
        "Absolutely. Some of the most satisfying palettes rely on that tension. The key is to test the actual hues together and make the contrast feel deliberate rather than accidental."
      ],
      "sources": []
    },
    {
      "id": "are-painted-ceilings-supposed-to-be-white",
      "heading": "Are painted ceilings supposed to be white?",
      "paragraphs": [
        "No. A ceiling can extend the wall color, introduce a contrasting hue, or provide the deepest value in the room. Consider how the color interacts with ceiling height, lighting, cornices, beams, and adjoining spaces."
      ],
      "sources": []
    },
    {
      "id": "creating-a-room-with-color-and-character",
      "heading": "Creating a Room with Color—and Character",
      "paragraphs": [
        "Color is one of the most transformative tools in residential design, but its real strength emerges when it works with the architecture: a library whose cabinetry and walls form a richly colored envelope, a kitchen whose stone and wood establish a nuanced palette, or a living room where a bold painted focal point changes the way the entire space is understood.",
        "At Studio Dee, we approach color as part of the larger design of a room—alongside materials, custom architectural details, lighting, and craftsmanship. The goal is not simply to choose beautiful colors, but to create a space in which every choice belongs."
      ],
      "sources": []
    }
  ],
  "references": [
    {
      "id": "albers",
      "title": "Interaction of Color, 50th Anniversary Edition",
      "publisher": "Yale University Press",
      "url": "https://yalebooks.yale.edu/book/9780300179354/interaction-of-color/",
      "note": "Josef Albers on color relativity and perception."
    },
    {
      "id": "smithsonian",
      "title": "Using Color: Color in a New Light",
      "publisher": "Smithsonian Libraries and Archives",
      "url": "https://library.si.edu/exhibition/color-in-a-new-light/using",
      "note": "Color relationships and artistic practice."
    },
    {
      "id": "doe-spectrum",
      "title": "Color and Spectrum",
      "publisher": "U.S. Department of Energy",
      "url": "https://www.energy.gov/cmei/ssl/color-and-spectrum",
      "note": "Light-source color and spectral behavior."
    },
    {
      "id": "sherwin-direction",
      "title": "How to Choose Paint Colors Based on Room Direction",
      "publisher": "Sherwin-Williams",
      "url": "https://www.sherwin-williams.com/en-us/project-center/paint/color-by-room-orientation",
      "note": "Orientation and daylight context."
    },
    {
      "id": "benjamin-handbook",
      "title": "The Color Handbook",
      "publisher": "Benjamin Moore",
      "url": "https://www.benjaminmoore.com/en-us/color-overview/color-insights/color-handbook",
      "note": "Paint color, light, and undertones."
    },
    {
      "id": "benjamin-samples",
      "title": "How to Use Paint Color Samples",
      "publisher": "Benjamin Moore",
      "url": "https://www.benjaminmoore.com/en-us/interior-exterior-paints-stains/how-to-advice/painting-101/choosing-paint-samples",
      "note": "Physical sample testing."
    }
  ],
  "related": [
    "interior-wood-species",
    "natural-stone",
    "plaster-roman-clay-decorative-finishes",
    "maximalist"
  ],
  "furtherReading": []
};
