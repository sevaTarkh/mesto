export class Popup{
    constructor(selector){
        this._selector = document.querySelector(selector);
    }
    open(){
        this._selector.classList.add('popup_is-opened');
        document.addEventListener('keyup',this._handleEscClose);
    }
    close(){
        this._selector.classList.remove('popup_is-opened');
        document.removeEventListener('keyup',this._handleEscClose);
    }
    _handleEscClose = (evt) =>{
        if(evt.key === 'Escape'){
            this.close();
        }
    }
    setEventListeners(){
        this._selector.querySelector('.popup__button-close').addEventListener('click', () =>{
            this.close()
        });
        this._selector.addEventListener('mousedown', (evt)=>{
            if (evt.target === evt.currentTarget) {
                this.close(); 
              }
        });
    }
}