export class Card{
    constructor({data}, templateSelector, userId, handleImageClick, {handleDeleteClick}, {handleAddLike, handleDeleteLike}){
        this._card = data;
        this._name = data.name;
        this._img = data.link;
        this._cardId = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;

        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleAddLike = handleAddLike;
        this._handleDeleteLike = handleDeleteLike;
    }
    _getTemplate() {
        const templateElement = document
            .querySelector(this._templateSelector)
            .content.querySelector('.element')
            .cloneNode(true);

        return templateElement;
    }
    generateCard(){
        this._element = this._getTemplate();
        this._elementFoto = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementDeleteButton = this._element.querySelector('.element__button-delete');
        this._buttonLike = this._element.querySelector('.element__button-like');
        this._counterOfLikes = this._element.querySelector('.element-likes');

        this._setEventListeners();
        this._hideButtonDelete();
        this.setLikes(this._card);

        this._elementFoto.src = this._img;
        this._elementTitle.textContent = this._name;
        this._elementFoto.alt = this._name;

        return this._element;
    };


    deleteItem = () => {
        this._element.remove();
    }
    _hideButtonDelete(){
        if(this._userId !== this._ownerId){
            this._elementDeleteButton.remove();
            this._elementDeleteButton = null;
        }
    }


    setLikes(data){
        this._likes = data.likes;
        this._counterOfLikes.textContent = this._likes.length;
        if(this._isLikedByMe()){
            this._addlike();
        }else{
            this._deleteLike();
        }
    }
    _isLikedByMe(){
        return this._likes.find((userLike)=> userLike._id === this._userId)
    }
    _cardLike(){
        if(this._isLikedByMe()){
            this._handleDeleteLike(this._cardId);
        }else{
            this._handleAddLike(this._cardId);
        }
    }
    _addlike(){ 
        this._buttonLike.classList.add('element_is-active');
    } 
    _deleteLike(){ 
        this._buttonLike.classList.remove('element_is-active');
    }


    _setEventListeners(){
        this._buttonLike.addEventListener('click', () =>{
            this._cardLike();
        });
        this._elementDeleteButton.addEventListener('click', () =>{
            this._handleDeleteClick(this._cardId);
        });
        this._elementFoto.addEventListener('click', () =>{
            this._handleImageClick(this._img, this._name);
        });
    }
};