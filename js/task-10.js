function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const inputRef = createBtnRef.previousElementSibling;
const targetDiv = document.querySelector('#boxes');

function stringMaker() {
  let size = 30;
  let string = '';

  for (let i = 1; i <= inputRef.value; i++) {
    let color = getRandomHexColor();

    string += `<div style="background-color:${color}; width:${size}px; height:${size}px;"></div>`;
    size += 10;
  }
  return string
}

createBtnRef.addEventListener('click', () => targetDiv.insertAdjacentHTML("beforeend", stringMaker()) );
destroyBtnRef.addEventListener('click', () => targetDiv.innerHTML = '')