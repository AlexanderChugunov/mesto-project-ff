

const CardTemplate = document.querySelector('#card-template').content;

const remove_Cards_callback =  function (deleteButton){
    deleteButton.addEventListener('click', function () {
        const listItem = deleteButton.closest('.card');
        listItem.remove();
    });
}
//-----------------------------------
const places_list = document.querySelector(".places__list");
const removeCards = function( CardTemplate ,remove_Cards_callback){
    for (let i = 0; i<initialCards.length ;i++){
    // клонируем содержимое тега template
        const cardElement = CardTemplate.querySelector('.card').cloneNode(true);
    // наполняем содержимым
        cardElement.querySelector('.card__image').src = initialCards[i].link;
        cardElement.querySelector('.card__title').textContent = initialCards[i].name;
    // отображаем на странице
        places_list.append(cardElement);
        const deleteButton = cardElement.querySelector('.card__delete-button');

        cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
            evt.target.classList.toggle('card__like-button_is-active')
          });
    // добавим обработчик
    remove_Cards_callback(deleteButton);
    }
}

removeCards(CardTemplate,remove_Cards_callback);
//--------------------------------------------------------------------














//работа с формой по смене автора + работе автора
const authorPopup = document.querySelector(".popup_type_edit");
const profileForm = document.forms["edit-profile"]; 
function resetForm(){
    authorPopup.closest(".popup").style.display = "none";
    profileForm.reset();
}

function resetAnyForm (form){

}
const editeProfile= document.querySelector(".profile__edit-button");
editeProfile.addEventListener('click', function(event) {
    //меняю попап на видимый когда кнопка прожата
    authorPopup.closest(".popup").style.display = "flex";
});

const closePopup = authorPopup.querySelector(".popup__close");
closePopup.addEventListener('click',function(event){
    resetForm();
});


const backgroundPopup = document.querySelector(".popup_type_edit");
backgroundPopup.addEventListener('click',function(evt){
    if (evt.currentTarget === evt.target) {
        resetForm();
    }
});
profileForm.elements.name.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        resetForm();
    };
});
profileForm.elements.description.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        resetForm();
    };
});
profileForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let name = profileForm.elements.name.value;
    let description = profileForm.elements.description.value;
    document.querySelector(".profile__title").textContent = name;
    document.querySelector(".profile__description").textContent = description;
    resetForm();
});







//-----------------------------------------------
const newCardPopup = document.querySelector(".popup_type_new-card");
const newCardForm = document.forms["new-place"]; 

function resetForm2(){
    newCardPopup.closest(".popup").style.display = "none";
    newCardForm.reset();
}

const addNewCard= document.querySelector(".profile__add-button");
addNewCard.addEventListener('click', function(event) {
    //меняю попап на видимый когда кнопка прожата
    newCardPopup.closest(".popup").style.display = "flex";
});


const backgroundPopupNewCard = document.querySelector(".popup_type_new-card");
backgroundPopupNewCard.addEventListener('click',function(evt){
    if (evt.currentTarget === evt.target) {
        resetForm2();
    }
});
newCardForm.elements["place-name"].addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        resetForm2();
    };
});
newCardForm.elements.link.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        resetForm2();
    };
});
const closePopup2 = newCardPopup.querySelector(".popup__close");
closePopup2.addEventListener('click',function(event){
    resetForm2();
});


function addNewCards(name, link){
    const cardElement = CardTemplate.querySelector('.card').cloneNode(true);
    // наполняем содержимым
        cardElement.querySelector('.card__image').src = initialCards.link;
        cardElement.querySelector('.card__title').textContent = initialCards.name;
    // отображаем на странице
        places_list.append(cardElement);
        console.log(places_list);
        const deleteButton = cardElement.querySelector('.card__delete-button');
        remove_Cards_callback(deleteButton);
}


newCardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let name = newCardForm.elements["place-name"].value;
    let link = newCardForm.elements.link.value;
    addNewCards(name, link);

    resetForm2();
});











// card__like-button_is-active есть такой класс но я не понимаю как его подрубить

//--------------------------------------------
// const clickLike= document.querySelector(".card__like-button");
// clickLike.addEventListener('click', function(event) {
//     //evt.target.classList.contains('card__like-button');
//     //clickLike.setAttribute("style", "background:transparent url('../../../../images/like-active.svg') no-repeat");
//     event.target.classList.toggle('song__like_active');
// });






















// //Находим форму в DOM
// const formElement = document.querySelector("new-place");// Воспользуйтесь методом querySelector()
// // // Находим поля формы в DOM
// const nameInput = document.querySelector("profile__title");// Воспользуйтесь инструментом .querySelector()
// const jobInput = document.querySelector("profile__description");// Воспользуйтесь инструментом .querySelector()
// function handleFormSubmit(evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.
//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }
// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit);