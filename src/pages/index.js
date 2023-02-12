import { Card} from '../components/Card.js';
import { initialCards } from '../utils/Cards.js';
import { config } from '../utils/Config.js';
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
const fotoOpen = new PopupWithImage('.popup_type_foto');
const popupAdd = new Popup('.popup_type_add');
const popupEdit = new Popup('.popup_type_edit');
const userInfoData = new UserInfo({
  selectorName: '.profile__title',
  selectorAbout: '.profile__subtitle'
})


function  openPhoto(link, name) {
  fotoOpen.setEventListeners();
  fotoOpen.open(link, name);
};
const createCard = (item) =>{
  const card = new Card(item, '#element-template', openPhoto);
  const cardelement = card.generateCard();
  return cardelement;
};
const sectionElementAdd = new Section({
  items: initialCards, 
  renderer: (item) => sectionElementAdd.addItem(createCard(item))
},'.elements');
sectionElementAdd.renderItems()


const editSubmitFormHandler = (values) => {  
  userInfoData.setUserInfo(values); 
};
const addSumbitFormHandler = (values) =>{
  console.log(values)
  const titleInput = values['name-foto'];
  const linkInput = values['link'];
  const renderElementAdd = {
    name: titleInput,
    link: linkInput
  }
  sectionElementAdd.addItem(createCard(renderElementAdd));
};
const popupWithAddForm = new PopupWithForm('.popup_type_add', addSumbitFormHandler);
const popupWithEditForm = new PopupWithForm('.popup_type_edit', editSubmitFormHandler);



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

