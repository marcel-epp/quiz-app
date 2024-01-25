const formQuestion = document.querySelector('[data-js="question__form"]');
const formQuestionBox = document.querySelector('[data-js="question__fieldset__item__question"]');
const formQuestionBoxCharactersLeft = document.querySelector(
  '[data-js="question__fieldset__item__questioncharacters"]'
);
const formAnswerBox = document.querySelector('[data-js="question__fieldset__item__answer"]');
const formAnswerBoxCharactersLeft = document.querySelector('[data-js="question__fieldset__item__answercharacters"]');
const formTagBox = document.querySelector('[data-js="question__fieldset__item__tag"]');
const formSubmitButton = document.querySelector('[data-js="question__fieldset__item__submit"]');

// check the lenght of the question and the answer box text

const checkCharacterLenght = (value1, value2) => {
  value1.innerHTML = `${150 - value2.value.length} characters left`;
  if (value1.innerHTML === "0 characters left") {
    value1.classList.add("question__fieldset__item__characters--red");
  } else {
    value1.classList.remove("question__fieldset__item__characters--red");
  }
};

formQuestionBox.addEventListener("input", () => {
  checkCharacterLenght(formQuestionBoxCharactersLeft, formQuestionBox);
});

formAnswerBox.addEventListener("input", () => {
  checkCharacterLenght(formAnswerBoxCharactersLeft, formAnswerBox);
});

// submit and create a new card
formQuestion.addEventListener("submit", (event) => {
  event.preventDefault();

  // create newCard Container
  // give newCard a class
  // append newCard to the body
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  document.body.append(newCard);
  //--------------------------------------------

  // bookmarks container
  const newCardBookmarks = document.createElement("span");
  newCardBookmarks.classList.add("card-bookmark");
  newCard.append(newCardBookmarks);
  //--------------------------------------------

  // bookmark fontawesome icon
  const newCardBookmark = document.createElement("i");
  newCardBookmark.classList.add("fa-regular");
  newCardBookmark.classList.add("fa-bookmark");
  newCardBookmark.classList.add("fa-2xl");
  newCardBookmark.setAttribute("data-js", "card-bookmark-icon");
  newCardBookmarks.append(newCardBookmark);
  //--------------------------------------------

  // h2 Card question
  const newCardQuestion = document.createElement("h2");
  newCardQuestion.classList.add("card-question");
  newCardQuestion.innerHTML = formQuestionBox.value;
  newCard.append(newCardQuestion);
  //--------------------------------------------

  // button show answer
  const newCardShowAnswerButton = document.createElement("button");
  newCardShowAnswerButton.classList.add("card-button");
  newCardShowAnswerButton.setAttribute("type", "button");
  newCardShowAnswerButton.setAttribute("data-js", "card-button");
  newCardShowAnswerButton.innerHTML = "Show Answer";
  newCard.append(newCardShowAnswerButton);
  //--------------------------------------------

  // answer box
  const newCardAnswer = document.createElement("div");
  newCardAnswer.classList.add("card-answer");
  newCardAnswer.setAttribute("data-js", "card-answer");
  newCard.append(newCardAnswer);
  //--------------------------------------------

  // answer text
  const newCardAnswerText = document.createElement("p");
  newCardAnswerText.innerHTML = formAnswerBox.value;
  newCardAnswer.append(newCardAnswerText);
  //--------------------------------------------

  // card tags
  const newCardTags = document.createElement("div");
  newCardTags.classList.add("card-tags");
  newCard.append(newCardTags);
  //--------------------------------------------

  // card tag
  const newCardTag = document.createElement("a");
  newCardTag.setAttribute("href", "#");
  newCardTag.classList.add("card-tags-links");
  newCardTag.innerHTML = `# ${formTagBox.value}`;
  newCardTags.append(newCardTag);
  //--------------------------------------------

  console.log(`Text aus der Questionbox: ${formQuestionBox.value}`);
  console.log(`Text aus der Answerbox: ${formAnswerBox.value}`);
  console.log(`Text aus der Tagbox: ${formTagBox.value}`);
});
