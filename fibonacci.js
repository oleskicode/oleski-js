function fibonacciArrayGenerator(howMany) {
  if (howMany < 1) return [];
  if (howMany === 1) return [1];

  let result = [1, 1];

  for (let i = 2; i < howMany; i++) {
    const toAppend = result[i - 1] + result[i - 2];
    // console.log("toAppend: " + toAppend)
    result.push(toAppend);
  }
  console.log(result);
  return result;
}

fibonacciArrayGenerator(-1);
fibonacciArrayGenerator(0);
fibonacciArrayGenerator(1);
fibonacciArrayGenerator(2);
fibonacciArrayGenerator(3);
fibonacciArrayGenerator(4);
fibonacciArrayGenerator(5);
