# VIA marketing site

The marketing website for **VIA (Virtual Interactive Academy)**, the verified global community for International Baccalaureate students, licensed by schools.

This is the public marketing site. It is separate from the investor strategy site.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (scroll reveals)
- Phosphor icons
- Deployed on Vercel

## Brand

Derived from the VIA brand guide: VIA purple (`#7B3FF2`) and growth mint (`#22D3A6`) on a near-black, cool-toned dark canvas. Display type is Sora, body is Inter. All color tokens live in `styles/globals.css`; all copy and numbers live in `lib/content.ts`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run before pushing)
```

## Structure

```
app/            App Router page, layout, fonts, metadata
components/
  sections/     one component per page section
  ui/           nav, footer, brand scene, reveal, cards
lib/content.ts  single source of truth for copy and numbers
public/brand/   logo and brand assets
styles/         global styles and brand tokens
```
