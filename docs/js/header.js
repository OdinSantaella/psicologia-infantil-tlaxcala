export function initHeaderScrollEffect() {
    const header = document.querySelector('.header');

    function update() {
        if (window.scrollY > 100) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }

    window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
}

export function initScrollHeader() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {
            header.classList.remove('header-hidden');
            return;
        }

        if (currentScroll > lastScroll) {
            // Bajando → ocultar
            header.classList.add('header-hidden');
        } else {
            // Subiendo → mostrar
            header.classList.remove('header-hidden');
        }

        lastScroll = currentScroll;
    });
}