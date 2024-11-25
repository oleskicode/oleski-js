const skyPosition = "The Sky is Above"; //global variable

function skyStatus() {
    const moonVisibility = "The moon may be visible"; //local variable 

    return function() { //closure
        console.log("skyPosition " + skyPosition);
        console.log("moonVisibility " + moonVisibility);
    }
}

skyStatus();

const returnedFunction = skyStatus(); //getting returned function
returnedFunction();
