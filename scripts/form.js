const rangevalue = document.getElementById('rangevalue');
const range = document.getElementById('r');

const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password_retype');
const message = document.querySelector('#message');

const submit = document
  .querySelector('#submitBtn')
  .addEventListener('click', checkSame);

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}

// PASSWORD CHECK
function checkSame() {
  if (pass.value !== pass2.value) {
    message.textContent = 'PASSWORDS DO NOT MATCH';
    message.style.visibility = 'show';
  } else {
    message.style.display = none;
  }
}
