export class Card{
    constructor(cards, templateSelector, openPopupImage){
        this._name = cards.name;
        this._img = cards.link;
        this._templateSelector = templateSelector;
        this._openPopupImage = openPopupImage;
    }
    _getTemplate() {
        const templateElement = document
            .querySelector(this._templateSelector)
            .content.querySelector('.element')
            .cloneNode(true);

        return templateElement;
    }
    createCard(){
        this._element = this._getTemplate();
        this._elementFoto = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementLikeButton = this._element.querySelector('.element__button-like');
        this._elementDeleteButton = this._element.querySelector('.element__button-delete');

        this._setEventListeners();
    
        this._elementFoto.src = this._img;
        this._elementTitle.textContent = this._name;
        this._elementFoto.alt = this._name;

        return this._element;
    };
    _toggleLike(e){
        e.target.classList.toggle('element_is-active');
    }
    _deleteCard(e){
        e.target.closest('.element').remove();
    }
    _handleImageClick(){
        this._openPopupImage(this._img, this._name);
    }
    _setEventListeners(){
        this._elementLikeButton.addEventListener('click', (e) =>{
            this._toggleLike(e);
        });
        this._elementDeleteButton.addEventListener('click', (e) =>{
            this._deleteCard(e);
        });
        this._elementFoto.addEventListener('click', () =>{
            this._handleImageClick();
        });
    }
};