const popupElement = document.querySelector('.popup');
const popupEditButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__field_theme_name');
const jobInput = document.querySelector('.popup__field_theme_about');
const formElement = document.querySelector('.popup__form');

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};

const openPopup = function() {
    popupElement.classList.add('popup_is-opened');
    nameInput.value =  profileTitle.textContent;
    jobInput.value =   profileSubtitle.textContent;
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent =  nameInput.value;
    profileSubtitle.textContent =  jobInput.value;
    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);
popupCloseButton.addEventListener('click', closePopup);
popupEditButton.addEventListener('click', openPopup);



