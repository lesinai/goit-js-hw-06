function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

function onButtonRandomize () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  textRef.textContent = randomColor;
}
buttonRef.addEventListener('click', onButtonRandomize);