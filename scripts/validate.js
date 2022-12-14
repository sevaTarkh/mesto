const checkInputValidity = function(input, config){
    const error = document.querySelector(`#${input.id}-error`);
    if(input.validity.valid){
        error.classList.remove(config.errorClass);
        input.classList.remove(config.inputErrorClass);
        error.textContent='';
    }else{
        error.classList.add(config.errorClass);
        input.classList.add(config.inputErrorClass);
        error.textContent=input.validationMessage;
}
};
const toggleButton = (inputs, button, config) =>{
    const isFormValid = inputs.every(input => input.validity.valid);
    if(isFormValid){
        button.classList.remove(config.inactiveButtonClass);
        button.disabled= '';
    }else{
        button.classList.add(config.inactiveButtonClass);
        button.disabled= 'disabled';
    };
};
const enableValidation = (config) => {
    const forms = [...document.querySelectorAll(config.formSelector)];
    forms.forEach(form =>{
        const inputs = [...form.querySelectorAll(config.inputSelector)];
        const button = form.querySelector(config.submitButtonSelector);
        form.addEventListener('submit', (e) =>{
            e.preventDefault()
        });
        inputs.forEach(input =>{
            input.addEventListener('input', () => {
                checkInputValidity(input, config);
                toggleButton(inputs, button, config);
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