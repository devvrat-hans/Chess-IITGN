function initializeSearch() {
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
}