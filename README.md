# SAP GROUPS — Corporate Website (Static)

Pure static React + Vite site — no backend, no database, no server to maintain.

## 1. Set up the contact form (5 minutes)

The contact form sends messages via [Formspree](https://formspree.io) — a free
service that emails form submissions straight to an inbox, no backend needed.

1. Go to https://formspree.io and sign up free.
2. Create a new form, set its notification email to `rupakprashanthan@gmail.com`
   (or whichever inbox you want messages sent to — change it anytime in the
   Formspree dashboard, no code changes needed).
3. Copy the Form ID Formspree gives you (looks like `xyzabcd`).
4. Open `src/app/components/ContactSection.tsx` and replace:
   ```
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real form ID.
5. Formspree's free tier includes 50 submissions/month, which is plenty for
   a company contact form. Upgrade only if you outgrow that.

## 2. Local development

```bash
npm install
npm run dev
```

## 3. Deploy to Netlify

1. Push this folder to a GitHub repo.
2. Go to https://app.netlify.com → "Add new site" → "Import an existing project" → connect the repo.
3. Netlify auto-detects `netlify.toml` (build command `npm run build`, publish folder `dist`) — just click Deploy.
4. Done. You get a live URL like `https://your-site-name.netlify.app`.

No environment variables, no database, no server to keep alive — this is the
entire deployment.

## 4. Editing content later

Careers listings and news articles are plain arrays at the top of:
- `src/app/components/CareersSection.tsx`
- `src/app/components/NewsSection.tsx`

Edit the array, commit, push — Netlify auto-redeploys. If down the line you
want these editable from a no-code admin panel instead of code, that's when
it's worth adding a backend back in.
