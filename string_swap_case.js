// Swap the case of each character. 
// For example: if str is "Hello World" the output should be hELLO WORLD. 
// Let numbers and other symbols stay the way they are.
// Additionally replace every fourth character with *.
// Input: "Hello World!"" // Output: "hEL*O W*RLD*"

function reverseCase(str) {
    const inputList = str.split("")
    let outputString1 = ""
    inputList.forEach(item => {
        if (item === item.toUpperCase()) {
            item = item.toLowerCase()
        } else {
            item = item.toUpperCase()
        }
        // console.log(item)
        outputString1 += item
    })
    console.log(outputString1)

    // Additionally replace every fourth character with *.
    let outputString2 = ""
    let counter = 1
    outputString1.split("").forEach(char => {
        if (counter % 4 === 0) {
            // console.log(char)
            char = "*"
        }
        outputString2 += char
        counter++
    })

    return outputString2
}

console.log(reverseCase("Hello World!"))
