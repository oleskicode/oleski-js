// function to get first N array elements
function first(inputArray, n) {
  if (n == undefined) {
    return inputArray[0];
  }
  let outputArray = inputArray.slice(0, n);
  return outputArray;
}

console.log(first(["a", "b", "c"]));
console.log(first([1, 2, 3], 2));
console.log(first([7, 9, 0, -2])); // 7
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]
