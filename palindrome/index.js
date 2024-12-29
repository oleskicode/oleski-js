console.log("OK")

function reverseString(str) {
    return str.split('').reverse().join('');
}

document.getElementById('submit').addEventListener('click', function() {
    console.log("Submit button clicked")
    const wordToCheck = document.getElementById('word_to_check').value
    console.log(wordToCheck)
    const reversedWordToCheck = reverseString(wordToCheck)
    console.log(reversedWordToCheck)
    console.log(wordToCheck === reversedWordToCheck)
    document.getElementById('result').textContent = wordToCheck === reversedWordToCheck
    return wordToCheck === reversedWordToCheck
})
