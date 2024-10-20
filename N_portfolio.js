document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert("Message sent! I'll get back to you soon.");

    // Here you could add further code to handle the form submission,
    // like sending the data to a server.
});
