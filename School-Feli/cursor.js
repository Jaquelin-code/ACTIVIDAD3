const customCursorButtons = document.querySelectorAll('.custom-cursor-btn');

customCursorButtons.forEach(button => {
    
    button.addEventListener('mouseenter', () => {
        button.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'><circle cx=\'16\' cy=\'16\' r=\'10\' fill=\'purple\'/></svg>"), auto';
    });

    
    button.addEventListener('mouseleave', () => {
        button.style.cursor = 'default';
    });
});


function addImageHoverEffect() {
    const productImages = document.querySelectorAll('.producto img'); 

    productImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.opacity = '0.7'; 
            this.style.transform = 'scale(2.05)'; 
            this.style.transition = 'opacity 0.3s, transform 0.3s'; 
        });

        image.addEventListener('mouseout', function() {
            this.style.opacity = '1'; 
            this.style.transform = 'scale(1)'; 
        });
    });
}


