function cloneArraySpread(inputArray) {
    const cloned = [...inputArray];
    console.log(cloned)
    return cloned
}

function cloneArraySlice(inputArray) {
    const outPutArray = inputArray.slice()
    console.log(outPutArray)
    return outPutArray
}


array1 = [1,2,3]

array2 = cloneArraySpread(array1)
array3 = cloneArraySlice(array1)
