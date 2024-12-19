// JavaScript to handle form submission and display confirmation message
document.getElementById('contact-btn').addEventListener('click', function() {
    var form = document.getElementById('contact-form');
    var confirmationMessage = document.getElementById('confirmation-message');
    
    form.style.display = 'block';  // Show the contact form if it's hidden initially

    // Handle form submission
    document.querySelector('#contact-form form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the actual form submission (page reload)

        // Hide the form after submission
        form.style.display = 'none';

        // Show the confirmation message
        confirmationMessage.style.display = 'block';

        // Optionally, you can add a timeout to hide the message after some time if needed
        setTimeout(function() {
            confirmationMessage.style.display = 'none'; // Hide the message after 5 seconds
        }, 5000); // Message will disappear after 5 seconds
    });
});

// Close the contact form and show the home section when the Home button is clicked
document.querySelector('nav ul li a[href="home.html"]').addEventListener('click', function() {
    var form = document.getElementById('contact-form');
    var confirmationMessage = document.getElementById('confirmation-message');
    
    // Hide the contact form and confirmation message when Home is clicked
    form.style.display = 'none';
    confirmationMessage.style.display = 'none';
});
