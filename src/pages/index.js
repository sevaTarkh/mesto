import { Card} from '../components/Card.js';
import { config } from '../utils/Config.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js'
import { Api } from '../components/Api.js'
import '../pages/index.css'

const popupEditButton = document.querySelector('.profile__button-edit');
const nameInput = document.querySelector('.popup__field_theme_name');
const jobInput = document.querySelector('.popup__field_theme_about');
const avatarLink = document.querySelector('.popup__field_theme_avatar-link')
const formElementEdit = document.querySelector('.popup__form_theme_edit');
const profileAddButton = document.querySelector('.profile__button-add');
const profileEditAvatarButton = document.querySelector('.profile__button-avatar');
const formElementAdd = document.querySelector('.popup__form_theme_add');
const formAvatar = document.querySelector('.popup__form_theme_avatar');

const profileValiditi = new FormValidator(config, formElementEdit);
const fotoAddValiditi = new FormValidator(config, formElementAdd);
const profileAvatarValiditi = new FormValidator(config, formAvatar);
const fotoOpen = new PopupWithImage('.popup_type_foto');
const popupConfirmationDelete = new PopupWithConfirmation('.popup_type_delete')
const popupAdd = new Popup('.popup_type_add');
const popupEdit = new Popup('.popup_type_edit');
const popupAvatar = new Popup('.popup_type_avatar');


let userId;
const userInfoData = new UserInfo({
  selectorName: '.profile__title',
  selectorAbout: '.profile__subtitle',
  selectorLink: '.profile__avatar'
})

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59', 
  headers: {
  authorization: '02ee9c47-fa5a-48ae-b34f-67fc055a32ce',
  'Content-Type': 'application/json'
},
});


Promise.all([api.getInitialCards(), api.getUserInformationFromServer()])
.then(([cards, userData]) => {
  userId = userData._id;
  sectionElementAdd.renderItems(cards);
  userInfoData.setUserInfo(userData);
  userInfoData.setAvatar(userData);
})
.catch((err) => {
  console.log(err);// выведем ошибку в консоль
})


const openFoto = (link, name) => {
  fotoOpen.setEventListeners();
  fotoOpen.open(link, name);
}
const createCard = (data) => {
  const card = new Card({
    data: data,
  }, 
    '#element-template',
    userId,
    openFoto,
    {
    handleDeleteClick: (id) =>{
      popupConfirmationDelete.open();
      popupConfirmationDelete.setHandleSubmit( ()=>{
        api.deleteCard(id)
        .then(() => {
          card.deleteItem();
          popupConfirmationDelete.close();
        })
        .catch((err) => {
          console.log(err); 
        }); 
      })
    }
    },
    {
    handleAddLike: (cardId) =>{
        api.handlePutLike(cardId)
        .then((res)=>{
          card.setLikes(res)
        })
        .catch((err) => {
          console.log(err); 
        });
    },
    handleDeleteLike: (cardId)=>{
        api.handleRemoveLike(cardId)
        .then((res)=>{
          card.setLikes(res)
        })
        .catch((err) => {
          console.log(err); 
        });
       } 
    });
  const cardelement = card.generateCard();
  return cardelement;
};

const sectionElementAdd = new Section({ 
  renderer: (item) => sectionElementAdd.addItem(createCard(item))
},'.elements');





const popupWithAddForm = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (values) =>{
    const titleInput = values['name-foto']; 
    const linkInput = values['link'];
    popupWithAddForm.setButtonText('Создание...');
    api.createCardForServer(titleInput, linkInput)
    .then(res =>{
      sectionElementAdd.addItem(createCard(res));
      popupWithAddForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>{
      setTimeout(()=> popupWithAddForm.returnButtonText(), 400)
    })
  }
});
const popupWithEditForm = new PopupWithForm('.popup_type_edit',
{ 
  handleFormSubmit: (data) => {
  popupWithEditForm.setButtonText('Сохранение...')
  api.editProfileInformation(data)
  .then((data)=>{
    userInfoData.setUserInfo(data);
    popupWithEditForm.close();
  })
  .catch((err) => {
    console.log(err); 
  })
  .finally(()=>{
    setTimeout(()=> popupWithEditForm.returnButtonText(), 400)
  })
  }
}
);
const popupWithAvatar = new PopupWithForm('.popup_type_avatar', {
  handleFormSubmit: (data) =>{
    popupWithAvatar.setButtonText('Сохранение...')
    api.editProfileAvatar(data)
    .then((data)=>{
      userInfoData.setAvatar(data);
      popupWithAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>{
      setTimeout(()=> popupWithAvatar.returnButtonText(), 400)
    })
  }
})




profileAddButton.addEventListener('click', function(){
  popupAdd.open();
  formElementAdd.reset();
  fotoAddValiditi.resetValidation();
});
popupEditButton.addEventListener('click', function(){
  const data = userInfoData.getUserInfo();
  nameInput.value = data.selectorName;
  jobInput.value = data.selectorAbout;
  profileValiditi.resetValidation();
  popupEdit.open();
});
profileEditAvatarButton.addEventListener('click', function(){
  const data = userInfoData.getUserInfo();
  avatarLink.value = data.selectorLink;
  profileAvatarValiditi.resetValidation();
  popupAvatar.open();
});

profileAvatarValiditi.enableValidation();
profileValiditi.enableValidation();
fotoAddValiditi.enableValidation();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupConfirmationDelete.setEventListeners();
popupWithEditForm.setEventListeners();
popupWithAddForm.setEventListeners();
popupWithAvatar.setEventListeners();


