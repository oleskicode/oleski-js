const skyPosition = "The Sky is Above"; //global variable

function skyStatus() {
  const moonVisibility = "The moon may be visible"; //local variable
  let counter = 0;

  return function () {
    //closure
    console.log("skyPosition " + skyPosition);
    console.log("moonVisibility " + moonVisibility);

    counter++;
    console.log(counter);
  };
}

skyStatus(); //this does not affect output
const getSkyStatusResult = skyStatus(); //getting returned function
getSkyStatusResult();
getSkyStatusResult();
getSkyStatusResult();
