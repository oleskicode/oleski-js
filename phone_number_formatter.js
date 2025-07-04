//10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(inputArray) {
  let finalString =
    "(" +
    inputArray[0] +
    inputArray[1] +
    inputArray[2] +
    ") " +
    inputArray[3] +
    inputArray[4] +
    inputArray[5] +
    "-" +
    inputArray[6] +
    inputArray[7] +
    inputArray[8] +
    inputArray[9];
  return finalString;
}

console.log(createPhoneNumber(inputArray));
