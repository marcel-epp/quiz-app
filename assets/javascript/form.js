const formQuestionBox = document.querySelector('[data-js="question__fieldset__item__question"]');
const formAnswerBox = document.querySelector('[data-js="question__fieldset__item__answer"]');
const formTagBox = document.querySelector('[data-js="question__fieldset__item__tag"]');
const formSubmitButton = document.querySelector('[data-js="question__fieldset__item__submit"]');

formSubmitButton.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(formQuestionBox);
});
