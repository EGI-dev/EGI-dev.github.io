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

// Event listener for carousel images with text info
document.querySelectorAll('.carousel-images-text img').forEach(image => {
    image.addEventListener('click', () => {
        const text = image.getAttribute('data-text');
        const carouselTextContainer = image.closest('.carousel-container').querySelector('.carousel-text');
        carouselTextContainer.textContent = text ;
    });
});

// Event listener for carousel images with learn more button redirecting to a new page
document.querySelectorAll('.carousel-images-button img').forEach(image => {
    image.addEventListener('click', () => {
        const text = image.getAttribute('data-text');
        const url = image.getAttribute('data-url');
        const carouselTextContainer = image.closest('.carousel-container').querySelector('.carousel-text');
        const buttonHtml = '<br><br><button class="outline contrast" onclick="window.location.href=\'' + url + '\'">Learn More</button>';
        carouselTextContainer.innerHTML = text + buttonHtml;
    });
});
