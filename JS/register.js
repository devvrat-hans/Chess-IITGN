function initializeRegistrationForm(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://script.google.com/macros/s/AKfycbzG2wO7XUb9FvRwCCed9hBnA9E-PmX0-oB9Vn41D8IY7DGPBbJZ7Pfd-p8ZCgXUGg4ITw/exec', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(response => {
            document.getElementById('responseMessage').textContent = 'Registration successful!';
            form.reset();
        })
        .catch(error => {
            document.getElementById('responseMessage').textContent = 'Registration failed. Please try again.';
        });
    });
}