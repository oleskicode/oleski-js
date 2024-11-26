function countNumberAppearance() {
    numbersString = document.getElementById("numbersInput").value;
    console.log(numbersString)
    numbersArray = String(numbersString).split(" ")
    valueToCount = document.getElementById("valueToCount").value;
    let counter = 0
    console.log("Input array: " + numbersArray)
    console.log("Looking for number:" + valueToCount)
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] == valueToCount) {
            counter++;
        }
    }
    console.log("Number is met x times: " + counter);
    document.getElementById("result").textContent = valueToCount + " is met " + counter + " times";
}
