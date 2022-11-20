const popupElement = document.querySelector('.popup');
const popupEditButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');
const profile__title = document.querySelector('.profile__title');
const profile__subtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.form-item_theme_name');
const jobInput = document.querySelector('.form-item_theme_about');
const formElement = document.querySelector('.popup__form');

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
    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);
popupCloseButton.addEventListener('click', closePopup);
popupEditButton.addEventListener('click', openPopup);



