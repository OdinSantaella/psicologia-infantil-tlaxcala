import { toggleMobileMenu, initMobileMenu } from './menu.js';
import { initSmoothScrolling, initScrollReveal } from './scroll.js';
import { initHeaderScrollEffect } from './header.js';
import { initButtonEffects } from './buttons.js';
import { initPerformanceOptimizations } from './performance.js';

// Detecta soporte WebP y agrega clase al HTML
function detectWebPSupport() {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
        if (webP.height != 2) {
            document.documentElement.classList.add('no-webp');
        }
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

// Ejecutar detección WebP inmediatamente (antes de DOMContentLoaded)
detectWebPSupport();

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScrolling();
    initScrollReveal();
    initHeaderScrollEffect();
    initButtonEffects();
    initPerformanceOptimizations();
});
