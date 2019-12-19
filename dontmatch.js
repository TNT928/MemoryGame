//Match Card Function -- handles matching logic for clicked cards
let cards = document.querySelectorAll(".card")
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
}

//possible other matching function?? Come back to this
function reFlip(flippedCards) {
  let flippedCards = document.querySelectorAll(".is-flipped");
  if (backgroundImage) {
    this.classList.toggle("match");
  } else {
    this.classList.toggle("noMatch");
  }
}

flippedCards.forEach(card => card.addEventListener("click", flipCard));
