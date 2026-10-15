# Adding real project stories

Projects is temporarily disabled through `site.projectsEnabled` in `lib/site.ts`. Its navigation and sitemap entries are hidden and both index and detail routes return 404. Set the flag to `true` when the portfolio is ready to return; the existing content and presentation files are preserved.

The portfolio has a Projects index and a case-study route at `/projects/[slug]`. Its collection is intentionally empty until genuine project material is supplied. Concept studies remain in their own collection.

For each project, gather:

- An owner-approved title, a short problem/solution description, and general location if appropriate.
- The project type and the services involved.
- Real finished photos, dimensions, descriptive alt text, and captions. Identify any before photos or detail photographs clearly.
- The starting problem, the idea, key design decisions, construction work/challenges, interesting details, and the result.
- Permission to share the work and any identifying information.

Add a record in `content/projects.ts`, initially with `published: false`. Save public-ready photographs in `public/images/projects/`; keep private background notes and unapproved materials in `private/`. The hero must be a real completed-work photograph. Gallery images may be completed-work or detail photos, never conceptual imagery.

Review the facts, photographs, and rendering, then set `published: true`. The record will appear in the index, generate its case-study route, and enter the production sitemap once a real domain is configured. No dummy case study is published.
