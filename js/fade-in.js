document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    let lastScrollY = window.scrollY;
    let isScrollingDown = true;

    // Track scroll direction
    window.addEventListener('scroll', () => {
        isScrollingDown = window.scrollY > lastScrollY;
        lastScrollY = window.scrollY;
    });

    const appearOptions = {
        threshold: 0,
        rootMargin: '100px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const portfolioSection = entry.target.closest('.portfolio');
            
            if (entry.isIntersecting) {
                // Start the animation
                entry.target.classList.add('show');
                
                // Only handle work items for portfolio section
                if (portfolioSection) {
                    const workItems = portfolioSection.querySelectorAll('.work-item');
                    workItems.forEach(item => {
                        item.classList.add('show');
                    });
                }
            } else {
                // Remove show class from the element
                entry.target.classList.remove('show');
                
                // Only handle work items for portfolio section
                if (portfolioSection) {
                    const workItems = portfolioSection.querySelectorAll('.work-item');
                    workItems.forEach(item => {
                        item.classList.remove('show');
                    });
                }
            }
        });
    }, appearOptions);

    // Initial check for elements in viewport
    faders.forEach(fader => {
        const rect = fader.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            fader.classList.add('show');
            
            // Only handle work items for portfolio section
            const portfolioSection = fader.closest('.portfolio');
            if (portfolioSection) {
                const workItems = portfolioSection.querySelectorAll('.work-item');
                workItems.forEach(item => {
                    item.classList.add('show');
                });
            }
        }
        appearOnScroll.observe(fader);
    });
});