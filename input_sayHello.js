const readline = require('readline');

// Create interface for reading from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sayHello(username) {
  console.log(`Hello, ${username}!`);
}

// Prompt user for input
rl.question('Please enter your username: ', (username) => {
  sayHello(username);
  rl.close(); // Close the readline interface
});
