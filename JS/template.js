document.addEventListener('DOMContentLoaded', () => {
    loadTemplates();
});

async function loadTemplates() {
    try {
        // Load navbar
        const navbarResponse = await fetch('./templates/shared/navbar.html');
        const navbarHtml = await navbarResponse.text();
        document.getElementById('navbar-placeholder').innerHTML = navbarHtml;

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });

        // Load footer
        const footerResponse = await fetch('./templates/shared/footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;

        // Initialize components
        initializeTemplates();

    } catch (error) {
        console.error('Error loading templates:', error);
        // Show fallback content
        document.getElementById('navbar-placeholder').innerHTML = `
            <nav>
                <div class="logo">
                    <a href="index.html"><img src="Images/IITGN Chess Club Logo.png" alt="Logo"></a>
                </div>
                <div class="nav-links">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                    </ul>
                </div>
            </nav>`;
        
        document.getElementById('footer-placeholder').innerHTML = `
            <footer>
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                        </ul>
                    </div>
                </div>
            </footer>`;
    }
}

function initializeTemplates() {
    const searchButton = document.querySelector('.search-container button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchInput = document.querySelector('.search-container input[type="text"]');
            if (searchInput && searchInput.value.trim()) {
                // Trigger search functionality
                if (typeof initializeSearch === 'function') {
                    initializeSearch();
                }
            }
        });
    }
}