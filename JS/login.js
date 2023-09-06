const userNameEL = document.querySelector('.userName');
const passwordEL = document.querySelector('.password');
const errorEl = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (userNameEL.value === '' || passwordEL.value === '') {
    errorEl.textContent = 'Please fill out all fields';
    setTimeout(() => {
      errorEl.textContent = '';
    }, 5000);
  } else {
    localStorage.setItem('user', userNameEL.value);
    location.href = 'dashboard.html';
  }
});
