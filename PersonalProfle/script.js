const button = document.getElementById('cambiar_tema');

button.addEventListener('click', () => {
  document.body.classList.toggle('modo_oscuro');
});