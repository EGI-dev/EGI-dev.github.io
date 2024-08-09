// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with ID ${sectionId} not found`);
    }
}

// Event listener for carousel images
document.querySelectorAll('.carousel-images img').forEach(image => {
    image.addEventListener('click', () => {
        const text = image.getAttribute('data-text');
        document.getElementById('carousel-text').textContent = text;
    });
});
