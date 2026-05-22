// Main JavaScript for Startorch Academy About Us page
// Handles clock, mobile navigation, and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Update clock every second
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    // Initial clock update
    updateClock();
    // Update every second
    setInterval(updateClock, 1000);

    // Mobile navigation toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const isHidden = mainNav.classList.contains('active');
            this.textContent = isHidden ? '☰' : '×';
        });
    }

    // Add smooth scroll to anchors if needed
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return; // Skip placeholder links

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('animate-fade-in-up');
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all major sections for fade-in animation
    document.querySelectorAll('.hero-section', '.intro-section', '.stats-strip', '.features-section', '.footer').forEach(el => {
        observer.observe(el);
    });

    // Add hover sound effect simulation (visual feedback)
    const interactiveElements = document.querySelectorAll('a, button, .feature-item, .stat-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        el.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});