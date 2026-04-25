document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.hover-video .media-container');
    const timers = new Map();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const container = entry.target;
            const video = container.querySelector('.film-video');
            const muteBtn = container.querySelector('.play-btn');
            const image = container.querySelector('img');

            if (entry.isIntersecting) {
                const timer = setTimeout(() => {
                    image.style.display = 'none';
                    video.style.opacity = '1';
                    video.play().catch(() => {});
                    muteBtn.style.opacity = '1';
                }, 1000);
                timers.set(container, timer);
            } else {
                if (timers.has(container)) {
                    clearTimeout(timers.get(container));
                    timers.delete(container);
                }
                video.pause();
                video.currentTime = 0;
                video.muted = true;
                video.style.opacity = '0';
                image.style.display = 'block';
                muteBtn.style.opacity = '0';
                setIcon(muteBtn, true);
            }
        });
    }, { threshold: 0.6 });

    containers.forEach(container => {
        const video = container.querySelector('.film-video');
        const muteBtn = container.querySelector('.play-btn');

        if (!video || !muteBtn) return;

        video.muted = true;
        setIcon(muteBtn, true);
        observer.observe(container);

        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            video.muted = !video.muted;
            setIcon(muteBtn, video.muted);
        });

        video.addEventListener('ended', () => {
            video.style.opacity = '0';
            video.muted = true;
            image.style.display = 'block';
            muteBtn.style.opacity = '0';
            setIcon(muteBtn, true);
        });
    });

    function setIcon(btn, muted) {
        const icon = btn.querySelector('i');
        icon.className = muted ? 'fas fa-volume-xmark' : 'fas fa-volume-high';
    }
});
