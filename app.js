// On load
AddCardClickListeners();
ShuffleCards();


// const backgroundImage = [
//   'images/bluefin-tuna-fish-ocean-sea-getty-stock.jpg',
//   'images/mercury-in-tuna-1296x728-feature.jpg',
//   'images/raw_tuna_istock.jpg',
//   'images/tuna-fish.jpg'

// ]

//CARD FLIP
function AddCardClickListeners() {
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', e => {
    // Changing wrapper div class
    card.classList.toggle('is-flipped');
    // Toggling hiding sides
    let cardSides = card.children;
    for (const card of cardSides) {
      card.classList.toggle('hidden');
    }
  }));
}

/**
 * Shuffles the numbers assigned to each card using a Fisher-Yates shuffle
 * @see shuffle()
 */
function ShuffleCards() {
  // Getting numbers and shuffling order
  const CARD_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  let shuffledCardValues = shuffle(CARD_VALUES);

  // Getting the elements for each card face
  let cardFaces = document.querySelectorAll('.card_back');
  // Adding values to the card face
  for (let i = 0; i < cardFaces.length; i++) {
    cardFaces[i].innerHTML += shuffledCardValues[i];
    
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