console.log("input js")

const input = document.getElementById("input")
const result = document.getElementById("result")
const submitButton = document.getElementById("submit")

submitButton.addEventListener('click', showInput);

function showInput() {
    console.log("button clicked")
    result.textContent = input.value // input.value to get the text from the input
}
