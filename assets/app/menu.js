const button = document.querySelector('#menu__button')

button.addEventListener('click', funcaoCallback)

function funcaoCallback() {
  const menuNav = document.querySelector('.div-nav-links')
  menuNav.classList.toggle('nav-active')

  button.textContent === "Abrir"
    ? button.textContent = "Fechar"
    : button.textContent = "Abrir"
}