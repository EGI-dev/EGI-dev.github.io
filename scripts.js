// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with ID ${sectionId} not found`);
    }
}

// Function to return to the home page at a desired section
function goToMainPage(sectionId) {
    window.location.href = '../index.html#'+ sectionId;
}

// Event listener for carousel images
document.querySelectorAll('.carousel-images img').forEach(image => {
    image.addEventListener('click', () => {
        const text = image.getAttribute('data-text');
        const url = image.getAttribute('data-url');
        const buttonHtml = '<br><br><button class="outline contrast" onclick="window.location.href=\'' + url + '\'">Learn More</button>';
        document.getElementById('carousel-text').innerHTML = text + buttonHtml;
    });
});
