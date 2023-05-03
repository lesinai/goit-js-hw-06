let counterValue = 0;
const btnPlusRef = document.querySelector('[data-action="increment"]');
const btnMinusRef = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');


const counterMinus = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
      console.log(counterValue);
}
const counterPlus = () => {
    counterValue += 1;
    counter.textContent = counterValue;
    console.log(counterValue);
}
btnMinusRef.addEventListener('click', counterMinus);
btnPlusRef.addEventListener('click', counterPlus);