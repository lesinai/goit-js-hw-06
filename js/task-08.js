const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', onFormConfirm);
function onFormConfirm(event) {
    event.preventDefault()
         const { email, password } = event.currentTarget.elements;
     if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
     }
    const userData = {
    email: email.value,
    password: password.value, 
    }
    console.log(userData);
    event.target.reset();
}
