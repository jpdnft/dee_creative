export const inquiryFields = ["name", "email", "phone", "location", "property", "space", "problem", "vision", "budget", "timing", "referral", "consent"] as const;
export type InquiryErrors = Partial<Record<(typeof inquiryFields)[number] | "photo", string>>;
export const budgets = ["Under $10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000+", "Not sure yet"];
export const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

export function validateInquiry(data: FormData): InquiryErrors {
  const errors: InquiryErrors = {};
  const value = (key: string) => typeof data.get(key) === "string" ? String(data.get(key)).trim() : "";
  if (!value("name")) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email"))) errors.email = "Please enter a valid email address.";
  if (!value("location")) errors.location = "Please tell us the project’s city or neighborhood.";
  if (!value("space")) errors.space = "Please tell us which space you’re considering.";
  if (!value("vision")) errors.vision = "Please tell us a little about what you have in mind.";
  if (value("budget") && !budgets.includes(value("budget"))) errors.budget = "Please choose an investment range.";
  if (value("consent") !== "yes") errors.consent = "Please confirm we may contact you about this project.";
  for (const field of inquiryFields) {
    const limit = ["vision", "problem"].includes(field) ? 3000 : 200;
    if (value(field).length > limit) errors[field] = `Please keep this answer under ${limit} characters.`;
  }
  const photo = data.get("photo");
  if (photo instanceof File && photo.size > 0) {
    if (!["image/jpeg", "image/png", "image/webp"].includes(photo.type)) errors.photo = "Please upload a JPG, PNG, or WebP photo.";
    if (photo.size > MAX_PHOTO_BYTES) errors.photo = "Please choose a photo smaller than 5 MB.";
  }
  return errors;
}

export function inquiriesEnabled() {
  return process.env.INQUIRIES_ENABLED === "true" && process.env.NEXT_PUBLIC_SITE_URL?.startsWith("https://") && process.env.NEXT_PUBLIC_SITE_URL !== "https://example.com";
}
