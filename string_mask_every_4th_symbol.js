function maskEveryFourth(str) {
  // split into array
  let array = str.split(``);
  // console.log(array)

  // iterate items and replace every 4th
  array = array.map((item, index) => {
    if ((index + 1) % 4 === 0) {
      return "*";
    }
    return item;
  });
  // console.log(array)
  return array.join("");
}

console.log(maskEveryFourth("123412341234"));
console.log(maskEveryFourth("hello how are you"));
