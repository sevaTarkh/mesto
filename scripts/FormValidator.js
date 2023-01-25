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
    resetValidation = () => {
        this.toggleButtonState();
        this._inputs.forEach((input) => {
            const error = this._formElement.querySelector(`#${input.id}-error`);
            this._removeError(error, input); 
        });
    };
    _setEventListeners(){
        this._inputs.forEach(input =>{
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this.toggleButtonState();
            });
        });
    }
    enableValidation = () => {
        this._setEventListeners();
    };
};
  // function disableButtonForm(button){ 
//   button.classList.add('popup__button_invalid'); 
//   button.disabled= 'disabled'; 
// };
// function enableButtonForm(button){
//   button.classList.remove('popup__button_invalid');
//   button.disabled = false;
// };
// function resetError(popupElements){ 
//   const inputs = [...popupElements.querySelectorAll('.popup__field')]; 
//   inputs.forEach((input) => { 
//     const error = popupElements.querySelector(`#${input.id}-error`);  
//     input.classList.remove('popup__error_visible'); 
//     input.classList.remove('popup__field_type_error'); 
//     error.textContent=''; 
//   }); 
// };