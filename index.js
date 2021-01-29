const pictures = document.querySelectorAll('.picture');

pictures.forEach(p => {
  p.addEventListener('click', () => {
    removeActive();
    p.classList.add('active');
  })
})

function removeActive() {
  pictures.forEach(p => {
    p.classList.remove('active');
  })
}