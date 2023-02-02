import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(selector, handleFormSubmit){
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._selector.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__field');
    }
    _getInputValues(){
        
        const formValues = {};
        this._inputList.forEach((input) =>{
            formValues[input.name]= input.value;
        });
        return formValues;
    }
    close(){
        super.close();
        this._formElement.reset();
    }
    setEventListeners(){
        super.setEventListeners();
         this._formElement.addEventListener('submit', (e) =>{
             e.preventDefault();
             console.log(this._getInputValues())
             this._handleFormSubmit(this._getInputValues());
             this.close();
         }) 
    }
}

// function editSubmitFormHandler (e) { 
//     e.preventDefault();  
//     profileTitle.textContent =  nameInput.value;
//     profileSubtitle.textContent =  jobInput.value;
//     popupEdit.close();
// };
// const addSumbitFormHandler = (e) =>{
//   e.preventDefault();
//   const renderElementAdd = {
//     name: titleInput.value,
//     link: linkInput.value
//   }
//   elementsContainer.prepend(renderElement(renderElementAdd));
//   popupAdd.close();
// };
// formElementAdd.addEventListener('submit', addSumbitFormHandler);
// formElementEdit.addEventListener('submit', editSubmitFormHandler);