/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./images/add-icon.svg":
/*!*****************************!*\
  !*** ./images/add-icon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/add-icon.svg\";\n\n//# sourceURL=webpack://--yes/./images/add-icon.svg?");

/***/ }),

/***/ "./images/avatar.jpg":
/*!***************************!*\
  !*** ./images/avatar.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/avatar.jpg\";\n\n//# sourceURL=webpack://--yes/./images/avatar.jpg?");

/***/ }),

/***/ "./images/card_1.jpg":
/*!***************************!*\
  !*** ./images/card_1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_1.jpg\";\n\n//# sourceURL=webpack://--yes/./images/card_1.jpg?");

/***/ }),

/***/ "./images/card_2.jpg":
/*!***************************!*\
  !*** ./images/card_2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_2.jpg\";\n\n//# sourceURL=webpack://--yes/./images/card_2.jpg?");

/***/ }),

/***/ "./images/card_3.jpg":
/*!***************************!*\
  !*** ./images/card_3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card_3.jpg\";\n\n//# sourceURL=webpack://--yes/./images/card_3.jpg?");

/***/ }),

/***/ "./images/close.svg":
/*!**************************!*\
  !*** ./images/close.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/close.svg\";\n\n//# sourceURL=webpack://--yes/./images/close.svg?");

/***/ }),

/***/ "./images/delete-icon.svg":
/*!********************************!*\
  !*** ./images/delete-icon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/delete-icon.svg\";\n\n//# sourceURL=webpack://--yes/./images/delete-icon.svg?");

/***/ }),

/***/ "./images/edit-icon.svg":
/*!******************************!*\
  !*** ./images/edit-icon.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/edit-icon.svg\";\n\n//# sourceURL=webpack://--yes/./images/edit-icon.svg?");

/***/ }),

/***/ "./images/like-active.svg":
/*!********************************!*\
  !*** ./images/like-active.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/like-active.svg\";\n\n//# sourceURL=webpack://--yes/./images/like-active.svg?");

/***/ }),

/***/ "./images/like-inactive.svg":
/*!**********************************!*\
  !*** ./images/like-inactive.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/like-inactive.svg\";\n\n//# sourceURL=webpack://--yes/./images/like-inactive.svg?");

/***/ }),

