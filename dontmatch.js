let cards = document.querySelectorAll(".card")
let hasFlippedCard = false;
let firstCard, secondCard;

function reflipCard() {
    this.classList.add('flip');
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
    //let isMatch = somehow find way to equate secondcard to firstcard;

    isMatch ? disableCards(): unflipCards();
  }

function disableCards(){

}

function unflipCards(){
    
}


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
