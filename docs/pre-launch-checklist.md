# Pre-launch checklist

## Project inquiry delivery

- [ ] Choose Jim’s recipient email address for project inquiries (deferred until launch preparation).
- [ ] Verify the production site URL and enable Netlify form detection; confirm `project-inquiry` is registered.
- [ ] Configure Netlify email notifications to the chosen address.
- [ ] Enable `INQUIRIES_ENABLED=true` for build and runtime, then redeploy.
- [ ] Submit an authorized live test with an optional photo; confirm the inquiry is saved in Netlify, the email arrives, and the photo link works.
- [ ] Confirm the visitor sees the success message. If delivery fails, disable online inquiries until resolved.

See [inquiry setup](inquiry-setup.md) for implementation details. Complete these checks before treating online inquiries as launch-ready.
