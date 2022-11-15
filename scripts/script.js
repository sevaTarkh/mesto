const popupElement = document.querySelector('.popup');
const popupEditButton = document.querySelector('.button__edit');
const popupCloseButton = document.querySelector('.button__close');
const popupSumbitButton = document.querySelector('.button__sumbit');
let profile__title = document.querySelector('.profile__title');
let profile__subtitle = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__field1');
let jobInput = document.querySelector('.popup__field2');
let formElement = document.querySelector('.popup__container');
const popupLikeButton = document.querySelector('.button__like');
let popuLikeElement = document.querySelector('.element__likebutton');


//const likePopup = function() {
 //   popuLikeElement.classList.add('element_is-active');
//};
//const disLikePopup =function(){
  //  popuLikeElement.classList.remove('element_is-active');
//}
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
//popupLikeButton.addEventListener('click', disLikePopup);
//popupLikeButton.addEventListener('click', likePopup);


