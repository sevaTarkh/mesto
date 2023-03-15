export class Popup{
    constructor(selector){
        this._popup = document.querySelector(selector);
    }
    open(){
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keyup',this._handleEscClose);
    }
    close(){
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keyup',this._handleEscClose);
    }
    _handleEscClose = (evt) =>{
        if(evt.key === 'Escape'){
            this.close();
        }
    }
    setEventListeners(){
        this._popup.querySelector('.popup__button-close').addEventListener('click', () =>{
            this.close()
        });
        this._popup.addEventListener('mousedown', (evt)=>{
            if (evt.target === evt.currentTarget) {
                this.close(); 
              }
        });
    }
}