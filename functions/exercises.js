//1. what does this log to the console? does executing the foo function affect
//the output? why or why not?
let bar = 1;
function foo() {
  let bar = 2;//this let makes this bar variable have local scope.
}

foo();
console.log(bar);
/* this logs 2 to the console because the foo function is called before the
console.log(bar); statement so bar is changed to 2. If the foo function would be
called after the console.log statement, then bar would be 1 and it would log 1.*/
//^ wrong because bar in the foo function has local scope which means the console
//statement logs 1. if you were to call the foo function in the console statement
//it would log 2--console.log(foo());

//2. add a function to the greeter.js program that solicits first and last names
//and returns a string. Use string values to greet user with their full name.
function getName(prompt) {
  let name = prompt(prompt);
  return name;
};

let firstName = getName("What is your first name?");
let lastName = getName("What is your last name?")

console.log(`Hello, ${firstName} ${lastName}!`);


//3. Write a propgram that uses a multiply function to multiply two numbers and
// returns the result. Ask user to enter the numbers and output them and the
// result as an equation. mine below:
function multiply(number1, number2) {
    let equation = `${number1} * ${number2} = ${number1*number2}`;
    return equation;
}

function getNumbers(prompt) {
  let number = prompt(prompt);
  return number;
}

let prompt1 = getNumber("Enter the first number");
let prompt2 = getNumber("Enter the second number");

console.log(multiply(prompt1, prompt2));
//theirs:
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

//4. What does the following code log to the console?
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
//nothing because the return statement runs before the console.log statement which
//terminates the program.

//5. What does the following code log to the console?
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
//this one doesn't log anything either. It returns 'Yipeee!!!!' but there isn't
// a console statement so nothing is logged.
