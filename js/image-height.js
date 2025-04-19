// Function to match image heights to paragraph heights
function matchImageHeights() {
    const aboutContents = document.querySelectorAll('.about-content');
    
    aboutContents.forEach(content => {
        const textElement = content.querySelector('.about-text');
        const imageElement = content.querySelector('.about-image img');
        
        if (textElement && imageElement) {
            // Get the height of the text element
            const textHeight = textElement.offsetHeight;
            
            // Set the image height to match the text height
            imageElement.style.height = textHeight + 'px';
            imageElement.style.objectFit = 'cover';
        }
    });
}

// Function to ensure images are properly sized
function ensureImagesLoaded() {
    // First attempt - run immediately
    matchImageHeights();
    
    // Second attempt - after a short delay
    setTimeout(matchImageHeights, 100);
    
    // Third attempt - after images should be loaded
    setTimeout(matchImageHeights, 500);
    
    // Final attempt - after everything should be loaded
    setTimeout(matchImageHeights, 1000);
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initial run
    ensureImagesLoaded();
    
    // Also run when window is fully loaded
    window.addEventListener('load', matchImageHeights);
    
    // Run on window resize
    window.addEventListener('resize', matchImageHeights);
}); 