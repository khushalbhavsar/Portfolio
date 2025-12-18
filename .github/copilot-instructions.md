# Copilot Instructions for AI Agents

This project is a modern portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. Follow these guidelines to be productive and maintain consistency:

## Architecture Overview
- **Single-page React app**: All main logic is in `src/`, with entry points in `main.jsx` and `App.jsx`.
- **Component structure**: Major sections (Overview, Projects, Experience, Contact, etc.) are implemented as separate components in `src/components/`.
- **Styling**: Uses Tailwind CSS via `index.css` and config files (`tailwind.config.js`, `postcss.config.js`).
- **Animations**: Framer Motion is used for transitions and effects in components.
- **Public assets**: Images and static files are in `public/` and `IMG/`.

## Developer Workflows
- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev` (default port: 5173)
- **Build for production**: `npm run build` (output: `dist/`)
- **Preview production build**: `npm run preview`

## Project-Specific Patterns
- **Customization**: All personal info, projects, and experience are edited in `src/App.jsx`.
- **Component conventions**: Each section is a functional React component. Props are rarely used; most data is hardcoded for simplicity.
- **Dark mode**: Handled via Tailwind CSS classes and config.
- **No backend/server code**: This is a static frontend-only site.

## Integration Points
- **External dependencies**: React, Tailwind CSS, Framer Motion, Vite, PostCSS.
- **No API calls or dynamic data sources**: All content is static and local.

## Key Files & Directories
- `src/App.jsx`: Main app logic and content
- `src/components/`: Section components
- `index.html`: HTML template
- `tailwind.config.js`, `postcss.config.js`: Styling config
- `vite.config.js`: Build config
- `public/`, `IMG/`: Static assets

## Example Patterns
- To add a new section, create a new component in `src/components/` and import it in `App.jsx`.
- To update projects, edit the relevant section in `App.jsx`.
- For custom styles, use Tailwind utility classes in JSX.

---

For questions about conventions or unclear patterns, ask for clarification or review `README.md` for more details.