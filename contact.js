document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your public key
    emailjs.init("BJjf8BB_SPYaOX3Ct"); // Replace with your EmailJS public key

    // Add event listener to the form submit
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Send email using EmailJS
        emailjs.sendForm('service_u8s6aah', 'template_41d20wb', this)
            .then(function () {
                alert('Message sent successfully!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    });
});


// service_u8s6aah 
//  template_41d20wb 
//   BJjf8BB_SPYaOX3Ct