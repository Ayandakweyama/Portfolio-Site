const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Extract form data
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  // Validate form inputs
  if (!firstName || !lastName || !email || !subject || !message) {
    alert('Please fill in all the fields.');
    return;
  }

  // Prepare the email body
  const emailBody = `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
  `;

  // Send email using an email API or server-side script
  fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Ensures the server can parse the JSON data
    },
    body: JSON.stringify({
      recipient: 'ayandakweyamavezi5@gmail.com',
      subject: 'Website Contact Form Submission',
      body: emailBody,
    }),
  })
    .then(response => {
      if (response.ok) {
        alert('Email sent successfully!');
        form.reset();
      } else {
        alert('Error sending email. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending email: ' + error.message);
    });
});
