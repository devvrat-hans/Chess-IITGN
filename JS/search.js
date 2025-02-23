function initializeSearch() {
    const searchButton = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input[type="text"]');
    let searchCount = 0;

    // Create count display element
    const countDisplay = document.createElement('div');
    countDisplay.className = 'search-count';
    document.querySelector('.search-container').appendChild(countDisplay);

    function removeHighlights() {
        const highlights = document.querySelectorAll('.search-highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize();
        });
        countDisplay.textContent = '';
    }

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        removeHighlights();
        searchCount = 0;

        const searchableElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span, div:not(.search-container):not(.nav-container)');
        let firstMatch = null;

        searchableElements.forEach(element => {
            if (element.children.length === 0 && element.textContent.trim()) {
                const text = element.textContent;
                const lowerText = text.toLowerCase();
                
                if (lowerText.includes(query)) {
                    const regex = new RegExp(`(${query})`, 'gi');
                    const matches = text.match(regex);
                    if (matches) {
                        searchCount += matches.length;
                    }
                    
                    const highlightedText = text.replace(regex, '<span class="search-highlight">$1</span>');
                    element.innerHTML = highlightedText;
                    
                    if (!firstMatch) {
                        firstMatch = element;
                    }
                }
            }
        });

        // Update count display
        if (searchCount > 0) {
            countDisplay.textContent = `Found ${searchCount} match${searchCount === 1 ? '' : 'es'}`;
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            countDisplay.textContent = 'No matches found';
        }
    }

    // Event listeners remain the same
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        performSearch();
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    searchInput.addEventListener('input', () => {
        if (!searchInput.value.trim()) {
            removeHighlights();
        }
    });
}