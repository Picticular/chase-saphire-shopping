# chase-sapphire-shopping

Landing page for Chase Sapphire Shopping, the browser extension that applies coupon codes
at checkout, compares prices, watches for price drops and pays rewards. The page structure
follows the Capital One Shopping landing page; the look (purple gradient, Montserrat,
full-screen snap-scrolling sections, spring entrance animations) comes from
[chase-web-guide](https://github.com/Picticular/chase-web-guide).

Built with Next.js (Pages Router, static export), React 19, Tailwind 4 and framer-motion.
Package manager is Bun.

## Running it locally

Node 24 (see `.nvmrc`) and Bun.

```sh
bun install
bun run dev
```

Open http://localhost:3000. `basePath` comes from the `BASE_PATH` env var and is empty in
dev.

| Command             | What it does                           |
| ------------------- | -------------------------------------- |
| `bun run build`     | Static export to `out/`                |
| `bun run lint`      | Biome check (lint + format, no writes) |
| `bun run format`    | Biome check with `--write`             |
| `bun run typecheck` | `tsc --noEmit`                         |

## Deploying

Push to `main`. `.github/workflows/nextjs.yml` installs with Bun, runs lint and typecheck,
builds, and publishes `out/` to GitHub Pages. Until the custom domain is live the site is
at https://picticular.github.io/chase-saphire-shopping/ and the workflow sets
`BASE_PATH=/chase-saphire-shopping` for the build.

### Moving to sapphire.picticular.com

1. Add a DNS record at ezhostingserver.com: `sapphire  CNAME  picticular.github.io`.
2. Delete the `BASE_PATH` env from the build step in `.github/workflows/nextjs.yml`.
3. Set the custom domain: `gh api -X PUT repos/Picticular/chase-saphire-shopping/pages -f cname=sapphire.picticular.com`,
   then tick "Enforce HTTPS" in Settings → Pages once the DNS check passes.

GitHub Pages serves one URL per site, so the github.io address stops working at step 3.

The repo is public because the Picticular org is on GitHub's free plan, which only
serves Pages from public repos.

## Where things live

```
src/
  content/brand.ts       product name, URLs, stats, legal text. Edit this to rebrand.
  content/products.ts    static imports of the product cutouts in assets/products
  pages/
    index.tsx            meta tags, favicon links, Layout + Sections
  components/
    Layout.tsx           header, snap-scrolling <main>, fixed footer
    Header.tsx           Chase logo + contact link
    Footer.tsx           copyright, footer links
    Frame.tsx            one full-height snap section
    SectionHeading.tsx   animated h2 + lead paragraph shared by every section
    Sections/
      Sections.tsx       renders the sections in order
      Hero.tsx           headline, install CTA, product cutouts floating around and off the edges
      FloatingProduct.tsx  one cutout with its round "saved." coin and drift animation
      ProductLayer.tsx   decorative layer of cutouts behind a section; every section has one
      HowItWorks.tsx     two-click explainer
      Coupons.tsx        animated "tested N codes" widget
      PriceComparison.tsx  same item at three stores, best price highlighted
      PriceDrop.tsx      price watch card
      Rewards.tsx        earn on purchases, redeem for gift cards
      Signup.tsx         email reminder form (see below)
  assets/                Chase logo SVGs (public domain, from Wikimedia Commons)
  assets/products/       product photo cutouts, see the README there for sources
  styles/globals.css     Tailwind entry point and theme tokens
public/                  favicons and site.webmanifest
```

## Things to know before editing

- **The install button and footer links are placeholders** (`installUrl: '#'` and
  `href: '#'` in `brand.ts`). Fill them in once the extension is listed.
- **The signup form has no backend.** This is a static export, so `Signup.tsx` only flips
  to a thank-you state on submit. Point the form at a real endpoint (or a marketplace
  email/CRM integration) before launch.
- **The Chase logo is temporary.** `src/assets/chase-logo*.svg` came from Wikimedia
  Commons for layout purposes. Replace with client-supplied brand assets, and regenerate
  the PNG favicons in `public/` from the final mark.
- **Assets must be imported, not referenced by path.** Every image and SVG is a static
  import from `src/assets`, so a `basePath` could be reintroduced without touching
  components. `index.tsx` already prefixes favicon and manifest hrefs with
  `useRouter().basePath`.
- **Adding a section** means a new file in `src/components/Sections/` (copy an existing one
  for the `Frame` + `SectionHeading` setup, keep the `aria-labelledby` wiring) and one more
  line in `Sections.tsx`.
- **Product cutouts are sized with `vw`/`vh` clamps** and capped at their source pixel
  width (`max-w-[…px]`) so they never upscale into blur. Section cutouts (everything
  except the hero) only render from `lg` on viewports at least 880px tall, the `tall`
  variant in `globals.css`; shorter landscape screens have no room under the copy.
- **Reduced motion is honoured.** `_app.tsx` wraps everything in
  `<MotionConfig reducedMotion="user">`, and each section checks `useReducedMotion()` to
  skip entrance animations. Keep that pattern in new sections.
- `images.unoptimized` is on because static export has no image optimizer.
