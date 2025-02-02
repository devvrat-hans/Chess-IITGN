document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchButton = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input[type="text"]');

    function performSearch() {
        const query = searchInput.value.toLowerCase();
        const paragraphs = document.querySelectorAll('p');
        let found = false;

        paragraphs.forEach(paragraph => {
            if (paragraph.textContent.toLowerCase().includes(query)) {
                paragraph.style.backgroundColor = 'yellow';
                found = true;
            } else {
                paragraph.style.backgroundColor = '';
            }
        });

        if (!found) {
            alert('No results found');
        }
    }

    searchButton.addEventListener('click', performSearch);

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.opacity = "0";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        setTimeout(() => {
            slides[slideIndex-1].style.opacity = "1";
        }, 50); // Delay to allow transition to take effect
        dots[slideIndex-1].className += " active";
    }

    setInterval(() => {
        plusSlides(1);
    }, 3000); // Change image every 3 seconds

    // Expose functions to global scope for dot navigation
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
});