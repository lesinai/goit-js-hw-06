const inputRef = document.querySelector('#name-input');
const textToShow = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    if (event.currentTarget.value === "") {
        textToShow.textContent = 'Anonimus';
        return
     }
    textToShow.textContent = event.currentTarget.value;
}
)