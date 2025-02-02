function initializeLightbox() {
    function openLightbox() {
        document.getElementById('lightbox').style.display = 'block';
    }

    function closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
    }

    let lightboxSlideIndex = 1;
    showLightboxSlides(lightboxSlideIndex);

    function changeLightboxSlide(n) {
        showLightboxSlides(lightboxSlideIndex += n);
    }

    function currentLightboxSlide(n) {
        showLightboxSlides(lightboxSlideIndex = n);
    }

    function showLightboxSlides(n) {
        let i;
        let slides = document.getElementsByClassName('lightbox-slide');
        if (n > slides.length) {lightboxSlideIndex = 1}
        if (n < 1) {lightboxSlideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[lightboxSlideIndex-1].style.display = 'block';
    }

    // Expose lightbox functions to global scope
    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    window.changeLightboxSlide = changeLightboxSlide;
    window.currentLightboxSlide = currentLightboxSlide;
}