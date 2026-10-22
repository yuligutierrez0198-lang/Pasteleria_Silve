# Postres Silve

Storefront concept for a small bakery, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The root workspace folder is `Pasteleria`; the Next.js application lives in `postres-silve/` because npm package names must be lowercase.

## Checks

```bash
npm run lint
npm run build
```

## Current scope

The page includes a responsive homepage, category filtering, a local demo cart, and a newsletter confirmation state. Product names, descriptions, prices, and imagery are sample content. The cart and newsletter do not submit orders or store subscriber data. Product photography is loaded from Unsplash URLs.

## Main files

- `src/app/page.tsx`: homepage content and client-side interactions
- `src/app/globals.css`: visual design and responsive rules
- `src/app/layout.tsx`: app-wide fonts and metadata
