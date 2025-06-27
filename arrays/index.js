function arrayToSquare(inputArray) {
  inputArray.forEach((element) => {
    element = element * element;
    console.log(element);
  });
}

function arrayToSquareUsingFor(inputArray) {
  console.log("arrayToSquareUsingFor");
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i] * inputArray[i];
  }
}

const array1 = [1, 2, 3];
console.log("array1 " + array1);

arrayToSquare(array1);
console.log(array1);

arrayToSquareUsingFor(array1);
console.log(array1);
