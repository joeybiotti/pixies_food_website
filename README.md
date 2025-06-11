# Pixie Food Company Website

This is a small marketing site built with **Next.js** for *Pixie Food Company*, a vegan pastry and catering company based in New England. The goal was to create a fast, responsive, and visually simple site that covers basic small business needs: branding, a menu, and a short company overview.


## Live Preview

<a>https://www.withthepixies.com/</a>

## Tech Stack

| Feature        | Details                                 |
|----------------|-----------------------------------------|
| Framework      | [Next.js](https://nextjs.org/)          |
| Styling        | [Tailwind CSS](https://tailwindcss.com/) with filters plugin |
| Animations     | [Framer Motion](https://www.framer.com/motion/) |
| Server         | Custom Express server (`server.js`)     |
| Icons          | FontAwesome                             |
| Analytics      | Vercel Analytics and Speed Insights     |

## Features

- Responsive layout with basic Tailwind styling
- Click-to-expand menu modal using Framer Motion
- Semantic image usage and accessible alt/aria tags
- No CMS, database, or backend logic — just static pages and images
- Ready to deploy on Vercel or any Node host

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm start         # Start Express server (uses server.js)
npm run lint      # Lint the codebase
```

## Local Setup

```bash
git clone https://github.com/YOUR_USERNAME/pixie_food_company_site.git
cd pixie_food_company_site
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

## Project Structure

- `pages/` – Main route components (About, Menu, Home)
- `public/` – Static assets like logos and menu images
- `server.js` – Optional Express server for custom deployment
- `styles/` – Tailwind and PostCSS config
- No database, auth, or state management

## License

[MIT](LICENSE)

## Notes

This isn't a complex site. It does what it needs to: displays branding, some info, and a menu. Built using modern tools because it's easy and fast.
