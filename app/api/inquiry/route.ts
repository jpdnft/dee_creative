import { inquiryFields, inquiriesEnabled, validateInquiry } from "@/lib/inquiry";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin && origin !== site.url) return Response.json({ message: "Please submit the form from our website." }, { status: 403 });
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 6 * 1024 * 1024) return Response.json({ message: "Please choose a smaller photo." }, { status: 413 });
  try {
    const data = await request.formData();
    if (data.get("bot-field")) return Response.json({ ok: true });
    const errors = validateInquiry(data);
    const photo = data.get("photo");
    if (photo instanceof File && photo.size > 0 && !errors.photo) {
      const bytes = new Uint8Array(await photo.slice(0, 12).arrayBuffer());
      const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
      const isPng = [137, 80, 78, 71, 13, 10, 26, 10].every((b, i) => bytes[i] === b);
      const isWebp = String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
      if (!((photo.type === "image/jpeg" && isJpeg) || (photo.type === "image/png" && isPng) || (photo.type === "image/webp" && isWebp))) errors.photo = "This file doesn’t appear to be a supported photo.";
    }
    if (Object.keys(errors).length) return Response.json({ errors, message: "Please review the marked fields." }, { status: 400 });
    if (!inquiriesEnabled()) return Response.json({ message: "Online inquiries aren’t live yet. Please call Jim at (503) 891-7153 to discuss your project." }, { status: 503 });
    const submission = new FormData();
    submission.set("form-name", "project-inquiry");
    submission.set("bot-field", "");
    for (const field of inquiryFields) submission.set(field, String(data.get(field) || "").trim().replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, ""));
    if (photo instanceof File && photo.size > 0) submission.set("photo", photo, `project-photo.${photo.type === "image/jpeg" ? "jpg" : photo.type === "image/png" ? "png" : "webp"}`);
    const response = await fetch(new URL("/__forms.html", site.url), { method: "POST", body: submission, signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error("Form provider rejected the submission");
    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "We couldn’t send your inquiry. Please try again, or call Jim at (503) 891-7153." }, { status: 502 });
  }
}
