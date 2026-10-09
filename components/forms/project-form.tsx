"use client";

import { useRef, useState } from "react";
import { budgets, validateInquiry, type InquiryErrors } from "@/lib/inquiry";
import styles from "./project-form.module.css";

export function ProjectForm({ enabled }: { enabled: boolean }) {
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const notice = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  function focusNotice() { requestAnimationFrame(() => notice.current?.focus()); }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    const validation = validateInquiry(data);
    setErrors(validation);
    if (Object.keys(validation).length) {
      setStatus("error"); setMessage("Please review the marked fields.");
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    setStatus("sending"); setMessage("");
    try {
      const response = await fetch("/api/inquiry", { method: "POST", body: data, signal: AbortSignal.timeout(25000) });
      const result = await response.json();
      if (!response.ok || !result.ok) { setErrors(result.errors || {}); throw new Error(result.message || "We couldn’t send your inquiry. Please try again or call Jim."); }
      setStatus("success"); setMessage("Thank you. Your project inquiry has been received. Jim will be in touch to continue the conversation.");
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error && error.name !== "TimeoutError" ? error.message : "We couldn’t send your inquiry. Please try again or call Jim at (503) 891-7153.");
    }
    focusNotice();
  }
  const fieldProps = (name: keyof InquiryErrors) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `${name}-error` : undefined });
  const errorFor = (name: keyof InquiryErrors) => errors[name] ? <span id={`${name}-error`} className={styles.error}>{errors[name]}</span> : null;
  return <div className={styles.wrapper}>
    {!enabled && <p className={styles.previewNotice}>Online inquiries will open when the site launches. For now, call Jim at <a href="tel:+15038917153">(503) 891-7153</a>.</p>}
    <div ref={notice} tabIndex={-1} role={status === "error" ? "alert" : "status"} className={message ? styles.notice : styles.emptyNotice}>{message}</div>
    {status !== "success" && <form ref={formRef} onSubmit={submit} method="POST" action="/api/inquiry" noValidate encType="multipart/form-data" className={styles.form}>
      <p className={styles.requiredNote}>Fields marked * are required. An idea is enough to begin.</p>
      <div hidden aria-hidden="true"><label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
      <fieldset disabled={status === "sending"}><legend>Your details</legend><div className={styles.grid}>
        <label>Name *<input name="name" autoComplete="name" maxLength={200} required {...fieldProps("name")} />{errorFor("name")}</label>
        <label>Email *<input name="email" type="email" autoComplete="email" maxLength={200} required {...fieldProps("email")} />{errorFor("email")}</label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={200} {...fieldProps("phone")} />{errorFor("phone")}</label>
        <label>City or neighborhood *<input name="location" maxLength={200} required {...fieldProps("location")} />{errorFor("location")}</label>
      </div></fieldset>
      <fieldset disabled={status === "sending"}><legend>The space</legend><div className={styles.grid}>
        <label>Property type<select name="property" {...fieldProps("property")}><option value="">Select if you like</option><option>Single-family home</option><option>Condominium or townhome</option><option>Other residential property</option></select>{errorFor("property")}</label>
        <label>Which space are you considering? *<input name="space" placeholder="A study, living room, empty wall…" maxLength={200} required {...fieldProps("space")} />{errorFor("space")}</label>
      </div><label>What isn’t working?<textarea name="problem" rows={3} maxLength={3000} {...fieldProps("problem")} />{errorFor("problem")}</label>
      <label>What would you love the space to become? *<textarea name="vision" rows={5} maxLength={3000} required {...fieldProps("vision")} />{errorFor("vision")}</label>
      <label>A photo of the space <span className={styles.hint}>Optional · one JPG, PNG, or WebP, up to 5 MB. Please avoid sensitive personal information.</span><input name="photo" type="file" accept="image/jpeg,image/png,image/webp" {...fieldProps("photo")} />{errorFor("photo")}</label></fieldset>
      <fieldset disabled={status === "sending"}><legend>A little practical context</legend><div className={styles.grid}>
        <label>Approximate investment<select name="budget" {...fieldProps("budget")}><option value="">Select if you like</option>{budgets.map(budget => <option key={budget}>{budget}</option>)}</select>{errorFor("budget")}</label>
        <label>Desired timing<input name="timing" placeholder="Exploring, this year, a particular season…" maxLength={200} {...fieldProps("timing")} />{errorFor("timing")}</label>
      </div><p className={styles.hint}>Not sure about investment yet? That’s a useful starting point for a conversation, too.</p><label>How did you hear about us?<input name="referral" maxLength={200} {...fieldProps("referral")} />{errorFor("referral")}</label></fieldset>
      <label className={styles.consent}><input type="checkbox" name="consent" value="yes" required disabled={status === "sending"} {...fieldProps("consent")} /><span>I agree that Dee Creative may contact me about this inquiry. <a href="/privacy">Privacy information</a> *</span></label>{errorFor("consent")}
      <button className={styles.submit} type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending your inquiry…" : "Send project inquiry"}</button>
      <noscript><p>Please call Jim at (503) 891-7153 to discuss your project.</p></noscript>
    </form>}
  </div>;
}
