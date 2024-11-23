function randomNumber(range_min, range_max) {
    let randomNum = Math.random();
    randomNum = Math.floor(randomNum * (range_max - range_min + 1)) + range_min;
    // console.log(randomNum)
    return randomNum;
}

function bubbleSort(numbers_input) {
    console.log("Input Array:", numbers_input);
    for (let i = 0; i < numbers_input.length; i++) {
        for (let j = 1; j < numbers_input.length; j++) {
            if (numbers_input[j-1] > numbers_input[j]) {
                let temp = numbers_input[j];
                numbers_input[j] = numbers_input[j-1];
                numbers_input[j-1] = temp;
            }
        }
    }
    console.log("Output Array:", numbers_input);
}

let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(randomNumber(0,20));
}
// console.log(numbers)

bubbleSort(numbers);
