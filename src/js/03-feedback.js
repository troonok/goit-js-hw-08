import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    button:document.querySelector('.feedback-form button')
}
const STORAGE_KEY ="feedback-form-state";
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

refs.form.addEventListener('input', throttle(saveMessage,500));
refs.form.addEventListener('submit', submitForm);

function saveMessage(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
} 

function submitForm(e){
    e.preventDefault();
    console.log(formData)
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);
}

if(localStorage.getItem(STORAGE_KEY) !== null)
    try {
        let formValue = Object.entries(formData);
        formValue.forEach(([name,value]) => {
            refs.form[name].value = value || ""
        });
    } catch (error) {
        console.log(error.name); 
        console.log(error.message);
    }
  


