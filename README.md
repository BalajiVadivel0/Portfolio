# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and interactive components.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with Vite's optimized build
- 🎭 Smooth scroll animations and transitions
- 🎯 Component-based architecture
- ♿ Accessible and semantic HTML
- 🚀 Hot Module Replacement (HMR) for fast development

## Tech Stack

- React 18
- Vite 5
- CSS3 (with modern features)
- JavaScript (ES6+)

## Project Structure

```
.
├── index.html              # Entry HTML file
├── src/
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   ├── main.jsx           # React entry point
│   ├── components/        # React components
│   │   ├── About/
│   │   ├── Achievements/
│   │   ├── Certificates/
│   │   ├── Contact/
│   │   ├── Cursor/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── ParticlesBackground/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── hooks/             # Custom React hooks
│   └── utils/             # Utility functions
├── public/                # Static assets
│   └── assets/
├── package.json
└── vite.config.js         # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/BalajiVadivel0/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

### Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5173
```

The development server includes Hot Module Replacement (HMR) for instant updates.

## Customization

### Update Personal Information

Edit the component files in `src/components/` to update:
- Hero section (`Hero/Hero.jsx`)
- About section (`About/About.jsx`)
- Skills and proficiency levels (`Skills/Skills.jsx`)
- Projects (`Projects/Projects.jsx`)
- Education (`Education/Education.jsx`)
- Experience (`Experience/Experience.jsx`)
- Contact information (`Contact/Contact.jsx`)

### Modify Styles

Each component has its own CSS file for easy customization:
- Global styles: `src/App.css`
- Component-specific styles: `src/components/[ComponentName]/[ComponentName].css`

### Add Assets

Place your images, resume, and other assets in:
- `public/assets/` for static files

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Deploy to static hosting platforms:
- **Vercel** (Recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

MIT License - feel free to use this for your own portfolio!

## Author

**Balaji Vadivel**

## Acknowledgments

Built with React and Vite for modern web development.
