# Dee Creative — visual foundation

An architectural book translated into a website: warm paper, generous margins, expressive serif type, and photographs that do the storytelling.

## Tokens

`app/globals.css` owns the palette, type scales, spacing, content width, and motion timing. Instrument Serif is paired with DM Sans; both are bundled locally through Fontsource, not fetched from a font service at runtime. Their license files ship with their packages.

The palette follows the brief: paper `#F3F0E9`, ivory `#FAF8F3`, charcoal `#252522`, graphite `#34322E`, walnut `#665446`, olive `#74745F`, stone `#B6AEA1`, and rules `#D8D2C7`.

## Compositional grammar

- Wide images, narrow writing, and asymmetric grids establish the rhythm.
- Small numbered labels introduce chapters; large serif headings carry the argument.
- Square image edges, simple rules, and underlined links replace decorative cards.
- Mobile layouts preserve the sequence and hierarchy, with deliberate image crops.
- Native details elements make services usable with touch, keyboard, or no JavaScript.
- Motion is limited to transitions and anchor scrolling, with reduced-motion support.

## Image integrity

`StudyImage` automatically labels assets with `type: "concept"` as Concept Study. All first-pass images are imagined interiors; none represent completed work. Keep generated imagery out of completed-project collections. Supplied project photography must use `type: "completed"` and truthful captions.

## First milestone boundaries

Home, Services, all six core service detail pages, Concepts, Process, About, Start a Project, Journal with its first article, and Privacy are implemented. Navigation uses the published local routes. The inquiry form’s live delivery awaits verified Netlify configuration; Jim’s supplied click-to-call phone number remains available. Completed work, portrait, and testimonials await authentic content.

## Next steps

Approve or refine the homepage direction before extending services, concepts, projects, process, about, Journal, and project inquiry routes. Introduce project case studies only with genuine photos and project facts. Add contact and privacy information with the inquiry implementation. Set the production domain before indexing.
