const PI = 3.14159;
let radius = "Not Set";

document.getElementById("submitButton").onclick = function () {
  radius = document.getElementById("userInput").value;
  radius = Number(radius);
  console.log(typeof radius, radius);
  const circleArea = PI * radius * radius;
  console.log(circleArea);
  document.getElementById("circleArea").textContent =
    "Circle area = " + circleArea;
};
