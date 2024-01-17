const answerBoxes = document.querySelectorAll('[data-js="card-answer"]');
const cardButtons = document.querySelectorAll('[data-js="card-button"]');

cardButtons.forEach(function (cardButton) {
  cardButton.addEventListener("click", () => {
    cardButton.nextElementSibling.classList.toggle("card-answer-visible");
  });
});
