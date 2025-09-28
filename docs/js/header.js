export function initHeaderScrollEffect() {
    const header = document.querySelector('.header');

    function update() {
        if (window.scrollY > 100) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }

    window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
}
