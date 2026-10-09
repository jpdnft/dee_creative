# Project inquiry delivery

The local preview never pretends to deliver inquiries. `INQUIRIES_ENABLED=false` keeps the page’s availability notice visible and makes valid local POSTs return an honest 503 response with the phone alternative. Validation, photo checks, error recovery, and success presentation can be tested locally without sending anyone a message.

## Netlify launch configuration

1. Set the real HTTPS production domain in `NEXT_PUBLIC_SITE_URL`.
2. Enable Netlify form detection, and deploy the static `public/__forms.html` registration file with the Next.js site.
3. Verify that `project-inquiry` appears in Netlify Forms with all registered field names.
4. Enable `INQUIRIES_ENABLED=true` in the deployment’s build and runtime environment, then rebuild/deploy.
5. Submit an authorized test inquiry through the live page and confirm it appears in Netlify. Test the optional image attachment as well. If that check fails, disable inquiries until delivery is fixed.
6. Configure notification recipients in Netlify when the owner provides the desired destination; this implementation does not invent an email address or send notification messages on its own.

The browser POSTs to `/api/inquiry`. The route checks origin, required fields, lengths, investment choices, consent, file size, MIME type, and photo signatures before forwarding a sanitized multipart submission to the trusted configured site origin at `/__forms.html`. No API secret is exposed. Netlify handles storage and spam filtering; the registered form also uses a honeypot. No durable custom rate-limit store has been added.

Only one optional JPG, PNG, or WebP photo is accepted, up to 5 MB. Do not enable delivery on another hosting provider without implementing and verifying its form backend.

References: [Netlify form setup](https://docs.netlify.com/manage/forms/setup/), [Next.js form troubleshooting](https://docs.netlify.com/manage/forms/troubleshooting-tips/).
