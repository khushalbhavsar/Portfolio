# Modern Portfolio Website

This is a modern, responsive portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. It showcases your projects, experience, education, and contact information in a single-page application.

## Features
- **Single-page React app**: Fast and smooth navigation
- **Animated transitions**: Powered by Framer Motion
- **Dark mode**: Easily switchable via Tailwind CSS
- **Easy customization**: All personal info and content are edited in `src/App.jsx`
- **No backend required**: 100% static frontend site

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
1. Clone the repository:
	```bash
	git clone <your-repo-url>
	cd Portfolio
	```
2. Install dependencies:
	```bash
	npm install
	```

### Development
Start the development server:
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

### Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## Customization
- **Personal Info & Content**: Edit `src/App.jsx` to update your name, bio, projects, experience, education, and contact details.
- **Sections**: Each major section is a component in `src/components/`. Add or modify sections as needed.
- **Styling**: Use Tailwind CSS utility classes in JSX for custom styles.
- **Images & Assets**: Place images in `public/` or `IMG/` folders.

## Project Structure

```
Portfolio/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── IMG/
├── public/
├── Resume/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── Contact.jsx
│       ├── Education.jsx
│       ├── Experience.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── Overview.jsx
│       └── Projects.jsx
```

## Deployment
You can deploy the production build to any static hosting service (e.g., Vercel, Netlify, GitHub Pages).

## License
This project is open source and available under the [MIT License](LICENSE).

---
Feel free to customize and share your portfolio!
