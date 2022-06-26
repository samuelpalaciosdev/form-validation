const alertMsg = document.querySelector('#alertMessage');
const form = document.querySelector('#myForm');
const inputs = document.querySelectorAll('#myForm input');

// Regex Formats

const expressions = {
  name: /^[a-zA-Z]+$/,
  card: /^\d{13,16}$/,
  cvc: /^\d{4}$/,
  amount: /\d+/,
  city: /[a-zA-Z]+/,
  postalCode: /^\d{4,8}$/,
};

const fields = {
  firstName: false,
  lastName: false,
  card: false,
  cvc: false,
  amount: false,
  city: false,
  postalCode: false,
};

const validateForm = (e) => {
  switch (e.target.name) {
    case 'cardnumber':
      validateInput(expressions.card, e.target, 'card');
      break;
    case 'cvc':
      validateInput(expressions.cvc, e.target, 'cvc');
      break;

    case 'amount':
      validateInput(expressions.amount, e.target, 'amount');
      break;
    case 'firstName':
      validateInput(expressions.name, e.target, 'firstName');
      break;
    case 'lastName':
      validateInput(expressions.name, e.target, 'lastName');
      break;
    case 'city':
      validateInput(expressions.city, e.target, 'city');
      break;
    case 'postalcode':
      validateInput(expressions.postalCode, e.target, 'postalCode');
      break;
  }
};

const validateInput = (expression, input, field) => {
  // If input it's like the regex, remove alert and red background
  if (expression.test(input.value)) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    input.nextElementSibling.style.display = 'none';
    input.classList.remove('bg-danger', 'bg-opacity-25');
    fields[field] = true;
  } else {
    // // If input it's not like the regex, add alert and red background
    input.classList.add('bg-danger', 'bg-opacity-25');
    input.classList.add('is-invalid');
    input.nextElementSibling.style.display = 'inline';
    fields[field] = false;
  }
};

// For each input pass the validateForm function

inputs.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('blur', validateForm);
});
