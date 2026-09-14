# chase-sapphire-shopping

Landing page for the Chase Sapphire offer inside [Picticular](https://picticular.com), the
movie app: $50 off your first purchase with a new Chase Sapphire credit card, and $10 off
every movie ticket paid with a Chase credit card. The page structure follows the Capital One
Shopping landing page; the look (purple gradient, Montserrat, full-screen snap-scrolling
sections, spring entrance animations) comes from
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
builds, and publishes `out/` to GitHub Pages at https://shopping.picticular.com/.

The custom domain is wired up in two places: a DNS record at ezhostingserver.com
(`shopping  CNAME  picticular.github.io`) and the repo's Pages setting
(`gh api -X PUT repos/Picticular/chase-saphire-shopping/pages -f cname=shopping.picticular.com`).
"Enforce HTTPS" is ticked in Settings → Pages. GitHub Pages serves one URL per site, so
picticular.github.io/chase-saphire-shopping no longer works.

To build for a subpath again, set `BASE_PATH=/chase-saphire-shopping` and
`SITE_URL=https://picticular.github.io/chase-saphire-shopping` in the workflow's build step.

The repo is public because the Picticular org is on GitHub's free plan, which only
serves Pages from public repos.

## Where things live

```
src/
  content/brand.ts       names, URLs, the two offer amounts, legal text. Edit this to rebrand.
  content/products.ts    static imports of the product cutouts in assets/products
  pages/
    index.tsx            meta tags, favicon links, Layout + Sections
  components/
    StoreBadges.tsx      App Store + Google Play badges, linked to the listings
    PhoneFrame.tsx       CSS phone bezel (iPhone or Android) around an app screenshot
    Layout.tsx           header, snap-scrolling <main>, fixed footer
    Header.tsx           Chase logo + contact link
    Footer.tsx           copyright, footer links
    Frame.tsx            one full-height snap section
    SectionHeading.tsx   animated h2 + lead paragraph shared by every section
    Sections/
      Sections.tsx       renders the sections in order
      Hero.tsx           headline, store badges, product cutouts floating around and off the edges
      FloatingProduct.tsx  one cutout with its round "saved." coin and drift animation
      ProductLayer.tsx   decorative layer of cutouts behind a section; every section has one
      HowItWorks.tsx     three-step explainer (download, add card, check out)
      WelcomeOffer.tsx   $50 welcome offer with an animated checkout card
      TicketOffer.tsx    $10 off every ticket, ticket receipt card
      AppFeatures.tsx    Picticular's swipe / watch / share / win features, app screenshots in phone frames
      Win.tsx            Lit List prizes next to the two Chase offers
      Signup.tsx         email form for the app download link (see below)
  assets/app/            Picticular screenshots from the iPhone simulator, 640px WebP
  assets/                Chase logo SVGs (public domain, from Wikimedia Commons), official
                         App Store and Google Play badges (unmodified, per store guidelines)
  assets/products/       product photo cutouts, see the README there for sources
  styles/globals.css     Tailwind entry point and theme tokens
public/                  favicons, site.webmanifest, og-image.png (link preview card)
```

## Things to know before editing

- **Copy is a rough-in.** The offer amounts and card names live in `brand.offer`; the
  client has not signed off on wording, and the store badges link to the listings picticular.com
  uses (`appStoreUrl`, `playStoreUrl`). Footer links are `#` placeholders.
- **App screenshots** come from the iPhone 17 simulator (`xcrun simctl io booted screenshot`,
  status bar overridden to 9:41 with `simctl status_bar`). Resize to 640px wide and save as
  WebP into `src/assets/app/`. The Android frame reuses an iOS screenshot and paints its own
  status bar over the iOS one.
- **The product cutouts are shopping imagery** from the Capital One reference. Movie-themed
  art (tickets, popcorn, the app on a phone) should replace them.
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
