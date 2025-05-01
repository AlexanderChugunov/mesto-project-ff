function enableValidation (config) {
  
  const showInputError = (formElement, inputElement, errorMessage) => {
    console.log(inputElement);
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      setEventListeners(formElement);
  
    });
  };
  
  enableValidation();
  function hasInvalidInput(inputList){
   return (inputList.some(input => {
    return !input.validity.valid;
  }))
  }
  function toggleButtonState(inputList,buttonElement){
    if (hasInvalidInput(inputList)){
      buttonElement.classList.add(config.inactiveButtonClass);
    }
    else{
       buttonElement.classList.remove(config.inactiveButtonClass);
    }
  }
  }
  export {enableValidation};