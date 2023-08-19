import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    email: document.querySelector('input'),
}

const STORAGE_KEY = "formData";

const formData = {
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 1000));

RecordingSavedForm();

function onFormSubmit(e) {
    e.preventDefault();

    if (refs.email.value === '' || refs.textarea.value.trim() === '') {
        alert('Please fill all fields');
    } else {
        console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
        e.target.reset();
        localStorage.removeItem(STORAGE_KEY);
        formData.email = '';
        formData.message = '';
    }
}

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function RecordingSavedForm() {
    const saveMessege = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!saveMessege) {
        refs.email.value = '';
        formData.email = '';
        refs.textarea.value = '';
        formData.message = '';
        return;
    }

    if (saveMessege.email) {
        refs.email.value = saveMessege.email;
        formData.email = saveMessege.email;
    } else {
        refs.email.value = '';
        formData.email = '';
    }

    if (saveMessege.message) {
        refs.textarea.value = saveMessege.message;
        formData.message = saveMessege.message;
    } else {
        refs.textarea.value = '';
        formData.message = '';
    }
}

    