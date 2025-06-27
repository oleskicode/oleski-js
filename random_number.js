let randomNum = Math.random();
console.log(randomNum);

const range = 5; // this sets [1...range]
randomNum = Math.floor(Math.random() * range) + 1;
console.log("Random value from range [1,5]: " + randomNum);

const MIN_RANGE_VALUE = 3;
const MAX_RANGE_VALUE = 13;
randomNum = Math.floor(
  Math.random() * (MAX_RANGE_VALUE - MIN_RANGE_VALUE + 1) + MIN_RANGE_VALUE,
);
console.log("Random value from range [3,13]: " + randomNum);
