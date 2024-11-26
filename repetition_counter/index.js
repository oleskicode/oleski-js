function countNumberAppearance() {
    numbersString = document.getElementById("numbersInput").value;
    numbersArray = String(numbersString).split(" ")
    valueToCount = document.getElementById("valueToCount").value;
    console.log(numbersString)
    console.log("Input array: " + numbersArray)
    console.log("Looking for number:" + valueToCount)
    let counter = 0
    for (let item of numbersArray){
        if (item == valueToCount) {
            counter++;
        }
    }
    console.log("Number is met x times: " + counter);
    document.getElementById("result").textContent = valueToCount + " is met " + counter + " times";
}
