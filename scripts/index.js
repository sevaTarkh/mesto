const popup = document.querySelector('.popup');
const popupEditElement = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_add');
const popupFotoElement = document.querySelector('.popup_type_foto');
const popupEditButton = document.querySelector('.profile__button-edit');
const popupCloseEditButton = document.querySelector('.popup__button-close_theme_edit');
const popupCloseAddButton = document.querySelector('.popup__button-close_theme_add');
const popupCloseFotoButton = document.querySelector('.popup__button-close_theme_foto');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__field_theme_name');
const jobInput = document.querySelector('.popup__field_theme_about');
const formElementEdit = document.querySelector('.popup__form_theme_edit');
const profileAddButton = document.querySelector('.profile__button-add');
const formElementAdd = document.querySelector('.popup__form_theme_add');
const titleInput = document.querySelector('.popup__field_theme_name-foto');
const linkInput = document.querySelector('.popup__field_theme_link');
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element');
const popupFoto = document.querySelector('.popup__foto');
const popupFotoName = document.querySelector('.popup__foto-title');


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function createElement(item){
  const cardElement = elementTemplate.cloneNode(true);
  const elementLikeButton = cardElement.querySelector('.element__button-like');
  const elementDeleteButton = cardElement.querySelector('.element__button-delete');
  const elementFoto = cardElement.querySelector('.element__image');
  const elementTitle = cardElement.querySelector('.element__title');
  elementDeleteButton.addEventListener('click', deleteHandler);
  elementLikeButton.addEventListener('click', likeHandler);
  elementFoto.src = item.link;
  elementFoto.alt = 'фото' + ' ' + item.name;
  elementTitle.textContent = item.name;
  elementFoto.addEventListener('click', () => openFoto(elementFoto, elementTitle));
  return cardElement;
};
const openFoto = function(foto, title){
  openPopup(popupFotoElement);
  popupFotoName.textContent = title.textContent;
  popupFoto.src = foto.src;
  popupFoto.alt = 'фото' + ' ' + title.textContent;
}
const deleteHandler = (e) => {
  e.target.closest('.element').remove();
};
const likeHandler = (e) => {
  e.target.classList.toggle('element_is-active');
};
const renderElement = (item, wrapElement) =>{
  const element = createElement(item)
  wrapElement.prepend(element);
};
initialCards.forEach(function(item){
  renderElement(item, elementsContainer);
});
const addSumbitFormHandler = (e) =>{
  e.preventDefault();
  const todo = {
    name: titleInput.value,
    link: linkInput.value
  }
  renderElement(todo, elementsContainer);
  closePopup(popupAddElement);
};

const closePopup = function(item) {
  item.classList.remove('popup_is-opened');
};
const openPopup = function(item) {
    item.classList.add('popup_is-opened');
};
const handleEditOpen = function(){
  openPopup (popupEditElement)
    nameInput.value =  profileTitle.textContent;
    jobInput.value =   profileSubtitle.textContent;
};
function editSubmitFormHandler (e) {   //отправка формы эдит
    e.preventDefault();
    profileTitle.textContent =  nameInput.value;
    profileSubtitle.textContent =  jobInput.value;
    closePopup(popupEditElement);
};
const reset = function(item){
  item.value='';
}
titleInput.addEventListener('click', () => reset(titleInput));
linkInput.addEventListener('click', () => reset(linkInput));
formElementEdit.addEventListener('submit', editSubmitFormHandler);// отправка edit формы 
popupCloseEditButton.addEventListener('click', () => closePopup(popupEditElement)); // закрытие формы эдит 
popupEditButton.addEventListener('click', handleEditOpen);// открытие формы эдит
profileAddButton.addEventListener('click', () => openPopup(popupAddElement));// открытие формы адд
popupCloseAddButton.addEventListener('click', () => closePopup(popupAddElement));//закрытие формы эдит
formElementAdd.addEventListener('submit', addSumbitFormHandler);
popupCloseFotoButton.addEventListener('click', () => closePopup(popupFotoElement));