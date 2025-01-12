// Join Array into string using join character
myColor = ["Red", "Green", "White", "Black"];  
// "Red,Green,White,Black"  
// "Red+Green+White+Black"    

function joinArrayItems(array, joinChar) {
    if (joinChar == "undefined") {
        joinChar = " "
    }
    result = array.join(joinChar)
    return result
}

console.log(joinArrayItems(myColor, ","))
console.log(joinArrayItems(myColor, "+"))
