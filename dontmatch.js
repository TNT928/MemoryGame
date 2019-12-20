let cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;

function reflipCard() {
  this.classList.add("flip");
  if (this === firstCard) return;
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
}

//Match Card Function -- handles matching logic for clicked cards
function checkForMatch() {
  let isMatch = 'images/tuna1.jpg' === 'images/tuna1.jpg';
  'images/tuna2.jpg' === 'images/tuna2.jpg';
  'images/tuna3.jpg' === 'images/tuna3.jpg';
  'images/tuna4.jpg' === 'images/tuna4.jpg';
  'images/tuna5.jpg' === 'images/tuna5.jpg';
  'images/tuna6.jpg' === 'images/tuna6.jpg';
  'images/tuna7.jpg' === 'images/tuna7.jpg';
  'images/tuna8.jpg' === 'images/tuna8.jpg';
  //dont even know if that will do anything tbh

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {}

//possible other matching function?? Come back to this

// function reFlip(flippedCards) {
//   let flippedCards = document.querySelectorAll(".is-flipped");
//   if (backgroundImage) {
//     this.classList.toggle("match");
//   } else {
//     this.classList.toggle("noMatch");
//   }
// }

// flippedCards.forEach(card => card.addEventListener("click", flipCard));
