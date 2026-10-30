import { readFile } from "node:fs/promises";
import path from "node:path";
import { libraryArticles } from "@/content/design-library";
import { accessibleLibraryImage, libraryReleaseAuthorized, localLibraryPreview } from "@/lib/design-library-policy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const headers = { "Cache-Control": "private, no-store, max-age=0", "X-Robots-Tag": "noindex, nofollow", "X-Content-Type-Options": "nosniff" };

// Draft assets stay out of public/ and Next's static image pipeline.
// Production access requires both the library release and article publication authorization.
export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  const preview = localLibraryPreview(process.env.NODE_ENV, process.env.DESIGN_LIBRARY_PREVIEW);
  const asset = accessibleLibraryImage(libraryArticles, filename, libraryReleaseAuthorized, preview);
  if (!asset) return new Response(null, { status: 404, headers });
  try {
    const bytes = await readFile(path.join(process.cwd(), "assets", "design-library", asset.articleSlug, filename));
    return new Response(new Uint8Array(bytes), { headers: { ...headers, "Content-Type": "image/webp" } });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return new Response(null, { status: 404, headers });
    throw error;
  }
}
