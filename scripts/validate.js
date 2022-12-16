const removeError = (input, error, config) => {
    error.classList.remove(config.errorClass);
    input.classList.remove(config.inputErrorClass);
    error.textContent='';
};
const addError = (input, error, config) => {
    error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
    error.textContent=input.validationMessage;
};
const enableButton = (button, config) => {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled= '';
};
const disableButton = (button, config) => {
    button.classList.add(config.inactiveButtonClass);
    button.disabled= 'disabled';
};
const checkInputValidity = function(input, config){
    const error = document.querySelector(`#${input.id}-error`);
    if(input.validity.valid){
        removeError(input, error, config);
    }else{
        addError(input, error, config);
    }
};
const toggleButtonState = (inputs, button, config) =>{
    const isFormValid = inputs.every(input => input.validity.valid);
    if(isFormValid){
        enableButton(button, config);
    }else{
        disableButton(button, config);
    };
};
const enableValidation = (config) => {
    const forms = [...document.querySelectorAll(config.formSelector)];
    forms.forEach(form =>{
        const inputs = [...form.querySelectorAll(config.inputSelector)];
        const button = form.querySelector(config.submitButtonSelector);
        inputs.forEach(input =>{
            input.addEventListener('input', () => {
                checkInputValidity(input, config);
                toggleButtonState(inputs, button, config);
            });
        });
    });
};
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__error_visible'
});