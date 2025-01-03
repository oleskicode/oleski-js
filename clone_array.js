function cloneArraySpread(inputArray) {
    const cloned = [...inputArray]; // spread
    // console.log(cloned)
    return cloned
}

function cloneArraySlice(inputArray) {
    const outPutArray = inputArray.slice() // slice
    // console.log(outPutArray)
    return outPutArray
}

const array1 = [1,2,3]
const array2 = cloneArraySpread(array1)
const array3 = cloneArraySlice(array1)

console.log(array1)
console.log(array2)
console.log(array3)
