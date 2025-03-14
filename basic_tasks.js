// Task 1
function isEven(inputNumber) {
    console.log(inputNumber);
    return inputNumber % 2 === 0;
}
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));

// Task 2
function hourCheck(hourInput) {
    if (hourInput < 12)
        return "Good Morning!";
    if (hourInput >= 12 && hourInput < 18)
        return "Good Day!";
    if (hourInput >= 18)
        return "Good Evening!";
}
console.log(hourCheck(1));
console.log(hourCheck(12));
console.log(hourCheck(18));

// Task 3 - Age check
function ageCheck(inputAge) {
    return inputAge >= 18;
}
console.log(ageCheck(15));
console.log(ageCheck(17));
console.log(ageCheck(18));
console.log(ageCheck(19));
