const fruit1 = "Apple";
const fruit2 = "Banana";

function printCharsOneByOne(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    console.log(inputString[i]);
  }
}

function reverseString(inputString) {
  const reversedString = inputString.split("").reverse().join("");
  console.log(reversedString);
  return reversedString;
}

printCharsOneByOne(fruit1);
reverseString(fruit1);

printCharsOneByOne(fruit2);
reverseString(fruit2);
