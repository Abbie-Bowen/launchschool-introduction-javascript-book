//1. what does this log to the console?
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
//this will log [1,4,3]. array1 and array2 both reference or point at the same
//location in memory and because we're not changing the reference, we're changing
//the contents, array2 still points at array1 even after the contents change.

//2. what does the following error message and stack trace tell you?
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
//it says that in the file at path /Users/wofly/tmp/exercise2.js and line 4 column 15,
//the greeting variable is not defined before attempting to console.log it.

//3 write some code to output the square root of 37.
console.log(Math.sqrt(37));

//4. given a list of numbers, write some code to find an display the largest
//numeric value in the list.
function sortNumbers(array) {
  array.sort((a, b) => a - b);
  console.log(array[array.length-1]);
}

//theirs:
console.log(Math.max(numbers));

//5. what does this do?
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
//it returns an ordered list of substrings that have been split apart at each
//space, then had the order reversed, and then each substring is replaced by
//number representing their length.

//6. write a function that searches an array of strings for every elelemt that
//matches the regex given by its arguent. the function should return all
//matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(arrayOfStrings, regex) {
  let matches = [];
  for (let word in arrayOfStrings) {
    let result = regex.test(word);
    if (result) {
      matches.push(result);
    }
  }
  return matches;
}

//their solution 2:
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

//7. what is exception handling and what problem does it solve?
//Javascript doesn't always throw an error or halt the program when something
//goes wrong. writing code to handle exceptions or throw an error when something
//happens means that an error is obvious and either the program can continue
//after throwing an error or a user can make an adjustment and run the code again.

//8. challenging exercise. write a function that returns true if the value
//passed to it is Nan and false if it is not.
function isNotANumber(maybeANumber) {
  return /^[0-9]*$/.test(maybeANumber);
}

console.log(isNotANumber(9));

//theirs:
function isNotANumber(value) {
  return value !== value;
}

//9. write a function that will return true if the argument is -0 and false if
//it is any other numbers
function negativeZero(maybeItsNegative) {
  if (1/maybeItsNegative === -Infinity) {
    return true
  } else {
    return false
  }
}

//10. What gets returned by y++?
> let x = "5"
> x = x + 1
= "51"

> let y = "5"
> y++

//didn't get this one-- return value is numberic 5. javscript coerces "5" to a
//number and increments it to 6 because the y++ returns the original value of y
//not the incremented value.
