function reFlip(flippedCards) {
  let flippedCards = document.querySelectorAll(".is-flipped");
  if (backgroundImage) {
    this.classList.toggle("match");
  } else {
    this.classList.toggle("noMatch");
  }
}

flippedCards.forEach(card => card.addEventListener("click", flipCard));
