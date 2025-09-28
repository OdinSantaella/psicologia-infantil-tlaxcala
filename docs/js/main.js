import { toggleMobileMenu, initMobileMenu } from './menu.js';
import { initSmoothScrolling, initScrollReveal } from './scroll.js';
import { initHeaderScrollEffect } from './header.js';
import { initButtonEffects } from './buttons.js';
import { initPerformanceOptimizations } from './performance.js';

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScrolling();
    initScrollReveal();
    initHeaderScrollEffect();
    initButtonEffects();
    initPerformanceOptimizations();
});
