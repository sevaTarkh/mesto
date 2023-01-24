export class Card{
    constructor(cards, templateSelector, openPopupImage){
        this._name = cards.name;
        this._img = cards.link;
        this._templateSelector = templateSelector;
        this._openPopupImage = openPopupImage;
    }
    _getTemplate() {
        const templateElement = document
            .querySelector('#element-template')
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

        this._setEventListenerForLike();
        this._setEventListenerForDelete();
        this._setEventListenerForImage();

        this._elementFoto.src = this._img;
        this._elementTitle.textContent = this._name;
        this._elementFoto.alt = this._name;


        return this._element;
    };
    _setEventListenerForLike(){
        this._elementLikeButton.addEventListener('click', (e) =>{
            e.target.classList.toggle('element_is-active');
        })
    };
    _setEventListenerForDelete(){
        this._elementDeleteButton.addEventListener('click', (e) =>{
            e.target.closest('.element').remove();
        })
    };
    _setEventListenerForImage(){
        this._elementFoto.addEventListener('click', () =>{
            this._openPopupImage(this._img, this._name);
        })
    };
}





// function createElement(item){
//     const cardElement = elementTemplate.cloneNode(true);
//     const elementLikeButton = cardElement.querySelector('.element__button-like');
//     const elementDeleteButton = cardElement.querySelector('.element__button-delete');
//     const elementFoto = cardElement.querySelector('.element__image');
//     const elementTitle = cardElement.querySelector('.element__title');

//     elementDeleteButton.addEventListener('click', deleteHandler);
//     elementLikeButton.addEventListener('click', likeHandler);
//     elementFoto.src = item.link;
//     elementFoto.alt = 'фото' + ' ' + item.name;
//     elementTitle.textContent = item.name;
//     elementFoto.addEventListener('click', () => openFoto(elementFoto, elementTitle));

//     return cardElement;
//   };
//   const renderElement = (item, wrapElement) =>{
//     const element = createElement(item)
//     wrapElement.prepend(element);
//   };
//   initialCards.forEach(function(item){
//     renderElement(item, elementsContainer);
//   });
  
//   const openFoto = function(foto, title){
//     openPopup(popupFotoElement);
//     popupFotoName.textContent = title.textContent;
//     popupFoto.src = foto.src;
//     popupFoto.alt = 'фото' + ' ' + title.textContent;
//   }
//   _deleteHandler = (e) => {
//     e.target.closest('.element').remove();
// };
// _likeHandler = (e) => {
//     e.target.classList.toggle('element_is-active');
// };