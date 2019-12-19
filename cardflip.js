let isMatch = (flipCards) => {
  let src1 = flipCards[0].getAttribute('src');
  let src2 = flipCards[1].getAttribute('src');

  if (src1 === src2) {
    return true;
  } else {
    return false;
  }

}