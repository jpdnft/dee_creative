import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { isPublishedArticle, libraryArticleImages, libraryAssetFolder, libraryAssetTopic, libraryReleaseAuthorized } from "../lib/design-library-policy.ts";

const root = path.resolve(import.meta.dirname, "..");
const destination = path.join(root, "public", "api", "design-library-images");
const content = path.join(root, "content", "design-library");
const articles = [];

for (const filename of await readdir(content)) {
  if (!filename.endsWith(".ts") || ["types.ts", "index.ts", "categories.ts"].includes(filename)) continue;
  const module = await import(pathToFileURL(path.join(content, filename)).href);
  for (const value of Object.values(module)) {
    if (value && typeof value === "object" && "slug" in value && "sections" in value) articles.push(value);
  }
}

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
if (!libraryReleaseAuthorized) {
  console.log("Design Library release is closed; no public images prepared.");
  process.exit(0);
}

const filenames = new Set();
let bytes = 0;
for (const article of articles.filter(isPublishedArticle)) {
  for (const image of libraryArticleImages(article)) {
    const match = /^\/api\/design-library-images\/([a-z0-9-]+\.webp)$/.exec(image.src ?? "");
    if (!match) throw new Error(`Invalid image URL in ${article.slug}: ${image.src}`);
    const filename = match[1];
    if (filenames.has(filename)) continue;
    const source = path.join(root, "assets", "design-library", libraryAssetTopic(article.category), libraryAssetFolder(article), filename);
    bytes += (await stat(source)).size;
    await cp(source, path.join(destination, filename));
    filenames.add(filename);
  }
}
console.log(`Prepared ${filenames.size} published Design Library images (${(bytes / 1048576).toFixed(1)} MiB).`);
