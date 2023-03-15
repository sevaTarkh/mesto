import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup{
constructor(popup){
    super(popup)
    this._form = this._popup.querySelector('.popup__form_theme_delete');
}
setHandleSubmit(callback){
    this._handleConfirmationSubmit = callback;
}
setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (e) =>{
        e.preventDefault();
        this._handleConfirmationSubmit();
    })
}
}