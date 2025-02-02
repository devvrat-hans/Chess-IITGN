function initializeSlideshow() {
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
}