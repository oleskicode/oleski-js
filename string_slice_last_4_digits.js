const card1 = "4321 1234 1234 5678"
const card2 = "1234 5678 9012 3456"

function maskCardNumber(cardInput) {
    const lastFourChars = cardInput.slice(-4); //last 4
    // console.log("lastFourChars: " + lastFourChars)
    // console.log("**** **** **** " + lastFourChars)
    return ("**** **** **** " + lastFourChars)
}

function showFirstNumbers(cardInput) {
    const lastFourChars = cardInput.slice(0,4); //first 4
    return lastFourChars + " **** **** ****"
}

console.log(maskCardNumber(card1))
console.log(maskCardNumber(card2))
console.log(showFirstNumbers(card1))
console.log(showFirstNumbers(card2))
