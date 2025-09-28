// ========================================
// MOBILE MENU FUNCTIONALITY
// ========================================

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// ========================================
// DOM CONTENT LOADED - INIT FUNCTIONS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Close mobile menu when clicking on a navigation link
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const navMenu = document.getElementById('navMenu');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const header = document.querySelector('.header');
        
        // If click is outside header and menu is open
        if (!header.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    // Smooth scroll for internal links (optional)
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
    
    console.log('🚀 JavaScript loaded successfully');
});

// ========================================
// ADDITIONAL FUNCTIONS (FUTURE)
// ========================================

// Here you can add more functions when needed:
// - Form validation
// - Scroll animations
// - Analytics tracking
// etc.