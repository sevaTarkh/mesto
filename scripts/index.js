import { Card} from './card.js';
import { initialCards } from './cards.js';
import { config } from './config.js';
import { FormValidator } from './FormValidator.js';


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
const popupSubmitButtonAdd= document.querySelector('.popup__button-submit_theme_add')
const popupSubmitButtonEdit= document.querySelector('.popup__button-submit_theme_edit')
const popupFoto = document.querySelector('.popup__foto');
const popupFotoName = document.querySelector('.popup__foto-title');


const openFoto = (link, name) =>{
  openPopup(popupFotoElement);
  popupFoto.alt = name;
  popupFotoName.textContent = name;
  popupFoto.src = link;
};
const renderElement = (item) =>{
  const card = new Card(item, '#element-template', openFoto);
  const cardelement = card.createCard();
  return cardelement;
};
initialCards.forEach(function(item){
  elementsContainer.prepend(renderElement(item));
});


function disableButtonForm(button){ 
  button.classList.add('popup__button_invalid'); 
  button.disabled= 'disabled'; 
};
function enableButtonForm(button){
  button.classList.remove('popup__button_invalid');
  button.disabled = false;
};
function resetError(popupElements){ 
  const inputs = [...popupElements.querySelectorAll('.popup__field')]; 
  inputs.forEach((input) => { 
    const error = popupElements.querySelector(`#${input.id}-error`);  
    input.classList.remove('popup__error_visible'); 
    input.classList.remove('popup__field_type_error'); 
    error.textContent=''; 
  }); 
};


const handleEditOpen = function(){
  openPopup (popupEditElement);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  resetError(popupEditElement); 
  enableButtonForm(popupSubmitButtonEdit);
};
const handleAddOpen = function(){
  openPopup(popupAddElement);
  formElementAdd.reset();
  disableButtonForm(popupSubmitButtonAdd);
};
const openPopup = function(item) {
  item.classList.add('popup_is-opened');
  item.addEventListener('click', closePopupByClickOverlay);
  document.addEventListener('keyup', closeByPressEsc);
};
const closePopup = function(item) {
  item.classList.remove('popup_is-opened');
  item.removeEventListener('click', closePopupByClickOverlay);
  document.removeEventListener('keyup', closeByPressEsc);
};
const closeByPressEsc = function(evt){
  if(evt.key === 'Escape'){
    const openPopup = document.querySelector('.popup_is-opened');
    closePopup(openPopup);
  }
};
const closePopupByClickOverlay = function(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target); 
  }
};


function editSubmitFormHandler (e) { 
    e.preventDefault();  
    profileTitle.textContent =  nameInput.value;
    profileSubtitle.textContent =  jobInput.value;
    closePopup(popupEditElement);
};
const addSumbitFormHandler = (e) =>{
  e.preventDefault();
  const renderElementAdd = {
    name: titleInput.value,
    link: linkInput.value
  }
  elementsContainer.prepend(renderElement(renderElementAdd));
  closePopup(popupAddElement);
};


popupCloseEditButton.addEventListener('click', () => closePopup(popupEditElement));
popupCloseFotoButton.addEventListener('click', () => closePopup(popupFotoElement));
popupCloseAddButton.addEventListener('click', () => closePopup(popupAddElement));
formElementAdd.addEventListener('submit', addSumbitFormHandler);
formElementEdit.addEventListener('submit', editSubmitFormHandler);
profileAddButton.addEventListener('click', handleAddOpen);
popupEditButton.addEventListener('click', handleEditOpen);


const profileValiditi = new FormValidator(config, formElementEdit);
const fotoAddValiditi = new FormValidator(config, formElementAdd);
profileValiditi.enableValidation();
fotoAddValiditi.enableValidation();