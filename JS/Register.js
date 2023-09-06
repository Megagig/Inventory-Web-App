//Targeting the dom
const form = document.querySelector('form');
const fullNameEL = document.querySelector('.fullName');
const userNameEL = document.querySelector('.userName');
const emailEL = document.querySelector('.email');
const passwordEL = document.querySelector('.password');
const phoneNumberEl = document.querySelector('.phoneNumber');
const confirmPasswordEL = document.querySelector('.confirmPassword');
const errorEl = document.querySelector('.error');

// Form validation
const passwordRegX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailRegX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    fullNameEL.value === '' ||
    userNameEL.value === '' ||
    emailEL.value === '' ||
    passwordEL.value === '' ||
    phoneNumberEl.value === '' ||
    confirmPasswordEL.value === ''
  ) {
    errorEl.textContent = 'Please fill out all fields';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
  } else if (passwordEL.value !== confirmPasswordEL.value) {
    errorEl.textContent = 'Passwords do not match';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
  } else if (!Number(phoneNumberEl.value)) {
    errorEl.textContent = 'Phone Number is not valid';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
  } else if (passwordRegX.test(passwordEL.value) === false) {
    errorEl.textContent =
      'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
  } else if (emailRegX.test(emailEL.value) === false) {
    errorEl.textContent = 'Email is not valid';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
  } else {
    localStorage.setItem('user', userNameEL.value);
    location.href = 'dashboard.html'; //This is used to navigate to another page.
  }
});
