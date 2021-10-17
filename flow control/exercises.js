//1. What do the following expressions evaluate to?
false || (true && false); //false (true && false is false, so false || false is false)
true || (1 + 2); //true (1+2=3, true || 3 is true because only 0 is falsy)
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); //false because javascript stops evaluating at false.
(1 + 2) && true; // true
(32 * 4) >= 129; //true 172 >= 129 //this is false, because the () don't go first?
false !== !true; // false because false === false
true === 4; // false, boolean vs number
false === (847 === '847'); //true
false === (847 == '847'); //false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
  // (true) || false; which is true;

//2. Write a function evenOrOdd that determines whether its argument is an even
// number. if it is, log 'even' else log 'odd';
function evenOrOdd(number) {
  if (typeof(number) === 'number') {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('Please enter a number.');
  }
};

//3. add validation to check if number is an integer above. mine above. theirs below
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

//4. What does the following log to the console?
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// it logs every console message after case 113 because there isn't a break
//at the end of each case. called "fall through behavior"

//5. refactor as an if statement instead:
return foo() ? 'bar' : qux();
if (foo()) {
  return 'bar';
} else {
  return qux();
}

//6. What does this output to the console?
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
//it outputs "not empty" because the array exists and isn't falsy.

//7. wite a function that takes a string as an argument and returns all caps
//version of string when the string is longer than 10 characters. otherwise it
// returns the given string.
function stringChange(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}
console.log(stringChange('string'));

//8. Write a function that logs wether a number is between 0 and 50 (inclusive),
//between 51 and 100 (inclusive), greater than 100, or less than 0.

function numberRange(number) {
  switch (number) {
    case (0 <= number && number <= 50):
      console.log(`${number} is between 0 and 50`);
      break;
    case (51 <= number && number <= 100):
      console.log(`${number} is between 51 and 100`);
      break;
    case (number > 100):
      console.log(`${number} is greater than 100`);
      break;
    case (number < 0):
      console.log(`${number} is less than 0`);
      break;
    default:
      console.log(`Sorry, we couldn't calculate that.`);
  }
}
