let cards = document.querySelectorAll('.card');
const CARD_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

//CARD FLIP
cards.forEach(card => card.addEventListener('click', e => {
  card.classList.toggle('is-flipped');
}));

function ShuffleCards() {
  let shuffledCardValues = shuffle(CARD_VALUES);

  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML += shuffledCardValues[i];
  }
}

// Fisher-Yates Shuffle
// source: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length,
    t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}