const MIN_DICE = 1; //Random number 1-6 for Dice
const MAX_DICE = 6;

const rollButton = document.getElementById("rollButton");
const rollResult = document.getElementById("rollResult");

let randomNum;

rollButton.onclick = function () {
    console.log("Roll button is clicked");
    randomNum = Math.floor(Math.random() * MAX_DICE) + MIN_DICE;
    console.log(randomNum);
    rollResult.textContent = randomNum;
}