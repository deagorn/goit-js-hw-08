import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    email: document.querySelector('input'),
}

const formData = {
    email: '',
    message: '',
};

// refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 1000));

// refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

RecordingSavedForm();

// function onFormSubmit(e) {
//     e.preventDefault();
//     console.log("Sens form");
//     e.target.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }


// function onTextareaInput(e) {
//     const message = e.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
// }

function onInput(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
}

function RecordingSavedForm() {
    const saveMessege = JSON.parse(localStorage.getItem("formData"));
    console.log(saveMessege);

    if (saveMessege.email) {
        refs.email.value = saveMessege.email;
    }
    if (saveMessege.message) {
        refs.textarea.value = saveMessege.message;
} }
    


