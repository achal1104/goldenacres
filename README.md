# Goldenacres – React (Vite) frontend

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

Pages (React Router): `/`, `/about`, `/land-projects`, `/gold-rewards`, `/referral-programme`, `/faqs`, `/contact`.

- Lead form API: copy `.env.example` to `.env` and set `VITE_API_URL` (POST JSON: name, mobile, email, city, pref, msg). Without it the form runs in demo mode. See `src/api.js`.
- Real photos: add images to `public/images/` and replace the gradient placeholders in `src/data.js` (GALLERY).
- Verified details (location, survey no., charges, company info) are marked "To be confirmed" in `src/data.js` and `src/pages/About.jsx`.
- Theme: Sage Light default; switcher bottom-right. Colours are CSS variables in `src/styles.css`.
- Static hosting: route all paths to `index.html` (SPA fallback).
