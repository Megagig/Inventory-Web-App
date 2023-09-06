const user = localStorage.getItem('user');
const userNameEl = document.querySelector('.user');
userNameEl.textContent = user;

//implementation of the modal on the dashboard

const modal = document.querySelector('.navIcon');

modal.addEventListener('click', () => {
  document.querySelector('.userModal').classList.toggle('showModal'); //toggle does two functionality in js
});

document.querySelector('.backHome').addEventListener('click', () => {
  window.location.href = 'index.html';
});
if (!user) {
  window.location.href = 'index.html';
}

//implementation of the logout button
const logout = document.querySelector('.modalFoot');

logout.addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location.href = 'index.html';
});
