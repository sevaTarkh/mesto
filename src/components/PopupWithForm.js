import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popup, {handleFormSubmit}){
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__field');
        this._button = this._formElement.querySelector('.popup__button-submit');
        this._buttonTextContent = this._button.textContent
    }
    _getInputValues(){
        const formValues = {};
        this._inputList.forEach((input) =>{
            formValues[input.name]= input.value;
        });
        return formValues;
    }
    setButtonText(text){
        this._button.textContent = text;
    }
    returnButtonText(){
        this._button.textContent = this._buttonTextContent
    }
    close(){
        super.close();
        this._formElement.reset();
    }
    setEventListeners(){
        super.setEventListeners();
         this._formElement.addEventListener('submit', (e) =>{
             e.preventDefault();
             this._handleFormSubmit(this._getInputValues());
         }) 
    }
}