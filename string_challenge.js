// Function which returns a new string by pairing up the characters in the corresponding locations in both substrings. 
// str parameter being passed will contain a string with a single asterisk character splitting the string evenly into two separate strings. The string will always split evenly with the asterisk in the center.
// For example: if str is "123*abc" then your program should return the string 1a2b3c because 1 pairs with a, 2 pairs with b, etc.
// Input: "123*abc" >> Combined string: 1a2b3c
// Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.
// Your ChallengeToken: myr8iskabe
// Final Output: 1a2_3cm_r8i_kab_

const challengeToken = "myr8iskabe"

function stringChallenge(inputString) {
    let combinedString = ""
    const input1 = inputString.split("*")[0]
    const input2 = inputString.split("*")[1]

    // pairing up characters
    for (let i = 0; i < input1.length; i++) {
        combinedString += input1[i] + input2[i]
    }

    // concatenate with challengeToken
    combinedString += challengeToken 

    //replace every fourth character with an underscore.
    let finalString = ""
    let counter = 1
    combinedString.split("").forEach (element => {
        if (counter % 4 === 0) {
            finalString += "_"
        } else {
            finalString += element
        }
        counter++
    });
    
    return finalString
}

console.log(stringChallenge("123*abc"))
