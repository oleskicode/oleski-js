// - Function which takes the str parameter and
// 1. capitalizes the first letter in each word
// 2. masks every fourth symbol by replacing it with another symbol
// Input: "hello world" >> Output: "Hel_o W_rld"
// Input: "i ran there" >> Output: "I R_n T_ere"

function StringCapitalizeAndReplace(str) {
    // 1. Split input string to array
    let textArray = str.split(" ") 

    // 2. Capitalize words in the array:
    textArray = textArray.map(item => { 
        return item[0].toUpperCase() + item.slice(1)
    })

    // 3. Merge array back to string to place spaces, then split it again
    textArray = textArray.join(" ").split("")

    // 4. Finally, mask by replacing every 4th element in text
    textArray = textArray.map((item, index) => {
        if ( (index + 1) % 4 === 0) {
            item = "_"
            return item
        }
        return item
    })

    // 5. Join the characters back into a single string
    return textArray.join("")
}

console.log(StringCapitalizeAndReplace("hello world")); // Output: "Hel_o W_rld"
console.log(StringCapitalizeAndReplace("i ran there")); // Output: "I R_n T_ere"