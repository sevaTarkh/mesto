import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(selector, handleFormSubmit){
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = selector.querySelector('.popup__form');
        
    }
    _getInputValues(){
        this._inputList = this._formElement.querySelectorAll('.popup__field');
        this._formValue = {};
        this._inputList.forEach((input) =>{
            this._formValue[input.name]= input.value;
        });
        return this._formValue;
    }
    setEventListeners(){
        super.setEventListeners();
         this._formElement.addEventListener('submit', (e) =>{
             e.preventDefault();
             console.log(this._getInputValues())
             this._handleFormSubmit(this._getInputValues())
         }) 
    }
    close(){
        super.close();
        this._formElement.reset();
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