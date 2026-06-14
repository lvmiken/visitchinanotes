# Form Setup

This project currently supports two incoming form flows:

- `Plan Help`
- `Contribute`

Both forms are static-site friendly. They do not need a custom backend if you connect them to an external form endpoint.

## Important

If there is no local `.env` file with real values, the forms stay in preview mode.

In preview mode:

- the UI shows a success message
- no submission is stored
- no email is sent
- there is nothing for you to review later

## Where submissions go

### Planning requests

Configured by:

```bash
PUBLIC_PLANNING_FORM_ENDPOINT=...
```

If this is set, the browser sends the planning request to that endpoint.

You usually review submissions in one of these places:

1. The dashboard of the form service behind that endpoint.
2. Your email inbox, if that service forwards submissions by email.
3. A webhook destination, if you connect the form service to one later.

### Contributor pitches

Configured by:

```bash
PUBLIC_CONTRIBUTION_FORM_ENDPOINT=...
PUBLIC_CONTACT_EMAIL=...
```

If the endpoint is set, the form submits there.

If only `PUBLIC_CONTACT_EMAIL` is set:

- the page shows an email fallback button
- contributors can contact you directly by email
- the forms can open a pre-filled email draft in the visitor's mail app

## Minimal local setup

Create a file named `.env` in the project root:

```bash
PUBLIC_PLANNING_FORM_ENDPOINT=https://your-form-endpoint.example/submit
PUBLIC_CONTRIBUTION_FORM_ENDPOINT=https://your-form-endpoint.example/contribute
PUBLIC_CONTACT_EMAIL=editor@example.com
```

Then restart Astro dev server.

## How to verify live mode

On these pages:

- `/plan-help/`
- `/contribute/`

look for the note under the intro area:

- if it says `preview mode`, nothing is being saved
- if it says `Live follow-up is enabled` or `Contributor submissions are enabled`, the page is using your configured endpoint

## Recommended operating pattern

For a small content site, the easiest workflow is:

1. Use a hosted form endpoint for structured submissions.
2. Enable email notifications from that service.
3. Keep `PUBLIC_CONTACT_EMAIL` as a visible fallback.

That gives you:

- a simple inbox
- a submission record
- no custom backend to maintain

## Email fallback behavior

If `PUBLIC_CONTACT_EMAIL` is configured but no form endpoint is configured:

- `Plan Help` opens a pre-filled planning request email
- `Contribute` opens a pre-filled contributor pitch email

This is the lightest possible setup, but it depends on the visitor having a usable email app on their device.
