# Valentine's Microsite (Next.js + Tailwind)

A playful, mobile-first Valentine microsite built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Mobile-first single-page experience at `/`
- Hero photo logic from local files in `/public`
- Dodge-the-cursor/tap playful `No 🙈` button
- Keyboard-accessible exception: focused `No` button does not dodge
- `Yes 💖` success view with cute floating hearts/sparkles animation
- Graceful fallback when one or both images are missing
- Accessible semantic HTML, focus-visible states, no backend/services required

## Image Placement

Put your images here:

- `/public/photo.jpeg` (main hero image: you + wife + baby)
- `/public/family.jpeg` (secondary sweet moment image: wife + baby)

Behavior:

- If `photo.jpeg` exists, it is used as the main hero image.
- If `family.jpeg` also exists, it appears as a secondary collage card.
- If one is missing, the existing image is still shown.
- If both are missing, a cute fallback panel is displayed.

## Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production Build Check

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. In Vercel, create a new project and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. No environment variables needed.
5. Deploy.

After deployment, add your images to `/public/photo.jpeg` and `/public/family.jpeg`, commit, and redeploy.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
