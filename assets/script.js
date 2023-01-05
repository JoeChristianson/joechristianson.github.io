const button = document.querySelector('.menu-button');
const dropdown = document.querySelector('.menu-dropdown');
button.addEventListener('click', () => {
    console.log("working")

  dropdown.classList.toggle('visible');
  button.classList.toggle('flipped');
});
