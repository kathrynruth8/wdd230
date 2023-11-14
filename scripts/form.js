const rangevalue = document.getElementById('rangevalue');
const range = document.getElementById('r');

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}

const password = document.querySelector('#password');
const retypePassword = document.querySelector('#password_retype');
const message = document.querySelector('#message');

const submit = document
  .querySelector('.submitBtn')
  .addEventListener('click', checkSame);

// PASSWORD CHECK
function checkSame() {
  if (password.value !== retypePassword.value) {
    message.textContent = 'PASSWORDS DO NOT MATCH';
    message.style.visibility = 'show';
  } else {
    message.style.display = none;
  }
}
