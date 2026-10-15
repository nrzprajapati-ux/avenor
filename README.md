# AVENOR — ultra-motion footwear storefront

This repository is a starter Next.js + Tailwind + Framer Motion project focused on premium motion and 3D product experiences.

Quick start
1. Install dependencies: `npm install`
2. Run dev: `npm run dev`
3. Open http://localhost:3000

What I added
- Next.js scaffold with pages and components
- TailwindCSS configs and global styles
- Framer Motion for interactions
- Lottie integration points (lottie-react) — replace placeholder animation in `/public/animations/` when available
- react-three/fiber + drei 3D viewer wiring at `components/Shoe3D.jsx` (loads `/models/shoe.gltf` if present)
- Two sample products (Nike & Converse inspired) using royalty-free Unsplash images as placeholders. Replace with licensed assets.

Files to update / add
- Add high-res product images in `public/images/` (nike, converse) and update `data/products.js` if needed.
- Add a GLTF shoe model at `public/models/shoe.gltf` or change `components/Shoe3D.jsx` to point at a CDN-hosted model.
- Add Lottie JSONs to `public/animations/hero.json` for advanced vector motion.

Notes on trademarks
This starter references Nike and Converse for demonstration. Do not use trademarked asset images in production without license. Replace with licensed photography or your own content.

Next steps I can do for you
- Add real Lottie animations exported from After Effects
- Add a curated GLTF shoe model and host it in the repo (small model)
- Wire a Stripe checkout flow and persistent cart
- Convert to TypeScript and add Storybook

I have pushed this scaffold to the repository: https://github.com/nrzprajapati-ux/avenor

Tell me which next step you want me to do and I will continue (e.g., add GLTF model, add Lottie animation, wire Stripe, add CI/CD).
