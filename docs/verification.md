# Homepage milestone verification

- `npm run build`: passed; homepage and metadata endpoints prerender successfully.
- `npm run typecheck`: passed.
- Browser QA at 1440, 820, 390, and 320 CSS pixels: no horizontal overflow, broken images, JavaScript page errors, or broken homepage anchors.
- Automated axe checks for WCAG 2 A/AA and WCAG 2.1 AA: zero reported violations at the four checked viewport sizes. This is an automated check, not a comprehensive accessibility certification.
- Mobile menu: opens, closes after selection, and closes on Escape with focus returned to its button.
- Service disclosures: operate from the keyboard with Enter.
- Robots, sitemap, and generated Open Graph image endpoints: HTTP success.
- Git exclusion: the original brief in `private/` and the portable tooling in `.tools/` are ignored.

Real project assets, contact details, inquiry delivery, additional pages, and a production domain remain outside this homepage milestone. Netlify configuration is prepared; no deployment has been performed.

## Services overview

- Production build and its TypeScript checks passed with `/services` prerendered.
- Browser checks at 1440, 820, 390, and 320 CSS pixels found no horizontal overflow, JavaScript page errors, broken section anchors, or automated WCAG A/AA violations.
- Verified Services active navigation, navigation back to the homepage process section, and the homepage Services link on desktop and mobile.
- Verified the unique Services title and canonical URL. Production domain configuration is still required before indexing.
- Existing concept images load successfully and retain their Concept Study labels.
- Phone inquiries are now available through the user-supplied number; no inquiry form or public deployment has been added.

## Process, About, and Private Libraries

- Production build and TypeScript checks passed with all three new pages prerendered.
- Each page checked at 1440, 820, 390, and 320 CSS pixels: no horizontal overflow, JavaScript page errors, broken section anchors, or automated WCAG A/AA violations.
- Verified image loading, unique metadata and canonical paths, and one H1 per page.
- Verified mobile menu Escape behavior and library FAQ keyboard interaction.
- All internal route destinations linked from these pages returned successful HTTP responses.
- Homepage and Services links connect to the new pages. Navigation identifies Services on its library detail route.

## Listening Rooms, Architectural Focal Points, and Whole-Room Transformations

- Production build and TypeScript checks passed; all three routes prerender successfully.
- Each new page checked at 1440, 820, 390, and 320 CSS pixels, with no horizontal overflow, JavaScript page errors, broken section anchors, or automated WCAG A/AA violations.
- Verified image loading, canonical paths, page metadata, mobile menu Escape behavior, and one H1 per page.
- Internal route destinations returned successful HTTP responses. Services overview links and related-service links expose the new pages.
- Existing concept images are reused with their labels; no new factual project claims or project photography were introduced.

## Architectural Interiors, Design + Build, and Concepts

- Production build and TypeScript checks passed with all three routes prerendered.
- Each page checked at 1440, 820, 390, and 320 CSS pixels, with no horizontal overflow, JavaScript page errors, broken section anchors, or automated WCAG A/AA violations.
- Verified successful image decoding, page-specific metadata and canonical paths, one H1 per page, mobile menu Escape behavior, and successful HTTP responses for internal linked routes.
- Concepts has its own navigation entry and typed concept-only collection. Every study retains its Concept Study label.

## Inquiry, Journal, first article, and Privacy

- Production build and TypeScript checks passed with prerendered pages and a server inquiry endpoint.
- Four new pages checked at 1440, 820, 390, and 320 CSS pixels, with no horizontal overflow, JavaScript page errors, broken section anchors, or automated WCAG A/AA violations.
- Five inquiry validation tests passed: required details and consent, optional budget/phone, email and budget validation, text limits, and file restrictions.
- Browser tests verified focus on the first invalid field, preserved input after delivery failure, and the success screen with a mocked response. Error-state automated accessibility checks passed.
- Server endpoint checks verified invalid input (400), unconfigured delivery (503), cross-origin rejection (403), invalid photo signatures (400), and honeypot handling. No live inquiry or notification was sent.
- Static Netlify form registration is present. Actual provider delivery and notifications still require live configuration and verification documented in `docs/inquiry-setup.md`.

## Projects structure and expanded Journal

- Build and TypeScript checks passed. Three Journal articles are prerendered; the Projects index and case-study route are implemented with no invented portfolio records.
- Six automated tests passed, including a publishing rule test that excludes drafts, incomplete stories, concept heroes, and concept gallery images.
- Projects index, Journal index, and two new articles checked at four viewport sizes with zero automated WCAG A/AA violations, horizontal overflow, JavaScript page errors, or broken section anchors.
- Tablet navigation uses the menu at widths up to 1000px. Menu Escape behavior and linked route responses passed.
- Unknown project slugs return 404; real case-study rendering awaits genuine project material.
