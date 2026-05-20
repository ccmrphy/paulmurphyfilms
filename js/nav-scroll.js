document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('site-header');
    if (!header) return;

    const onScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});
