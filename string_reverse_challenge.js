// Return the input string in reversed order. 
// Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.
// Your ChallengeToken: myr8iskabe
// Example 1. Input: "coderbyte"
// Output: etybredoc
// Final Output: ety_red_cmy_8is_abe
// Example 2. Input: "I Love Code"
// Output: edoC evol I
// Final Output: edo_ ev_L I_yr8_ska_e

let challengeToken = "myr8iskabe"
function reverseStringChallenge(inputString) {
    reversedString = inputString.split("").reverse().join("") // S R J to reverse string
    // console.log(reversedString)

    reversedString += challengeToken
    // console.log(reversedString)

    // replace every fourth character with an underscore
    let counter = 1
    let finalString = ""
    reversedString.split("").forEach(element => {
        if (counter % 4 === 0) {
            finalString += "_"
        } else {
            finalString += element
        }
        counter++
    });

    return finalString
}

console.log(reverseStringChallenge("coderbyte"))
console.log(reverseStringChallenge("I Love Code"))