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
