// Disable img dragging
let imgs = document.querySelectorAll('img');
for (const img of imgs) {
  img.setAttribute('draggable', 'false');
}

// For counting clicks
let moves = document.querySelector('#moveCounter');
let clicks = 0;

/**************
    Methods
***************/

/**
 * Adds click listener to each card
 * @see cardOnClick
 */
function AddCardClickListeners() {
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', cardOnClick));
}

/**
 * Handles card clicking, checking for matches,
 * limiting to 2 flipped cards
 * 
 * @param {*} e Click event argument
 */
function cardOnClick(e) {
  let card = e.currentTarget;
  // Filter to prevent more than 2 cards being flipped
  if (!isPairFlipped()) {
    clicks += 1;
    moves.innerHTML = `${clicks} moves `;

    /*
      Flipping card
    */
    // Changing wrapper div class
    card.classList.toggle('is-flipped');
    // Toggling hiding sides
    let cardSides = card.children;
    for (const card of cardSides) {
      card.classList.toggle('hidden');
    }

    /*
      Checking  if 2 cards are flipped
        then checking if they match if true
    */
    if (isPairFlipped()) {
      // Getting the flipped cards
      let flippedDivs = document.querySelectorAll('.is-flipped');
      // Getting img elements to give to isMatch function
      let flippedCardBacks = [];
      for (const div of flippedDivs) {
        flippedCardBacks.push(div.querySelector('.card_back'));
      }

      if (isMatch(flippedCardBacks)) {
        /*
          Remove cards
        */
        setTimeout(function () {
          for (const div of flippedDivs) {
            // Hiding child elements
            for (const child of div.children) {
              if (!child.classList.contains('hidden')) {
                child.classList.add('hidden');
              }
            }
            // Hiding div
            div.classList.add('hidden-card');
            div.classList.remove('is-flipped');
            div.removeEventListener('click', cardOnClick);

            /*
              Check if game is won
            */
            let hiddenCardDivs = document.querySelectorAll('.hidden-card');
            if (hiddenCardDivs.length === 16) {
              /*
                Win
              */
              endgame(); 
            }
          }
        }, 800); // 1000ms = 1 sec
      } else {
        /*
          Un-flip cards
        */
        // Delay
        setTimeout(function () {
          // Changing wrapper div class
          flippedDivs.forEach(card => card.classList.toggle('is-flipped'));
          // Toggle hiding sides
          for (const card of flippedDivs) {
            let children = card.children;
            for (const child of children) {
              child.classList.toggle('hidden');
            }
          }
        }, 800); // 1000ms = 1 sec
      }
    }
  }
}

/**
 * Shuffles the numbers assigned to each card using a Fisher-Yates shuffle
 * @see shuffle()
 */
function ShuffleCards() {
  // Getting numbers and shuffling order
  const backgroundImage = [
    'images/tuna1.jpg',
    'images/tuna2.jpg',
    'images/tuna3.jpg',
    'images/tuna4.jpg',
    'images/tuna5.png',
    'images/tuna6.jpg',
    'images/tuna7.png',
    'images/tuna8.jpg',
    'images/tuna1.jpg',
    'images/tuna2.jpg',
    'images/tuna3.jpg',
    'images/tuna4.jpg',
    'images/tuna5.png',
    'images/tuna6.jpg',
    'images/tuna7.png',
    'images/tuna8.jpg'
  ];
  let shuffledCardValues = shuffle(backgroundImage);

  // Getting the elements for each card face
  let cardBacks = document.querySelectorAll('.card_back');
  // Adding values to the card face
  for (let i = 0; i < cardBacks.length; i++) {
    cardBacks[i].setAttribute('src', shuffledCardValues[i]);
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

// Check to see if two cards are flipped
function isPairFlipped() {
  let flippedCards = document.querySelectorAll('.is-flipped');
  return flippedCards.length === 2 ? true : false;
}

let endgame = () => {

  //stop timer
  clearInterval(interval);

  //Gets total game time and moves for modal
  let totalGameMoves = moves.innerHTML;
  let totalGameTime = timer.innerHTML;

 

  //Shows total game time and moves for modal
  totalGameMovesElement.innerHTML = totalGameMoves;
  totalGameTimeElement.innerHTML = totalGameTime;


  // Show modal div
  document.querySelector('#modalDiv').classList.remove('hidden');

  // Close modal div
  btnClosingTime.addEventListener("click", function(){
      document.querySelector('#modalDiv').classList.add('hidden');
      timer.innerHTML = `0 mins 0 secs`;
      window.location.reload();
  })
};