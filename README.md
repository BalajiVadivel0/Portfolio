# Personal Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and vanilla JavaScript, featuring smooth animations and a Node.js backend for contact form handling.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with no framework overhead
- 🎭 CSS animations with scroll triggers
- 📧 Working contact form with backend validation
- ♿ Accessible and semantic HTML
- 🎯 SEO-friendly structure

## Tech Stack

### Frontend
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Intersection Observer API for scroll animations

### Backend
- Node.js
- Express.js
- CORS enabled
- Rate limiting for security

## Project Structure

```
.
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── animations.css      # Animation keyframes
│   └── styles.css          # Main styles
├── js/
│   └── main.js            # JavaScript functionality
├── backend/
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install backend dependencies
```bash
cd backend
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

The server will run on `http://localhost:5000`

2. Open your browser and navigate to:
```
http://localhost:5000
```

The server serves both the static HTML files and handles the contact form API.

## Customization

### Update Personal Information

Edit `index.html` and update:
- Your name in the hero section
- About section content
- Skills and proficiency levels
- Project details
- Social media links

### Modify Colors

Edit `css/variables.css` to change the color scheme:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... other variables */
}
```

### Adjust Animations

Modify animation timings and effects in `css/animations.css`

## Contact Form

The contact form includes:
- Client-side validation
- Server-side validation
- Rate limiting (5 requests per hour per IP)
- XSS protection through input sanitization

To add email functionality, integrate a service like:
- Nodemailer
- SendGrid
- Mailgun

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance

- No build process required
- Minimal JavaScript
- CSS animations for 60fps performance
- Lazy loading ready
- Optimized for Core Web Vitals

## Deployment

### Frontend + Backend Together

Deploy to platforms that support Node.js:
- Heroku
- Railway
- DigitalOcean
- Render

### Frontend Only

For static hosting (without contact form):
- GitHub Pages
- Netlify
- Vercel

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Created for internship applications - showcasing web development skills.
