export function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button, .hero-cta, .footer-cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position:absolute;width:100%;height:100%;
                top:0;left:0;border-radius:inherit;
                background:rgba(255,255,255,0.1);
                transform:scale(0);
                animation:ripple-effect 0.6s ease-out;
                pointer-events:none;
            `;
            this.style.position = 'relative';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple-effect {
                from { transform: scale(0); opacity: 1; }
                to { transform: scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}
