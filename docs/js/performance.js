export function initPerformanceOptimizations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) document.body.classList.add('reduce-motion');

    const heavyElements = document.querySelectorAll('.authority-item, .process-step, .testimonial');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-viewport');
            else entry.target.classList.remove('in-viewport');
        });
    }, { rootMargin: '50px' });

    heavyElements.forEach(el => observer.observe(el));
}