
const CardTemplate = document.querySelector('#card-template').content;

const remove_Cards_callback =  function (deleteButton){
    deleteButton.addEventListener('click', function () {
        const listItem = deleteButton.closest('.card');
        listItem.remove();
      });
}
const removeCards = function( CardTemplate ,remove_Cards_callback){
    const places_list = document.querySelector(".places__list");

    for (let i = 0; i<initialCards.length ;i++){
    // клонируем содержимое тега template
        const cardElement = CardTemplate.querySelector('.card').cloneNode(true);
    // наполняем содержимым
        cardElement.querySelector('.card__image').src = initialCards[i].link;
        cardElement.querySelector('.card__title').textContent = initialCards[i].name;
    // отображаем на странице
        places_list.append(cardElement);
        const deleteButton = cardElement.querySelector('.card__delete-button');
    // добавим обработчик
    remove_Cards_callback(deleteButton);
    }
}
removeCards(CardTemplate,remove_Cards_callback);

