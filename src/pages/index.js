import { Card} from '../components/Card.js';
import { initialCards } from '../components/Cards.js';
import { config } from '../components/Config.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import '../pages/index.css'

const popupEditElement = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_add');
const popupFotoElement = document.querySelector('.popup_type_foto');
const popupEditButton = document.querySelector('.profile__button-edit');
const nameInput = document.querySelector('.popup__field_theme_name');
const jobInput = document.querySelector('.popup__field_theme_about');
const formElementEdit = document.querySelector('.popup__form_theme_edit');
const profileAddButton = document.querySelector('.profile__button-add');
const formElementAdd = document.querySelector('.popup__form_theme_add');
const elementsContainer = document.querySelector('.elements');


const profileValiditi = new FormValidator(config, formElementEdit);
const fotoAddValiditi = new FormValidator(config, formElementAdd);
const profileValiditiOpen = new FormValidator(config, formElementEdit);
const fotoAddValiditiOpen = new FormValidator(config, formElementAdd);
const popupAdd = new Popup(popupAddElement);
const popupEdit = new Popup(popupEditElement);
const userInfoData = new UserInfo({
  name: '.profile__title',
  about: '.profile__subtitle'
})


function  openFoto(link, name) {
  const fotoOpen = new PopupWithImage(popupFotoElement);
  fotoOpen.setEventListeners();
  const popupFotoOpen = fotoOpen.open(link, name);
  return popupFotoOpen;
};
const renderElement = (item) =>{
  const card = new Card(item, '#element-template', openFoto);
  const cardelement = card.createCard();
  return cardelement;
};
const sectionElementAdd = new Section({
  items: initialCards, 
  renderer: (item) => sectionElementAdd.addItem(renderElement(item))
}, elementsContainer);
sectionElementAdd.renderItems()


const editSubmitFormHandler = (values) => {  
  userInfoData.setUserInfo(values); 
  popupEdit.close();
};
const addSumbitFormHandler = (values) =>{
  console.log(values)
  const titleInput = values['name-foto'];
  const linkInput = values['link'];
  const renderElementAdd = {
    name: titleInput,
    link: linkInput
  }
  elementsContainer.prepend(renderElement(renderElementAdd));
  popupAdd.close();
};
const popupWithAddForm = new PopupWithForm(popupAddElement, addSumbitFormHandler);
const popupWithEditForm = new PopupWithForm(popupEditElement, editSubmitFormHandler);



profileAddButton.addEventListener('click', function(){
  popupAdd.open();
  formElementAdd.reset();
  fotoAddValiditiOpen.resetValidation();
});
popupEditButton.addEventListener('click', function(){
  const {name, about} = userInfoData.getUserInfo(); 
  nameInput.value = name;
  jobInput.value = about;
  profileValiditiOpen.resetValidation();
  popupEdit.open();
});


profileValiditi.enableValidation();
fotoAddValiditi.enableValidation();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupWithEditForm.setEventListeners();
popupWithAddForm.setEventListeners();

