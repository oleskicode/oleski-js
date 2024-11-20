const PI = 3.14159
let radius = "Not Set";

document.getElementById("submitButton").onclick = function(){
    radius = document.getElementById("userInput").value;
    radius = Number(radius)
    console.log(typeof radius, radius)
    circlearea = PI * radius * radius
    console.log(circlearea)
    document.getElementById("circleArea").textContent = "Circle area = " + circlearea   
}

