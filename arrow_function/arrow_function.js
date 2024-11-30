const logTime = () => { // without argument
    console.log("logTime: " + new Date());
}
logTime();

const sayHello = (name) => { // with argument
    console.log("sayHello: " + "Hello, " + name);
}
sayHello("Mike");

const addNumbersArrow = (a,b) => a+b;
console.log(addNumbersArrow(2,3));

function addNumbers(a,b) {
    console.log(arguments)
    return a + b;
}
console.log(addNumbers(4,5));
