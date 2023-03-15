import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popup){
        super(popup)
        this._popupFoto = this._popup.querySelector('.popup__foto');
        this._popupFotoTitle = this._popup.querySelector('.popup__foto-title');
    }
    open(link, name){
        this._popupFoto.src = link;
        this._popupFotoTitle.textContent = name;
        this._popupFoto.alt = name;
        super.open();
    }
}
