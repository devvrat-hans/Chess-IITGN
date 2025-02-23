document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    if (document.querySelector('.search-container')) {
        initializeSearch();
    }

    // Initialize slideshow functionality if on the home page
    if (document.querySelector('.slideshow-container')) {
        initializeSlideshow();
    }

    // Initialize lightbox functionality if on the gallery page
    if (document.querySelector('.gallery-grid')) {
        initializeLightbox();
    }

    // Initialize registration form submission if the form exists
    const form = document.getElementById('registrationForm');
    if (form) {
        initializeRegistrationForm(form);
    }

    // Initialize templates if placeholders exist
    if (document.getElementById('navbar-placeholder') || 
        document.getElementById('footer-placeholder')) {
        loadTemplates();
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('registrationForm');
        if (form) {
            initializeRegistrationForm(form);
        }
    });
});