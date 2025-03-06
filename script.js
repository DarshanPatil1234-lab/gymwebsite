// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const errorMessage = document.getElementById('formError');

  form.addEventListener('submit', function (event) {
    // Prevent form submission to handle validation
    event.preventDefault();

    // Clear previous error message
    errorMessage.style.display = 'none';

    // Check if all fields are filled
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      // Display an error message if any field is empty
      errorMessage.style.display = 'block';
    } else {
      // Simulate successful submission
      alert('Your message has been sent successfully!');
      form.reset(); // Reset the form fields
    }
  });
});
