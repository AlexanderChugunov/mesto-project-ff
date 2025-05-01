
function disableAllErrorSpans(form) {
    // Находим все span внутри формы, у которых класс содержит '_error'
    const errorSpans = form.querySelectorAll('span[class*="_error"]');
    errorSpans.forEach(span => {
      span.textContent = ''; // Очищаем текст ошибки
    });
  }
function resetForm(Popup, Form){
  Popup.closest(".popup").style.display = "none";
  disableAllErrorSpans(Form);
  Form.reset();
  const buttonElement = Form.querySelector(".popup__button");
  buttonElement.classList.add('popup__button_disabled');
}

function formEvents (Popup , Form, openPopup , closePopup , backgroundPopup){ 
  openPopup.addEventListener('click', function(event) {
      //меняю попап на видимый когда кнопка прожата
      Popup.closest(".popup").style.display = "flex";
  });
  
  closePopup.addEventListener('click',function(event){
      resetForm(Popup,Form);
  });
  
  backgroundPopup.addEventListener('click',function(evt){
      if (evt.currentTarget === evt.target) {
          resetForm(Popup,Form);
      }
  });
  
  Form.elements[0].addEventListener('keydown', function (evt) {
      if (evt.key === "Escape") {
          resetForm(Popup,Form);
      };
  });
  Form.elements[1].addEventListener('keydown', function (evt) {
      if (evt.key === "Escape") {
          resetForm(Popup,Form);
      };
  });
}
export {resetForm,formEvents};
