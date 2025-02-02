function initializeContactForm(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://script.google.com/macros/s/AKfycbx98uUU0Lh3WsAnELlE13c2EzRP6yTuHSvcxCSwKtt2AF_adePqXIqCG6OzEs3ct5_-mA/exec', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(response => {
            document.getElementById('responseMessage').textContent = 'Message sent successfully!';
            form.reset();
        })
        .catch(error => {
            document.getElementById('responseMessage').textContent = 'Failed to send message. Please try again.';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        initializeContactForm(form);
    }
});