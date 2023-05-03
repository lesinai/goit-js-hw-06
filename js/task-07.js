const changerRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
function hendlerFontChanger(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`
}
changerRef.addEventListener('change', hendlerFontChanger);  