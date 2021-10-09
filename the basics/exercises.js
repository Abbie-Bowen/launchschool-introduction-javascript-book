// 1. Concat strings to make your name.
"Abbie " + "Bowen"

/* 2. Use arithmetic operators to determine the individual digits
of a 4 digit number */
let n = 4936;
let ones = n % 10;

n = ( n - ones ) / 10;
let tens =  n % 10;

n = ( n - tens ) / 10;
let hundreds = n % 10;

let thousands = ( n - hundreds ) % 10;

/* 3. Identify the datatype for each of the following values:

'true' - string
false - boolean
1.5 - number
2 - number
undefined - undefined
{ foo: 'bar' } - object */

/* 4. Explain why this code logs '510' instead of 15 */
console.log('5' + 10);
/* the first value '5' is a string so Javascript will coerce the second value
 which is 10, from a number to a string because of the + expression.
 so the full string value when  concatonated is '510' */

 //5. refactor the above code so it logs 15 instead using explicit coercion.
 console.log(Number('5') + 10);

 /* 6. Use the template literal syntax along with the expression Number('5')+10
  to log the following syntax to the console: 'The value of 5 + 10 is 15.' */
  console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

  /* 7. will an error occur if you try to access an array element with an index
  that is >= the length of the array?
  Javascript won't throw an error, it will return undefined. */

  //8. Create an array called names that contains a list of pet names.
  let petNames = [ 'asta', 'butterscotch', 'pudding', 'neptune', 'darwin' ];

  //9. create an object with name/animal type value keys.
  let pets = {
    asta:'dog',
    butterscotch:'cat',
    pudding:'cat',
    neptune:'fish',
    darwin:'lizard'
  };

  //10. what value does the following expression evaluate to?
  'foo' === 'Foo'; //false

  //11. what value does this evaluate to?
  parseInt('3.1415'); //3

  //12. What does this evaluate to?
  '12' < '9' //NaN --interesting, this one is true because it does a character by
  //character comparison with strings i.e. 1<9 so 12 must be less than 9.
