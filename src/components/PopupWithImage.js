import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selector){
        super(selector)
        this._popupFoto = this._selector.querySelector('.popup__foto');
        this._popupFotoTitle = this._selector.querySelector('.popup__foto-title');
    }
    open(link, name){
        this._popupFoto.src = link;
        this._popupFotoTitle.textContent = name;
        this._popupFoto.alt = name;
        super.open();
    }
}
