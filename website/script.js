const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.btnlogin'); // corrected selector
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin'); // corrected class name
const iconClose = document.querySelector('.icon-close') // corrected variable name

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
