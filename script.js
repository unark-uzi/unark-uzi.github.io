document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted! This is where you can handle form submissions.');
    });
});
