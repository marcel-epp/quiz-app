//const answerBoxes = document.querySelectorAll('[data-js="card-answer"]');
const cardButtons = document.querySelectorAll('[data-js="card-button"]');
const cardBookmarksIcons = document.querySelectorAll('[data-js="card-bookmark-icon"]');

// show the answer box on click, hide the answer box on click
cardButtons.forEach(function (cardButton) {
  cardButton.addEventListener("click", () => {
    cardButton.nextElementSibling.classList.toggle("hidden");
    if (cardButton.innerHTML === "Show Answer") {
      cardButton.innerHTML = "Hide Answer";
      cardButton.classList.add("card-button-open");
    } else {
      cardButton.innerHTML = "Show Answer";
      cardButton.classList.remove("card-button-open");
    }
  });
});

cardBookmarksIcons.forEach(function (cardBookmarkIcon) {
  cardBookmarkIcon.addEventListener("click", () => {
    if (cardBookmarkIcon.classList.contains("fa-regular")) {
      cardBookmarkIcon.classList.remove("fa-regular");
      cardBookmarkIcon.classList.add("fa-solid");
    } else {
      cardBookmarkIcon.classList.remove("fa-solid");
      cardBookmarkIcon.classList.add("fa-regular");
    }
  });
});
