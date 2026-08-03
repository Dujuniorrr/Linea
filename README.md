# Linea Engenharia e Arquitetura

Institutional website for **Linea Engenharia e Arquitetura** — an architecture and engineering practice based in Curitiba, Brazil. Built as a modern SPA with Vue 3 and Vite, focused on portfolio presentation, technical services, clients, and contact.

**Live site:** [https://www.linea.eng.br](https://www.linea.eng.br)

---

## Overview

This repository hosts the production front-end for Linea’s brand and project portfolio. It replaces the previous ASP.NET-style site with a lightweight, performance-oriented Vue app that highlights:

- Architectural projects (residential, commercial, industrial, institutional)
- Complementary engineering disciplines (fire safety, plumbing/hydraulic, electrical, sanitary surveillance)
- Clients, partners, testimonials, and direct WhatsApp contact
- SEO basics for a local professional services business (meta tags, sitemap, Open Graph, structured data)

Content is mostly static: projects, copy, and media live in the codebase and are served as a static build on Vercel.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Vue 3](https://vuejs.org/) (Composition API, SFCs) |
| Routing | [Vue Router 4](https://router.vuejs.org/) |
| Build | [Vite 8](https://vite.dev/) |
| Image pipeline | `vite-plugin-image-optimizer` + Sharp / SVGO |
| Hosting | [Vercel](https://vercel.com/) (SPA rewrites, cache headers) |
| Language | Portuguese (pt-BR) UI and content |

No backend CMS: updates happen through code and assets in this repo.

---

## Features

- **Home experience** — hero, intro, project types and services marquees, featured projects, testimonials, conversion CTA, clients/partners, contact
- **Portfolio** — lists and detail pages for architectural and complementary projects, with image galleries and lightbox (zoom, keyboard, touch)
- **SEO** — per-route titles/descriptions, Open Graph, `robots.txt`, `sitemap.xml`, JSON-LD-friendly meta setup
- **Performance** — WebP-first assets, LCP-friendly hero and logos, build-time image optimization
- **Accessibility & UX** — semantic structure, scroll anchors (`#clientes`, `#contato`), custom 404, legacy URL redirects
- **Analytics hooks** — page-view tracking helpers under `src/seo/`

---

## Project structure

```
src/
  assets/           # Logos, gallery images, brand media
  components/       # Shared UI (header, footer, cards, gallery, marquees)
  components/home/  # Home page sections (hero, intro, featured projects, …)
  composables/      # Reusable logic (e.g. gallery lightbox)
  data/             # Typed content: projects, about, contacts, clients
  router/           # Routes and scroll/SEO guards
  seo/              # Site constants, applySeo, analytics
  styles/           # Global and home band styles
  utils/            # Small helpers (WhatsApp link, …)
  views/            # Route-level pages
public/             # Favicons, hero LCP image, robots, sitemap, OG image
```

Primary content entry point: **`src/data/content.js`**.

Gallery images: **`src/assets/images/gallery/`**.

---

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projetos` | Architectural projects |
| `/projetos/:slug` | Project detail |
| `/complementares` | Complementary projects |
| `/complementares/:slug` | Complementary detail |
| `/clientes` | Redirect → `/#clientes` |
| `/contato` | Redirect → `/#contato` |
| `/*` | 404 |

### Legacy URL mapping

| Original (old site) | Current route |
| --- | --- |
| `/about.aspx`, `/Default.aspx` | `/` |
| `/services.aspx` | `/projetos` |
| `/services.aspx` + galleries | `/projetos/:slug` |
| `/page8.aspx` | `/complementares` |
| `/page8.aspx` + galleries | `/complementares/:slug` |
| `/page2.aspx` | `/#clientes` |
| `/contact.aspx` | `/#contato` |

---

## Getting started

### Requirements

- Node.js 20+ recommended
- npm

### Install & develop

```bash
npm install
npm run dev
```

Vite serves the app locally (default: `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/` and is ready for static hosting.

---

## Content updates

1. **Copy and project metadata** — edit `src/data/content.js`
2. **Images** — add files under `src/assets/images/` (prefer WebP for galleries)
3. **Routes / SEO defaults** — `src/router/index.js` and `src/seo/site.js`
4. **Global design tokens** — `src/styles/main.css`

After changes, rebuild or run the dev server to verify.

---

## Deployment

Configured for **Vercel** via `vercel.json`:

- Vite build → `dist`
- SPA rewrite so deep links serve `index.html`
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`)
- Long-cache headers for hashed `/assets/*` files

Domain: **www.linea.eng.br**

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |

---

## License / usage

Private institutional website for Linea Engenharia e Arquitetura. All brand assets, project photos, and client logos remain property of their respective owners.
