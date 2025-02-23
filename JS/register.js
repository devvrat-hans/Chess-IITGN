function initializeRegistrationForm(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        
        // Create JSON data instead of URL-encoded
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Send to Google Sheets
        fetch('https://script.google.com/macros/s/AKfycbzG2wO7XUb9FvRwCCed9hBnA9E-PmX0-oB9Vn41D8IY7DGPBbJZ7Pfd-p8ZCgXUGg4ITw/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            document.getElementById('responseMessage').textContent = 'Registration successful!';
            document.getElementById('responseMessage').style.color = 'green';
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('responseMessage').textContent = 'Registration failed. Please try again.';
            document.getElementById('responseMessage').style.color = 'red';
        })
        .finally(() => {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
    });
}