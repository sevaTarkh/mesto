import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selector){
        super(selector)
    }
    open(link, name){
        const popupFoto = document.querySelector('.popup__foto'); 
        const popupFotoTitle =  document.querySelector('.popup__foto-title');
        popupFoto.src = link;
        popupFotoTitle.textContent = name;
        popupFoto.alt = name;
        super.open();
    }
}
