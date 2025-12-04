# Portfolio Website - Setup Instructions

## Prerequisites
Before running this project, make sure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- A web browser (Chrome, Firefox, Edge, etc.)
- A code editor (VS Code recommended)

## Installation Steps

### 1. Extract/Clone the Project
Extract the project folder or clone it to your local machine.

### 2. Install Backend Dependencies
Open a terminal/command prompt and navigate to the backend folder:

```bash
cd backend
npm install
```

This will install all required dependencies:
- express
- cors
- express-rate-limit
- nodemon (for development)

### 3. Start the Backend Server

**Option A: Production Mode**
```bash
npm start
```

**Option B: Development Mode (with auto-restart)**
```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 4. Open the Website
After the backend server is running:

**Option A: Direct File Opening**
- Simply open `index.html` in your web browser

**Option B: Using Live Server (Recommended)**
- If using VS Code, install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"
- The website will open at `http://localhost:5500` (or similar)

## Project Structure
```
project/
├── backend/
│   ├── server.js          # Backend server
│   ├── package.json       # Backend dependencies
│   └── node_modules/      # Installed packages
├── css/
│   ├── styles.css         # Main styles
│   ├── animations.css     # Animation styles
│   └── variables.css      # CSS variables
├── js/
│   └── main.js           # JavaScript functionality
├── assets/
│   ├── resume.pdf        # Resume file
│   └── lion-profile.svg  # Profile image
└── index.html            # Main HTML file
```

## Features
- Responsive portfolio website
- Contact form with backend validation
- Smooth animations and transitions
- Rate limiting on contact form (5 requests per hour)
- Modern UI with gradient effects

## Troubleshooting

### Backend server won't start
- Make sure you're in the `backend` folder when running `npm install`
- Check if port 5000 is already in use
- Try running: `npm install` again

### Contact form not working
- Ensure the backend server is running on port 5000
- Check browser console for errors (F12)
- Verify the API endpoint in `js/main.js` matches your backend URL

### Port already in use
If port 5000 is already in use, you can change it:
1. Open `backend/server.js`
2. Change `const PORT = process.env.PORT || 5000;` to another port (e.g., 3000)
3. Update the fetch URL in `js/main.js` to match the new port

## Customization
To customize the portfolio:
1. **Personal Info**: Edit content in `index.html`
2. **Colors**: Modify CSS variables in `css/variables.css`
3. **Resume**: Replace `assets/resume.pdf` with your own
4. **Profile Image**: Replace `assets/lion-profile.svg` with your image

## Contact Form Setup
The contact form currently logs submissions to the console. To receive actual emails:
1. Integrate an email service (Nodemailer, SendGrid, etc.)
2. Update the backend logic in `backend/server.js`
3. Add email credentials to environment variables

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes
- The backend server must be running for the contact form to work
- All form submissions are currently logged to the server console
- Rate limiting prevents spam (max 5 submissions per hour per IP)

## Need Help?
If you encounter any issues:
1. Check that Node.js is installed: `node --version`
2. Verify npm is working: `npm --version`
3. Make sure all dependencies are installed: `cd backend && npm install`
4. Check the browser console for JavaScript errors (F12)
5. Check the terminal for backend server errors

---

**Enjoy your portfolio website! 🚀**
