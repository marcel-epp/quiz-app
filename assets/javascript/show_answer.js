const answerBoxes = document.querySelectorAll('[data-js="card-answer"]');
const cardButtons = document.querySelectorAll('[data-js="card-button"]');

cardButtons.forEach(function (cardButton) {
  cardButton.addEventListener("click", () => {
    cardButton.nextElementSibling.classList.toggle("card-answer-visible");
    if (cardButton.innerHTML === "Show Answer") {
      cardButton.innerHTML = "Close Answer";
      cardButton.classList.add("card-button-open");
    } else {
      cardButton.innerHTML = "Show Answer";
      cardButton.classList.remove("card-button-open");
    }
  });
});
