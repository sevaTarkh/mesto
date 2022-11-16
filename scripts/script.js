const popupElement = document.querySelector('.popup');
const popupEditButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');
const popupSumbitButton = document.querySelector('.popup__button-sumbit');
let profile__title = document.querySelector('.profile__title');
let profile__subtitle = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__field-name');
let jobInput = document.querySelector('.popup__field-about');
let formElement = document.querySelector('.popup__container');
const popupLikeButton = document.querySelector('.element__button-like');
let popuLikeElement = document.querySelector('.element__likebutton');

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};

const openPopup = function() {
    popupElement.classList.add('popup_is-opened');
    nameInput.value =  profile__title.textContent;
    jobInput.value =   profile__subtitle.textContent;
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    profile__title.textContent =  nameInput.value;
    profile__subtitle.textContent =  jobInput.value;
    popupSumbitButton.addEventListener('click', closePopup);
};

formElement.addEventListener('submit', formSubmitHandler);
popupCloseButton.addEventListener('click', closePopup);
popupEditButton.addEventListener('click', openPopup);



