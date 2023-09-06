const login = document.querySelector('.ri-user-3-line');
const navEl = document.querySelector('.navRight');

const user = localStorage.getItem('user');

if (user) {
  navEl.style.display = 'none';
  login.style.display = 'block';
} else {
  navEl.style.display = 'block';
  login.style.display = 'none';
}

//implementing the order now button

const orderNowBtn = document.querySelector('.mainTextButton');

orderNowBtn.addEventListener('click', () => {
  if (user) {
    location.href = 'dashboard.html';
  } else {
    location.href = './login.html';
  }
});
