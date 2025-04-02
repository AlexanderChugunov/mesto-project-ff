import {CardTemplate,places_list} from '../src/index.js';
export {addNewCards};

function addNewCards(name, link){
    const cardElement = CardTemplate.querySelector('.card').cloneNode(true);
    // наполняем содержимым

        cardElement.querySelector('.card__image').src = link;
        cardElement.querySelector('.card__title').textContent = name;
        console.log(cardElement);
    // отображаем на странице
        places_list.append(cardElement);
        const deleteButton = cardElement.querySelector('.card__delete-button');
        // const biggerImage = cardElement.querySelector('.card__image');
        remove_Cards_callback(deleteButton);
        // bigger_Image_callback(biggerImage);
}
const remove_Cards_callback =  function (deleteButton){
  deleteButton.addEventListener('click', function () {
      const listItem = deleteButton.closest('.card');
      listItem.remove();
  });
}
// const bigger_Image_callback =  function (biggerImage){
//   biggerImage.addEventListener('click', function () {
//       Popup.closest(".popup").style.display = "flex";
//   });
// }

const cardContainer = document.querySelector('.places__list');
cardContainer.addEventListener('click', function (evt) {
    if (evt.target.classList.contains("card__like-button")){
    evt.target.classList.toggle('card__like-button_is-active')
    }
});


