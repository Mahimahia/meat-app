document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // process stop

  document.getElementById('errorMessages').innerHTML = '';
  let username = document.forms['data']['username'].value;
  let email = document.forms['data']['email'].value;
  let phonenumber = document.forms['data']['phonenumber'].value;
  let comment = document.forms['data']['comment'].value;

  if (username === '') {
    showError('Name is required');
    return; // Stop processing
  }

  // Email validation
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === '') {
    showError('Email is required');
    return; // Stop processing
  } else if (!emailPattern.test(email)) {
    showError('Email format is invalid');
    return; // Stop processing
  }

  let phonePattern = /^\d{10}$/;
  if (phonenumber === '') {
      showError('Phone number is required');
      return; // Stop processing
  } else if (!phonePattern.test(phonenumber)) {
      showError('Phone number must be 10 digits');
      return; // Stop processing
  }

  if (comment === '') {
      showError('Comment is required');
      return; // Stop processing
  }
  //
  // clear form data after successful submission
  document.forms['data']['username'].value = '';
  document.forms['data']['email'].value = '';
  document.forms['data']['phonenumber'].value = '';
  document.forms['data']['comment'].value = '';
  alert('Form is valid! Your data can be Submitted');
  
});

function showError(message) {
  document.getElementById('errorMessages').innerHTML += `<p>${message}</p>`;
}

// scroll animations
ScrollReveal().reveal('.navbar', {
  duration: 1000,
  origin: 'top',
  distance: '50px',
  easing: 'ease-in-out',
  interval: 200,
  reset: true
});

ScrollReveal().reveal('.home .content', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  delay: 200,
  reset: true
});

ScrollReveal().reveal('#about .box', {
  duration: 1000,
  origin: 'left',
  distance: '100px',
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('#menu .card-2', {
  duration: 1000,
  origin: 'right',
  distance: '100px',
  easing: 'ease-in-out',
  interval: 200,
  reset: true
});

ScrollReveal().reveal('#reviews .review-box', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  interval: 200,
  reset: true
});

ScrollReveal().reveal('#contact .box1', {
  duration: 1000,
  origin: 'left',
  distance: '100px',
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('#contact .box2', {
  duration: 1000,
  origin: 'right',
  distance: '100px',
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('footer', {
  duration: 1000,
  origin: 'top',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});
