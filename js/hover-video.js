document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.hover-video');
    let soundEnabled = false;

    workItems.forEach(item => {
        const video = item.querySelector('.film-video');
        const playBtn = item.querySelector('.play-btn');
        const image = item.querySelector('img');

        if (video && playBtn) {
            // Reset initial states
            playBtn.style.display = 'none';
            video.muted = true;

            // Handle the play sound button
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                soundEnabled = true;
                video.muted = false;
                video.play().catch(err => console.error('Error playing video:', err));
                playBtn.style.display = 'none';
            });

            // Play video on hover
            item.addEventListener('mouseenter', () => {
                image.style.display = 'none';
                video.muted = !soundEnabled;
                video.play().catch(err => console.error('Error playing video:', err));
                if (!soundEnabled) {
                    playBtn.style.display = 'block';
                }
            });

            // Pause and reset video on mouse leave
            item.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
                image.style.display = 'block';
                if (!soundEnabled) {
                    playBtn.style.display = 'none';
                }
            });
        }
    });
});