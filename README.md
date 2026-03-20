# Nancy Mtengo — Personal Portfolio

A personal portfolio website for Nancy Dama Mtengo, a Bachelor of Laws student and legal advocate based in Nairobi, Kenya.

## About

This site showcases Nancy's professional background, legal experience, and community involvement. It includes the following pages:

- **Home** — Introduction, LinkedIn, Experience highlights, and latest articles
- **About** — Biography, profile photo, and contact links
- **Experience** — Timeline of professional roles (Legal Intern, Judicial Intern, Computer Studies Teacher)
- **Volunteering** — Community involvement (KMUN, Legal Aid Clinic)
- **Contact** — Email and LinkedIn

## Tech Stack

- [React 18](https://react.dev/)
- [React Router 6](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [React Helmet](https://github.com/nfl/react-helmet) — page-level SEO
- [Font Awesome](https://fontawesome.com/) — icons

## Getting Started

```bash
npm install
npm run dev
```

The site runs locally at `http://localhost:5173`.

## Customisation

All personal content is centralised in a few files:

| File | What it controls |
|------|-----------------|
| `src/data/user.js` | Name, email, socials, experience entries, volunteering entries |
| `src/data/articles.jsx` | Article content shown on the homepage and article reader |
| `src/data/seo.js` | Page titles, descriptions, and keywords |

Logo images and other assets live in the `public/` folder.

## Contact

**Nancy Dama Mtengo**
mtengonancy@gmail.com
[LinkedIn](https://www.linkedin.com/in/nancy-mtengo-2a7809345)
