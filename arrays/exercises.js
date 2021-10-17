//1. in the following code what are the final length values for the arrays?
let array1 = [1, 2, undefined, 4]; //4

let array2 = [1];
array2.length = 5; //5 this adds blanks

let array3 = [];
array3[-1] = [1]; //0 "-1":1 isn't a true element

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; //3 it truncates the array

let array5 = [];
array5[100] = 3; //101 length is highest index plus 1

//2. log all even values to the console. mine below:
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
let evenArray = myArray.filter(number => number % 2 === 0);
evenArray.map(number => console.log(number));
//theirs:
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
}
//or
myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});

//3. same but different array:
let myArray1 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray1.forEach( subArray => {
  subArray.forEach( number => {
    if (number % 2 === 0) {
      console.log( number );
    }
  });
});

//4. map to create a new array that says "even" or "odd" for each number in
//the original array
let myArray2 = [ 1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0 ];

let newArray = myArray2.map( number => {
  if (number % 2 === 0) {
    return "even";
  }  else {
    return "odd";
  }
});

console.log(newArray);

//5. write a function that takes an array argument and returns an array that only
//containts the integers from the input array. use the filter method.
function findIntegers(array) {
  return array.filter(thing => Number.isInteger(thing));
}

//6. use map and filter to determine the lenghts of all the elements in an array
//of string values then discard the even values and keep the odd values.
function oddLengths(arr) {
  return arr.map(string => {
    return string.length
  }).filter( stringLength => {
    return (stringLength % 2 !== 0)
  });
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

//7. use reduce to compute the sum of the squares of all of the numbers in an
//array
function sumOfSquares(array) {
  return array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue * currentValue
  }, 0);
}

let newArray3 = [3, 5, 7];
console.log(sumOfSquares(newArray3)); // => 83

//8. write a function similar to the oddLengths function but don't use map or
//filter, use reduce.
function oddLengths2(arr) {
  return arr.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 !== 0) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

//9. witout using for while or do/while write code that checks whether the
//number 3 appers inside these arrays and return true or false.

function isThere3(array) {
  console.log(array.includes(3));
}

//10. replace the 6 with 606 without searching.
arr[1][3]= 606;
