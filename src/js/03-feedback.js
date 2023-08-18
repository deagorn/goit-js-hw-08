import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    email: document.querySelector('input'),
}

const STORAGE_KEY = "formData";
const saveMessege = JSON.parse(localStorage.getItem(STORAGE_KEY));

const formData = {
    email: saveMessege.email,
    message: saveMessege.message,
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 1000));

RecordingSavedForm();

function onFormSubmit(e) {
    e.preventDefault();

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
}

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function RecordingSavedForm() {

    if (saveMessege.email) {
        refs.email.value = saveMessege.email;
    } else {
        refs.email.value = '';
    }

    if (saveMessege.message) {
        refs.textarea.value = saveMessege.message;
    } else {
        refs.textarea.value = '';
    }

    
}

    