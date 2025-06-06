document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.info-card__text');

    // Початковий стан: невидимий і трохи знизу
    texts.forEach((text) => {
        gsap.set(text, { opacity: 0, y: 40 });
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                    });
                } else {
                    gsap.to(entry.target, {
                        opacity: 0,
                        y: 40,
                        duration: 0.5,
                        ease: 'power2.in',
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    texts.forEach((text) => observer.observe(text));
});
