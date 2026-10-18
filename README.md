# landing-alica

Landing page for the online workshop «Їж. Готуй. Не нервуй» by Alisa Nemytkina. Built with Next.js.

All page texts, prices and links live in `content/landing.ts`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

- `site.checkoutUrl` in `content/landing.ts` — payment link (all buttons use it)
- `site.instagram`, `site.telegram`, `site.email` — footer contacts
- `NEXT_PUBLIC_SITE_URL` env var — the final site address, used for social preview images
