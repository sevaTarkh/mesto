export class FormValidator{
    constructor(config, formElement){
        this._formSelector = config.formSelector,
        this._inputSelector = config.inputSelector,
        this._submitButtonSelector = config.submitButtonSelector,
        this._inactiveButtonClass = config.inactiveButtonClass,
        this._inputErrorClass = config.inputErrorClass,
        this._errorClass = config.errorClass,
        this._formElement = formElement;
        this._inputs = [...this._formElement.querySelectorAll(this._inputSelector)];
        this._button = this._formElement.querySelector(this._submitButtonSelector);
    }
     _removeError = (error, input) => {
        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
        error.textContent='';
    };
     _addError = (error, input) => {
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
        error.textContent=input.validationMessage;
    };
     _enableButton() {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled= '';
    };
     _disableButton() {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled= 'disabled';
    };
     _checkInputValidity = function(input){
        const error = this._formElement.querySelector(`#${input.id}-error`);
        if(input.validity.valid){
            this._removeError(error, input);
        }else{
            this._addError(error, input);
        }
    };
     toggleButtonState = () => {
        const isFormValid = this._inputs.every(input => input.validity.valid);
        if(isFormValid){
            this._enableButton();
        }else{
            this._disableButton();
        };
    };
     enableValidation = () => {
        const forms = [...document.querySelectorAll(this._formSelector)];
        forms.forEach(form =>{
            form.addEventListener('submit', (e) =>{
                e.preventDefault();
            });
            this._inputs.forEach(input =>{
                input.addEventListener('input', () => {
                    this._checkInputValidity(input);
                    this.toggleButtonState();
                });
            });
        });
    };
}

// const removeError = (input, error, config) => {
//     error.classList.remove(config.errorClass);
//     input.classList.remove(config.inputErrorClass);
//     error.textContent='';
// };
// const addError = (input, error, config) => {
//     error.classList.add(config.errorClass);
//     input.classList.add(config.inputErrorClass);
//     error.textContent=input.validationMessage;
// };
// const enableButton = (button, config) => {
//     button.classList.remove(config.inactiveButtonClass);
//     button.disabled= '';
// };
// const disableButton = (button, config) => {
//     button.classList.add(config.inactiveButtonClass);
//     button.disabled= 'disabled';
// };
// const checkInputValidity = function(input, config){
//     const error = document.querySelector(`#${input.id}-error`);
//     if(input.validity.valid){
//         removeError(input, error, config);
//     }else{
//         addError(input, error, config);
//     }
// };
// const toggleButtonState = (inputs, button, config) =>{
//     const isFormValid = inputs.every(input => input.validity.valid);
//     if(isFormValid){
//         enableButton(button, config);
//     }else{
//         disableButton(button, config);
//     };
// };
// const enableValidation = (config) => {
//     const forms = [...document.querySelectorAll(config.formSelector)];
//     forms.forEach(form =>{
//         const inputs = [...form.querySelectorAll(config.inputSelector)];
//         const button = form.querySelector(config.submitButtonSelector);
//         inputs.forEach(input =>{
//             input.addEventListener('input', () => {
//                 checkInputValidity(input, config);
//                 toggleButtonState(inputs, button, config);
//             });
//         });
//     });
// };
// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__field',
//     submitButtonSelector: '.popup__button-submit',
//     inactiveButtonClass: 'popup__button_invalid',
//     inputErrorClass: 'popup__field_type_error',
//     errorClass: 'popup__error_visible'
// });
