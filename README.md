# Marvin's Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Showcasing projects, technical guides, and notes on web development.

🌐 **Live Site:** [marvinsakali.github.io/Marvin_portfolio](https://marvinsakali.github.io/Marvin_portfolio)

---

## 📋 Features

- **Home Page** – Introduction and quick navigation
- **Work** – Showcase of projects and portfolio pieces
- **Guides** – Technical guides and tutorials (MDX support)
- **Notes** – Personal notes and learning resources
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile
- **Fast Performance** – Built with Vite for optimized build and dev experience
- **Interactive Maps** – MapLibre GL integration for location-based content

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4 + Vite Plugin
- **Routing:** React Router DOM 7
- **Data Fetching:** TanStack React Query 5
- **Markdown Rendering:** Marked 18
- **Maps:** MapLibre GL 6
- **Animations:** TW Animate CSS
- **Icons:** Lucide React 1

---

## 📂 Project Structure

```
client/
├── src/
│   ├── pages/           # Route pages (Home, Work, Guides, Notes, etc.)
│   ├── components/      # Reusable React components
│   ├── contents/        # MDX/Markdown content files
│   ├── lib/            # Utility functions and helpers
│   ├── assets/         # Static images, icons, fonts
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # React entry point
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/marvinsakali/Marvin_portfolio.git
   cd Marvin_portfolio
   ```

2. **Install dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

---

## 📝 Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Build optimized production bundle
npm run preview   # Preview production build locally
npm run lint      # Run ESLint to check code quality
npm run deploy    # Build and deploy to GitHub Pages
```

---

## 🌐 Deployment

The project is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

### Deployment Workflow
- **Trigger:** Push to `main` branch
- **Build:** Runs `npm run build` in the `client/` directory
- **Deploy:** Publishes built files to GitHub Pages
- **Site URL:** `https://marvinsakali.github.io/Marvin_portfolio/`

The deployment workflow is configured in `.github/workflows/deploy.yml`.

---

## ⚙️ Configuration

### Vite Config
- **Base Path:** `/Marvin_portfolio/` (for GitHub Pages subdirectory)
- **React Plugin:** Vite's official React plugin with Oxc for faster builds
- **Tailwind:** Integrated via `@tailwindcss/vite`

### Router Config
The app uses React Router with `basename="/Marvin_portfolio/"` to correctly route on GitHub Pages.

---

## 📖 Adding Content

### New Pages
Create a new page component in `src/pages/`, add a route in `App.jsx`:
```jsx
<Route path="/my-page" element={<MyPage />} />
```

### Guides & Notes
Add markdown/MDX files to `src/contents/` and use the `Guides` and `Notes` pages to render them dynamically.

---

## 🎨 Styling

The project uses **Tailwind CSS 4** with the Vite plugin for fast, utility-first styling. Global styles are in `src/index.css`.

---

## 🔍 SEO & Performance

- Fast initial load with Vite's optimized builds
- Responsive meta tags in `index.html`
- Lazy loading and code splitting via React Router
- Optimized asset serving with maplibre-gl vendor exclusion

---

## 📜 License

This project is open source and available for personal and educational use.

---

## 💬 Contact & Social

For questions or feedback, visit the **GitHub repository:** [marvinsakali/Marvin_portfolio](https://github.com/marvinsakali/Marvin_portfolio)

---

**Built with ❤️ by Marvin Sakali**
