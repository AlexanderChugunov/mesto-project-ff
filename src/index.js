//-----css
import '../pages/index.css'; 
//-----image
import '../images/avatar.jpg';
import  '../images/card_1.jpg';
import  '../images/card_2.jpg';
import  '../images/card_3.jpg';
import  '../images/logo.svg'; 
import '../images/add-icon.svg'; 
import  '../images/close.svg';
import  '../images/delete-icon.svg';
import  '../images/edit-icon.svg'; 
import  '../images/like-active.svg';
import  '../images/like-inactive.svg';
//-----js exports
import initialCards from '../src/cards.js';
import {addNewCards} from '../src/card.js';
import {resetForm, formEvents} from '../src/modal.js';
export {CardTemplate,places_list};

const CardTemplate = document.querySelector('#card-template').content;
const places_list = document.querySelector(".places__list");

//-----------------------------------
const loadFirstSixCards = function(){
    for (let i = 0; i<initialCards.length ;i++){
    // клонируем содержимое тега template
    addNewCards(initialCards[i].name, initialCards[i].link);
    }
}
loadFirstSixCards();
//--------------------------------------------------------------------

//форма по смене автора + работе автора
const editPopup = document.querySelector(".popup_type_edit");
const profileForm = document.forms["edit-profile"]; 
const editeProfile= document.querySelector(".profile__edit-button");
const closePopup = editPopup.querySelector(".popup__close");
const backgroundPopup = document.querySelector(".popup_type_edit");
formEvents(editPopup,profileForm , editeProfile,closePopup, backgroundPopup);

profileForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let name = profileForm.elements.name.value;
    let description = profileForm.elements.description.value;
    document.querySelector(".profile__title").textContent = name;
    document.querySelector(".profile__description").textContent = description;
    //а че он даже внутри фун знает что выше есть editPopup????????????
    resetForm(editPopup,profileForm);
});

//форма добавления карточки на страницу
const newCardPopup = document.querySelector(".popup_type_new-card");
const newCardForm = document.forms["new-place"]; 
const addNewCard= document.querySelector(".profile__add-button");
const closePopup2 = newCardPopup.querySelector(".popup__close");
const backgroundPopupNewCard = document.querySelector(".popup_type_new-card");

formEvents(newCardPopup,newCardForm, addNewCard,closePopup2, backgroundPopupNewCard);

newCardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let name = newCardForm.elements["place-name"].value;
    let link = newCardForm.elements.link.value;
    addNewCards(name, link);
    resetForm(newCardPopup, newCardForm);
});

// const imageBigPopup = document.querySelector(".popup_type_image");
// const imageBigForm = document.forms["popup__content_content_image"]; 
// const imageClose = imageBigPopup.querySelector(".popup__close");


// imageBig.addEventListener('submit', function (evt) {
//     evt.preventDefault();
    
// });