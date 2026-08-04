# Portfolio — Dimas Dew

> UI/UX Designer & Frontend Developer based in Indonesia.
> Crafting digital experiences that feel alive.

🌐 **Live:** [portfolio-dimasdew.vercel.app](https://portfolio-dimasdew.vercel.app)

---

## 👋 About

Hi, I'm **Dimas Dew** — a self-taught UI/UX Designer and Frontend Developer working at the intersection of great design and clean code. I believe beautiful interfaces should also be fast, accessible, and delightful to use.

Currently building my portfolio and open to work and collaboration.

---

## ✨ Highlights

- **Custom cursor & marquee** — hand-built interactions, not off-the-shelf
- **Section-driven landing** — Hero, About, Services, Projects, Contact, Footer
- **Dynamic work pages** — individual case studies at `/work/[slug]`
- **Light / dark toggle** — accent colors bridged to Tailwind so themes stay in sync
- **Motion with intent** — subtle reveals, no gratuitous animation
- **Fast by default** — `next/font` (Syne + DM Sans), static rendering, minimal JS

---

## 🛠 Tech Stack

| Category | Tools |
|---|---|
| Framework | Next.js 15 (App Router), React 18 |
| Styling | Tailwind CSS + CSS variables |
| Fonts | Syne + DM Sans via `next/font` |
| Design | Figma, Prototyping, User Research |
| Deploy | Vercel |

---

## 🎨 Design System

Part of a shared design system across my apps ([Design-System.md](../Design-System.md)) — consistent spacing, type, radius, and breakpoints, with color kept per-product.

| Token | Scale |
|---|---|
| Spacing | 4px grid — 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 128 |
| Type | two heading roles — `.h-display` (hero), `.h-section` (headers) |
| Radius | 8 / 12 / 16 / full |
| Breakpoints | mobile-first — `min-width` 640 / 768 / 1024 |
| Color | accent tokens → Tailwind utilities (`text-accent`, `bg-accent`, …) |

Inline colors were migrated to token utilities so light/dark mode is driven from a single source.

---

## 🚀 Run Locally

```bash
npm install
npm run dev      # http://localhost:3000
```

---

## 📬 Contact

- Email: [dimasdewantara50@gmail.com](mailto:dimasdewantara50@gmail.com)
- LinkedIn: [linkedin.com/in/dimas-dew](https://www.linkedin.com/in/dimas-dew/)

---

<p align="center">Designed & built with 🖤 by Dimas Dew</p>
