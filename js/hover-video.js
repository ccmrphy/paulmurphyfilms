document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.hover-video');
    const playButtons = document.querySelectorAll('.play-btn'); // Select all play buttons globally
    let soundEnabled = false; // Global variable to track if sound is enabled

    workItems.forEach(item => {
        const video = item.querySelector('.film-video');
        const playBtn = item.querySelector('.play-btn');
        const image = item.querySelector('img');

        if (video && playBtn) {
            // Handle the play sound button
            playBtn.addEventListener('click', () => {
                soundEnabled = true; // Enable sound globally
                video.muted = false; // Unmute the current video
                video.play().catch(err => console.error('Error playing video:', err));
                playBtn.style.display = 'none'; // Hide the play button for all videos

                // Hide all play buttons
                playButtons.forEach(btn => {
                    btn.style.display = 'none';
                });
            });

            // Play video on hover
            item.addEventListener('mouseenter', () => {
                image.style.display = 'none';
                if (soundEnabled) {
                    video.muted = false; // Ensure sound is enabled if globally allowed
                video.play().catch(err => console.error('Error playing video:', err));
                }
            });

            // Pause and reset video on mouse leave
            item.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; // Reset the video to the beginning
                image.style.display = 'block'
            });
        }
    });
});