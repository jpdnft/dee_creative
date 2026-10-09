# Dee Creative Enterprises

An evolving website for a Portland architectural interiors and residential design-build studio. Implemented pages: Home, Services, all six core service detail pages, Concepts, Process, About, Start a Project, Journal with three articles, Projects index and case-study structure, and Privacy. Next.js App Router, TypeScript, predominantly server-rendered components, local fonts, and original labeled concept imagery.

## Development

Use Node.js 22 or newer:

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck` and `npm run build` before deployment. Netlify uses the standard Next.js build with its automatically managed adapter; no static export is configured.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` when the production domain is known. Until then, previews use noindex and robots disallow indexing, and the sitemap is empty.

## Content and components

- `content/home.ts`: service copy, process steps, and typed image data.
- `lib/site.ts`: company facts, production URL, and navigation.
- `app/globals.css`: centralized design tokens and responsive compositions.
- `components/media/study-image.tsx`: automatic concept disclosure.
- `docs/design-system.md`: visual language and the scope of this milestone.
- `docs/image-prompts.md`: concept image provenance and generation prompts.

`private/`, local environment files, dependencies, build output, local tooling, and QA artifacts are ignored by Git. Never force-add private material.

The inquiry form includes client/server validation, one optional photo, and Netlify Forms integration. Delivery remains disabled until the hosting configuration and a real test submission are verified; see `docs/inquiry-setup.md`. `npm test` runs the inquiry validation tests. Phone inquiries remain available.

Journal articles use the typed local collection in `content/journal.ts`; each record generates an article route, metadata, related links, and sitemap entry. This can later migrate to MDX or a CMS without changing the surrounding layout.

The portfolio structure is implemented, but its collection is empty pending real photos and project stories. See `docs/project-content.md` for the required material. No analytics trackers have been added. All current images are concepts, not completed work. The supplied business facts and CCB number are reproduced from the project brief.
