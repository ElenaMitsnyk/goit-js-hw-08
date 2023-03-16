import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const {email, message} = form.elements;
const KEY = "feedback-form-state";

loadingPage ();
function loadingPage () {
    const savedDate = localStorage.getItem(KEY);
    if(!savedDate) return;

    try {
    const putDate = JSON.parse(savedDate);
    email.value = putDate.email;
    message.value = putDate.value;
    } catch (error) {
        console.log(`${error.name}`)
    }
}
const onInputForm = () => {
    const newForm = {email: email.value, message: message.value}

    try {
    localStorage.setItem(KEY, JSON.stringify(newForm))
    } catch (error) {
        console.log(`${error.name}`)
    }
}

const onSubmitForm = event =>{
    event.preventDefault();
    try {
    const savedFormDate = JSON.parse(localStorage.getItem(KEY));//тут отримуємо дані за ключем, і виводитиме збережені дані у вигляді обєкта
    localStorage.removeItem(KEY);
    form.reset() 
    } catch (error) {
    console.log(`${error.name}`) } }
    form.addEventListener("submit", onSubmitForm)

    form.addEventListener('input', throttle(onInputForm, 500))
