// Put separator after every even numbers next to each other
const input = "025468"  
// Output: 0-254-6-8  

function separatorBetweenEven(input) {
    console.log(input)
    let finalString = input[0]
    for (let i = 1; i < input.length; i++) {
        if ((input[i-1] % 2 === 0) & (input[i] % 2 === 0)) {
            finalString += "-"
        }
        finalString += input[i]
    }
    return finalString
}

console.log(separatorBetweenEven(input))
