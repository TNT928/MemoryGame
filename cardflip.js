let isMatch = (flipCards) => {
  let src1 = flipCards[0].getAttribute('src');
  let src2 = flipCards[1].getAttribute('src');

  if (src1 === src2) {
    return true;
  } else {
    return false;
  }

}

let mom = document.querySelectorAll('.card');
let child = document.querySelectorAll('.card_back')

if (isMatch(child)) {
  mom[0].removeChild(child[0])
  mom[1].removeChild(child[1])

}

let removeCard = () => {
  mom[0].removeChild(child[0])

}

let cardToRemove = child[0];






// isMatch(flipCards)