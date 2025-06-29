// Set dark mode by default on load
document.addEventListener('DOMContentLoaded', () => {
    document.body.setAttribute('data-theme', 'dark');
    const themeToggle = document.querySelector('.theme-toggle i');
    if (themeToggle) themeToggle.className = 'fas fa-sun';
    updateHeaderBackground();
});
        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });

        // Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle i');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeToggle.className = 'fas fa-moon';
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.className = 'fas fa-sun';
            }
            
            // Update header background after theme change
            updateHeaderBackground();
        }

        // Mobile Menu Toggle
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Smooth Scroll for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll Animations
        function revealElements() {
            const reveals = document.querySelectorAll('.fade-in');
            
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', revealElements);
        window.addEventListener('load', revealElements);

        // Contact Form
        function sendEmail(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:shahriar.azad123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client should open now.');
            
            // Reset form
            event.target.reset();
        }

        // Header scroll effect
        function updateHeaderBackground() {
            const header = document.querySelector('header');
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            
            if (window.scrollY > 100) {
                header.style.background = isDark 
                    ? 'rgba(17, 24, 39, 0.98)' 
                    : 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = isDark 
                    ? 'rgba(17, 24, 39, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)';
            }
        }

        window.addEventListener('scroll', updateHeaderBackground);

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            });
        });
