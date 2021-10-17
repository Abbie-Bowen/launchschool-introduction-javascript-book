// 1. modify the age.js program to use a for loops
let age = Number(prompt('How old are you?'));

console.log(`You are ${age} years old.`);
for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}

// 2. Write a function that computes and returns the facorital of a number using
// a for loop.
function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i -= 1) {
    result *= i;
  }
  return result
}


//3. Why is this an infinate loop?
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
//because the while statement resets the counter to 1 on each loop and then it
//adds 1 to equal 2 so the counter doesn't make it into the conditional with the
//break before it is equal to 2 and not greater than 2.

//4. does this produce an error? what does it send to the console?
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
//3rd component is missing but all are optional. it isn't an infinate loop
//because the console statement increments the iterator variable. logs 1-5.

//5. refactor the code. mine below:
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let tries = 0; tries += 1; ) {
  let result = randomNumberBetween(1,6);

  if (result > 2) {
    console.log(`It took ${tries} to get a number greater than 2.`);
    break;
  }
}
//theirs:
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');

//6. reimplement the factorial function using recursion.
function factorial(number) {
  if (number === 1 ) {
    return 1;
  }

  return number * factorial(number - 1);
}
