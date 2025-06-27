// swap the case of each character.
// If it is "Hello World" then output should be hELLO WORLD.

function reverseCase(str) {
  // split str to array
  let array1 = str.split("");
  console.log(array1);

  // check every array item and convert case if needed
  array1 = array1.map((element) => {
    if (element === element.toUpperCase()) {
      return element.toLowerCase();
    } else {
      return element.toUpperCase();
    }
  });
  console.log(array1);

  return array1.join("");
}

console.log(reverseCase("small?-BIG!"));
console.log(reverseCase("tiny?-HUGE!"));
