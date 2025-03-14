// Function to check whether input is Array
function isArray(input) {
    // console.log(Array.isArray(input))
    if (Array.isArray(input) === true) {
        return true
    } else {
        return false
    }
}

console.log(isArray('QA DOJO')); // false  
console.log(isArray([1, 2, 4, 0])); // true  
