# My Portfolio

A modern, responsive portfolio website built with React and Bootstrap.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with fixed navbar
- **Contact Form**: Integrated with Web3Forms API for seamless communication
- **Project Showcase**: Beautiful cards displaying projects with live demos and GitHub links
- **Skills Display**: Interactive progress bars and badges showing technical skills
- **Social Integration**: Links to GitHub, LinkedIn, and other social platforms

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: Bootstrap Icons
- **Form Handling**: Web3Forms API
- **Deployment Ready**: Optimized build configuration

## Project Structure

```
Nuru-Portfolio-Web/
│
├── index.html                  # Main HTML file with favicon
├── package.json               # Dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── vite.config.js             # Vite build configuration
├── .eslintrc.cjs              # ESLint configuration
├── .gitignore                 # Git ignore rules
├── firebase.json              # Firebase deployment config
├── .firebaserc                # Firebase project config
├── README.md                  # Project documentation
├── Portfolio-requirements.txt # Original project requirements
│
├── .firebase/                 # Firebase cache directory
├── dist/                      # Production build output
├── build/                     # Build artifacts
├── node_modules/              # Dependencies
│
└── src/
    ├── main.jsx               # Entry point with Bootstrap imports
    ├── App.jsx                # Main app layout component
    │
    ├── assets/
    │   ├── ProfilePhoto.png   # Profile photo for hero section
    │   ├── ecommerce.png      # E-commerce project image
    │   ├── task-management.png # Task management project image
    │   ├── weather.png        # Weather dashboard project image
    │   ├── social-media.png   # Social media dashboard image
    │   ├── portfolio.png      # Portfolio project image
    │   └── blog.png           # Blog platform project image
    │
    ├── components/
    │   ├── Navbar.jsx         # Navigation bar with smooth scroll
    │   ├── Home.jsx           # Hero section with profile photo
    │   ├── About.jsx          # About section with highlights
    │   ├── Projects.jsx       # Projects section with Bootstrap cards
    │   ├── Skills.jsx         # Skills section with progress bars
    │   ├── Contact.jsx        # Contact form with Web3Forms API
    │   └── Footer.jsx         # Footer with social links
    │
    ├── styles/
    │   └── custom.css         # Custom styling and animations
    │
    └── utils/
        └── scroll.js          # Smooth scrolling utilities
```

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Customization

### Personal Information

The portfolio has been personalized with Nurdin Abdinasir's information. You can further customize:

- `src/components/Home.jsx` - Name and tagline
- `src/components/About.jsx` - Bio and highlights
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills and technologies
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social media links

### Profile Photo

Replace `src/assets/ProfilePhoto.png` with your actual profile photo.

### Contact Form

The contact form is already configured with Web3Forms API. The API key is included and ready to use.

### Colors and Styling

Customize colors and styling in `src/styles/custom.css`.

## Features Breakdown

### Navigation

- Fixed navbar with smooth scrolling
- Responsive hamburger menu for mobile
- Active section highlighting

### Home Section

- Full-screen hero with call-to-action buttons
- Animated scroll indicator
- Gradient background

### About Section

- Professional bio
- Key highlights with icons
- Technology badges

### Projects Section

- Responsive grid layout
- Project cards with hover effects
- Live demo and GitHub links
- Technology badges for each project

### Skills Section

- Progress bars showing skill levels
- Categorized skills (Frontend, Backend, DevOps)
- Tools and technologies section
- Additional skill highlights

### Contact Section

- Web3Forms integration
- Form validation
- Success/error handling
- Contact information display

### Footer

- Social media links
- Back to top functionality
- Professional credits

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: nurudiin222@gmail.com
- LinkedIn: [@Nurdin Abdinasir](https://ke.linkedin.com/in/nurdin-abdinasir-1b1a9b367)
- GitHub: [@Dev-Din](https://github.com/Dev-Din)
