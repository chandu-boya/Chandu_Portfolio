# 🚀 Boya Chandu - Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript. This portfolio showcases my skills, projects, education, and certifications in a clean, professional design with dark theme and smooth animations.

## 🌟 Features

- **Responsive Design** - Fully mobile-friendly and optimized for all screen sizes
- **Dark Theme** - Modern black background with vibrant accent colors
- **Smooth Animations** - Engaging hover effects and scroll animations
- **Interactive Sections** - Dynamic content loading and smooth scrolling
- **Contact Form** - Working contact form with EmailJS integration
- **Certification Showcase** - Organized by company with direct Google Drive links
- **Project Gallery** - Interactive project cards with GitHub links
- **Skills Display** - Categorized skills with varied color schemes

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Interactive functionality and dynamic content
- **EmailJS** - Contact form email integration
- **Font Awesome** - Icons and visual elements
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
portfolio_website/
├── index.html              # Main HTML file
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
├── assets/                 # Static assets
│   ├── profile.jpg         # Profile photo
│   └── Logos/              # Company logos
├── sections/               # Individual section files
│   ├── about.html          # About section
│   ├── education.html      # Education section
│   ├── skills.html         # Skills section
│   ├── projects.html       # Projects section
│   ├── certifications.html # Certifications section
│   └── contact.html        # Contact section
└── README.md               # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary Colors**: Purple (#6366f1), Pink (#ec4899)
- **Accent Colors**: Orange (#f59e0b), Blue (#06b6d4), Green (#10b981)
- **Background**: Pure black (#000000) with dark gradients
- **Text**: White and light gray for optimal contrast

### Animations
- **Card Hover Effects** - Scale, rotate, and shadow animations
- **Scroll Animations** - Elements animate into view
- **Typing Animation** - Hero title types out on load
- **Smooth Transitions** - Cubic-bezier easing for professional feel

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone or download** the repository
2. **Open** `index.html` in your web browser
3. **For development**, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality. To set up:

1. **Create an EmailJS account** at [emailjs.com](https://emailjs.com)
2. **Update the credentials** in `script.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...});
   ```
3. **Configure your email template** in EmailJS dashboard

## 🏆 Certifications

The certifications section is organized by company:
- **HackerRank** - SQL (Basic), Python (Basic)
- **Cisco** - Introduction to Networks, Cybersecurity Essentials
- **Internships** - AWS Cloud Computing, Cyber Security
- **IBM** - Cyber Security Fundamentals
- **Coursera** - Google Data Analytics
- **VOIS** - Protect from Browser Attacks

## 💼 Projects Showcase

Featured projects include:
- **PDF Malware Detection using ML Models** - Python, Security, Machine Learning
- **File Secure Tool using AES & DES** - Java, Cryptography, GUI
- **AWS Load Balancer Setup** - AWS, Cloud Computing, Round Robin Algorithm
- **Simple Bank Application using OOPS** - Java, OOPs concepts

## 🎯 Skills Highlighted

- **Languages**: Java, Python
- **Web Development**: HTML, CSS, JavaScript
- **Database**: MySQL, Oracle
- **Tools**: MS Office, VS Code, Git, Eclipse, Cursor, EmailJS
- **Specializations**: OOP, DSA, Cybersecurity, Machine Learning

## 🔧 Customization

### Adding New Sections
1. Create a new HTML file in the `sections/` folder
2. Add the section div to `index.html`
3. Update the navigation menu
4. Add loading logic in `script.js`

### Modifying Colors
Update the CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... other colors */
}
```

### Adding Animations
New animations can be added to the CSS:
```css
@keyframes yourAnimation {
    0% { /* start state */ }
    100% { /* end state */ }
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Boya Chandu**
- 📧 Email: [bchanduu2003@gmail.com](mailto:bchanduu2003@gmail.com)
- 📱 Phone: [+91 8978355465](tel:+918978355465)
- 💼 LinkedIn: [linkedin.com/in/boya-chandu-a30649271](https://linkedin.com/in/boya-chandu-a30649271)

## 🙏 Acknowledgments

- **Font Awesome** for the amazing icons
- **Google Fonts** for the Poppins font family
- **EmailJS** for the contact form functionality
- **CSS Grid and Flexbox** for the responsive layouts

---

⭐ **Star this repository** if you found it helpful!

**Built with ❤️ by Boya Chandu**
