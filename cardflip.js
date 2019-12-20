let isMatch = (flipCards) => {
  let src1 = flipCards[0].getAttribute('src');
  let src2 = flipCards[1].getAttribute('src');

  if (src1 === src2) {
    return true;
  } else {
    return false;
  }

}


let moves = document.querySelector('#moveCounter');
let clicks = 0;



let scoreTracker = () =>{
  let perfectScore = clicks === 16
if(clicks === 16){
  alert(`Perfect Score`)

} else if(clicks > 16){
  alert('You Suck')
}
}



