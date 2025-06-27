const wordToCheck1 = "123321";
const wordToCheck2 = "abcdcba";
const wordToCheck3 = "0";
const wordToCheck4 = "123123";
const wordToCheck5 = "abcab";

function isPalindrome(inputWord) {
  const revertedInputWord = inputWord.split("").reverse().join("");
  // console.log(inputWord)
  // console.log(revertedInputWord)
  console.log(
    inputWord,
    " == ",
    revertedInputWord,
    inputWord === revertedInputWord,
  );
  return inputWord === revertedInputWord;
}

isPalindrome(wordToCheck1);
isPalindrome(wordToCheck2);
isPalindrome(wordToCheck3);
isPalindrome(wordToCheck4);
isPalindrome(wordToCheck5);

console.log(isPalindrome(wordToCheck1));
console.log(isPalindrome(wordToCheck2));
console.log(isPalindrome(wordToCheck3));
console.log(isPalindrome(wordToCheck4));
console.log(isPalindrome(wordToCheck5));
