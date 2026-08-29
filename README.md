# NEOSHOP ([visit](https://neoshop-red.vercel.app/))

A small front-end showcase project — not a real product, just a playground to practice turning a design into a working React app.

## Tech Stack

- **React** (with React Router for routing)
- **styled-components** for styling
- **Vite** as the build tool (implied by the `main.jsx` / `src` structure)
- Design tokens theme object (colors, font sizes/weights, spacing, shadows, media breakpoints)
- [Fake Store API](https://fakestoreapi.com/) for product data

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI building blocks (Button, Container, Nav, Drawer, Search, Filters, Pagination, Products, Carousel...)
│   ├── Header.jsx
│   └── Footer.jsx
├── routes/           # Page-level components (Home, Shop, Cart, Layout)
├── hooks/
│   └── useProducts.js
├── themes/            # Theme tokens + global styles
├── routes.jsx         # Router config
└── main.jsx           # App entry point
```

## The Idea

The goal was to take a design (built with Stitch, simulating a Figma handoff) and turn it into real code, end to end:

1. **Extract design tokens first** — colors, font sizes/weights, spacing, shadows, breakpoints — into one `theme` object, then feed that into `styled-components` everywhere instead of hardcoding values.
2. **Break the UI into components**, each in its own file. Some components (like `Products`) own their entire responsibility — data, layout, and interaction all in one place. Others follow the **compound component** pattern (like `Nav` and `Drawer`), exposing related sub-components (`Nav.NavLink`, `Drawer.CloseBtn`, etc.) off a single parent.

## What I Learned

- How to translate a visual design into a structured **design tokens** object and consume it consistently through a theming system.
- How to think about **component boundaries** — deciding what's a "dumb" reusable piece (`Button`, `Container`) vs. a component that owns real logic (`Products`, `Shop`).
- Practicing the **compound component pattern** for UI pieces that have several related parts working together (`Nav`, `Drawer`).
- Structuring a small React app with routing, shared layout, and context passed through `Outlet`.