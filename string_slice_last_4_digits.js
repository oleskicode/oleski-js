const card1 = "1234 1234 1234 5678"
const card2 = "1111222233339876"

function maskCardNumber(cardInput) {
    const lastFourChars = cardInput.slice(-4);
    // console.log("lastFourChars: " + lastFourChars)
    // console.log("**** **** **** " + lastFourChars)
    return ("**** **** **** " + lastFourChars)
}

console.log(maskCardNumber(card1))
console.log(maskCardNumber(card2))
