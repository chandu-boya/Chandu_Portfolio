
// Initialize EmailJS
(function() {
    emailjs.init("AtCoNILbR-bDL2wno");
})();

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Navigation Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.6)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Contact form handling with EmailJS
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            emailjs.send('service_gsvys8y', 'template_9hrz0nn', {
                from_name: name,
                from_email: email,
                message: message,
                to_name: 'Boya Chandu',
                reply_to: email,
                subject: 'New Contact Form Message',
                user_name: name,
                user_email: email,
                user_message: message
            })
            .then(function(response) {
                console.log('Email sent successfully:', response);
                showNotification('Message sent successfully! You will receive a confirmation email shortly.', 'success');
                contactForm.reset();
            })
            .catch(function(error) {
                console.error('Error sending email:', error);
                showNotification('Failed to send message. Please try again.', 'error');
            })
            .finally(function() {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
            
            return false;
        });
    }
}

// Certification cards now use direct links - no modal needed

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--primary-color)' : 'var(--accent-color)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: var(--shadow);
            z-index: 3000;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
        ">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Load section files
async function loadSection(sectionId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.innerHTML = html;
            
            // Initialize contact form after loading
            if (sectionId === 'contact') {
                setTimeout(() => {
                    initializeContactForm();
                }, 100);
            }
        }
    } catch (error) {
        console.error(`Error loading ${sectionId}:`, error);
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load all section files
    loadSection('about', 'sections/about.html');
    loadSection('education', 'sections/education.html');
    loadSection('skills', 'sections/skills.html');
    loadSection('projects', 'sections/projects.html');
    loadSection('certifications', 'sections/certifications.html');
    loadSection('contact', 'sections/contact.html');
    
    // Wait a bit for sections to load, then initialize animations
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.education-card, .project-card, .cert-card, .skill-category, .contact-item');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    }, 100);
    
    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        let i = 0;
        heroTitle.innerHTML = '';
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

// Console welcome message
console.log(`
    If you want to collaborate, reach out to me at contact page!
    Just fill the form and I'll get back to you ASAP.
`);
