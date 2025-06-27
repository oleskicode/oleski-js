// Get N Last elements of array

function last(inputArray, n) {
  // console.log("typeof(input): " +typeof(inputArray) )
  // console.log("typeof(n): " + typeof(n))
  if (typeof n == "undefined") {
    console.log("n is undefined");
    n = 1;
  }
  let outputArray = inputArray.slice(-n);
  return outputArray;
}

console.log(last([1, 2, 3, 4, 5], 1)); // 5
console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]