/***/ "./images/logo.svg":
/*!*************************!*\
  !*** ./images/logo.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/logo.svg\";\n\n//# sourceURL=webpack://--yes/./images/logo.svg?");

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://--yes/./pages/index.css?");

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewCards: () => (/* binding */ addNewCards)\n/* harmony export */ });\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.js */ \"./src/index.js\");\n\n\nfunction addNewCards(name, link) {\n  var cardElement = _src_index_js__WEBPACK_IMPORTED_MODULE_0__.CardTemplate.querySelector('.card').cloneNode(true);\n  // наполняем содержимым\n\n  cardElement.querySelector('.card__image').src = link;\n  cardElement.querySelector('.card__title').textContent = name;\n  console.log(cardElement);\n  // отображаем на странице\n  _src_index_js__WEBPACK_IMPORTED_MODULE_0__.places_list.append(cardElement);\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  // const biggerImage = cardElement.querySelector('.card__image');\n  remove_Cards_callback(deleteButton);\n  // bigger_Image_callback(biggerImage);\n}\nvar remove_Cards_callback = function remove_Cards_callback(deleteButton) {\n  deleteButton.addEventListener('click', function () {\n    var listItem = deleteButton.closest('.card');\n    listItem.remove();\n  });\n};\n// const bigger_Image_callback =  function (biggerImage){\n//   biggerImage.addEventListener('click', function () {\n//       Popup.closest(\".popup\").style.display = \"flex\";\n//   });\n// }\n\nvar cardContainer = document.querySelector('.places__list');\ncardContainer.addEventListener('click', function (evt) {\n  if (evt.target.classList.contains(\"card__like-button\")) {\n    evt.target.classList.toggle('card__like-button_is-active');\n  }\n});\n\n//# sourceURL=webpack://--yes/./src/card.js?");

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialCards);\n\n//# sourceURL=webpack://--yes/./src/cards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardTemplate: () => (/* binding */ CardTemplate),\n/* harmony export */   places_list: () => (/* binding */ places_list)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./pages/index.css\");\n/* harmony import */ var _images_avatar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/avatar.jpg */ \"./images/avatar.jpg\");\n/* harmony import */ var _images_card_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/card_1.jpg */ \"./images/card_1.jpg\");\n/* harmony import */ var _images_card_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/card_2.jpg */ \"./images/card_2.jpg\");\n/* harmony import */ var _images_card_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/card_3.jpg */ \"./images/card_3.jpg\");\n/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/logo.svg */ \"./images/logo.svg\");\n/* harmony import */ var _images_add_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/add-icon.svg */ \"./images/add-icon.svg\");\n/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/close.svg */ \"./images/close.svg\");\n/* harmony import */ var _images_delete_icon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/delete-icon.svg */ \"./images/delete-icon.svg\");\n/* harmony import */ var _images_edit_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/edit-icon.svg */ \"./images/edit-icon.svg\");\n/* harmony import */ var _images_like_active_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/like-active.svg */ \"./images/like-active.svg\");\n/* harmony import */ var _images_like_inactive_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/like-inactive.svg */ \"./images/like-inactive.svg\");\n/* harmony import */ var _src_cards_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/cards.js */ \"./src/cards.js\");\n/* harmony import */ var _src_card_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/card.js */ \"./src/card.js\");\n/* harmony import */ var _src_modal_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/modal.js */ \"./src/modal.js\");\n//-----css\n\n//-----image\n\n\n\n\n\n\n\n\n\n\n\n//-----js exports\n\n\n\n\nvar CardTemplate = document.querySelector('#card-template').content;\nvar places_list = document.querySelector(\".places__list\");\n\n//-----------------------------------\nvar loadFirstSixCards = function loadFirstSixCards() {\n  for (var i = 0; i < _src_cards_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].length; i++) {\n    // клонируем содержимое тега template\n    (0,_src_card_js__WEBPACK_IMPORTED_MODULE_13__.addNewCards)(_src_cards_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"][i].name, _src_cards_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"][i].link);\n  }\n};\nloadFirstSixCards();\n//--------------------------------------------------------------------\n\n//форма по смене автора + работе автора\nvar editPopup = document.querySelector(\".popup_type_edit\");\nvar profileForm = document.forms[\"edit-profile\"];\nvar editeProfile = document.querySelector(\".profile__edit-button\");\nvar closePopup = editPopup.querySelector(\".popup__close\");\nvar backgroundPopup = document.querySelector(\".popup_type_edit\");\n(0,_src_modal_js__WEBPACK_IMPORTED_MODULE_14__.formEvents)(editPopup, profileForm, editeProfile, closePopup, backgroundPopup);\nprofileForm.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var name = profileForm.elements.name.value;\n  var description = profileForm.elements.description.value;\n  document.querySelector(\".profile__title\").textContent = name;\n  document.querySelector(\".profile__description\").textContent = description;\n  //а че он даже внутри фун знает что выше есть editPopup????????????\n  (0,_src_modal_js__WEBPACK_IMPORTED_MODULE_14__.resetForm)(editPopup, profileForm);\n});\n\n//форма добавления карточки на страницу\nvar newCardPopup = document.querySelector(\".popup_type_new-card\");\nvar newCardForm = document.forms[\"new-place\"];\nvar addNewCard = document.querySelector(\".profile__add-button\");\nvar closePopup2 = newCardPopup.querySelector(\".popup__close\");\nvar backgroundPopupNewCard = document.querySelector(\".popup_type_new-card\");\n(0,_src_modal_js__WEBPACK_IMPORTED_MODULE_14__.formEvents)(newCardPopup, newCardForm, addNewCard, closePopup2, backgroundPopupNewCard);\nnewCardForm.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var name = newCardForm.elements[\"place-name\"].value;\n  var link = newCardForm.elements.link.value;\n  (0,_src_card_js__WEBPACK_IMPORTED_MODULE_13__.addNewCards)(name, link);\n  (0,_src_modal_js__WEBPACK_IMPORTED_MODULE_14__.resetForm)(newCardPopup, newCardForm);\n});\n\n// const imageBigPopup = document.querySelector(\".popup_type_image\");\n// const imageBigForm = document.forms[\"popup__content_content_image\"]; \n// const imageClose = imageBigPopup.querySelector(\".popup__close\");\n\n// imageBig.addEventListener('submit', function (evt) {\n//     evt.preventDefault();\n\n// });\n\n//# sourceURL=webpack://--yes/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formEvents: () => (/* binding */ formEvents),\n/* harmony export */   resetForm: () => (/* binding */ resetForm)\n/* harmony export */ });\n\nfunction resetForm(Popup, Form) {\n  Popup.closest(\".popup\").style.display = \"none\";\n  Form.reset();\n}\nfunction formEvents(Popup, Form, openPopup, closePopup, backgroundPopup) {\n  openPopup.addEventListener('click', function (event) {\n    //меняю попап на видимый когда кнопка прожата\n    Popup.closest(\".popup\").style.display = \"flex\";\n  });\n  closePopup.addEventListener('click', function (event) {\n    resetForm(Popup, Form);\n  });\n  backgroundPopup.addEventListener('click', function (evt) {\n    if (evt.currentTarget === evt.target) {\n      resetForm(Popup, Form);\n    }\n  });\n  Form.elements[0].addEventListener('keydown', function (evt) {\n    if (evt.key === \"Escape\") {\n      resetForm(Popup, Form);\n    }\n    ;\n  });\n  Form.elements[1].addEventListener('keydown', function (evt) {\n    if (evt.key === \"Escape\") {\n      resetForm(Popup, Form);\n    }\n    ;\n  });\n}\n\n//# sourceURL=webpack://--yes/./src/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;