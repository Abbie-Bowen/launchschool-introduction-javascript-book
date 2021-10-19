//1. how to access the name of the person?
// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };
// // person.name or person['name'].
//
// //.2 which are valid keys for an object?
//
//     1 //no
//     '1' //yes
//     undefined //no
//     'hello world' //yes
//     true //no
//     'true' //yes
// //nevermind, all listed values are valid--because javascript coerces the
// //nonstring values into strings.
//
// //3. Use object literal syntax to create an object that behaves as an array in a
// // for statement. the object should contain at least 3 elements.
// let myArray = {
//   0: "this is the first value",
//   1: "this is the second value",
//   2: "this is the third value.",
//   length: 3 //i didn't get this part.
// };
//
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }
//
// //4. create an array from the keys of the obj below with all of the keys
// //converted to uppercase. don't mutate obj.
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };
// //mine:
// let keys = Object.keys(obj);
// let upperKeys = [];
// keys.forEach(key => {
//   let newKey = key.toUpperCase();
//   upperKeys.push(newKey);
// });
// console.log(upperKeys);
// console.log(obj);
// //theirs:
// let objKeys = Object.keys(obj);
// let upperKeys = objKeys.map((key) => key.toUpperCase());
// console.log(upperKeys); // => [ 'B', 'A', 'C' ]
// console.log(obj); // => { b: 2, a: 1, c: 3 }
//
// //5. create a new object names myObj that uses mProtoObj as its prototype
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
//
// let myObj = Object.create(myProtoObj);
//
// //6. which are primative values, objects and neither?
//
// Primative values: 'foo', 3.1415, false, undefined
// Objects: ['a', 'b', 'c'], function bar() { return: 'bar';}, { a:1, b:2 }
// neither: foo
//
// //7. add a qux proptery with value 3 to myObj.
// myObj.qux = 3;
// //do the following code snipets produce the same output?
// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });
//
// for (let key in myObj) {
//   console.log(key);
// }

// object.keys only returns an object's own keys, not the prototype's keys but
// a for/in loop returns the object's own keys AND it's prototype's keys.
// so no, they won't return the same thing. the first snippet will return qux
// and the second will return qux foo bar

//8. create a function that reutns a copy of an object and takes two arguments.
//don't mutate original.

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj1 = copyObj(objToCopy);
console.log(newObj1);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

//mine:
function copyObj(object, keyArray) {
  if (!keyArray) {
    return Object.assign({}, object);
  } else {
    let newObj = {};
    for (let i = 0; i<keyArray.length; i++) {
      newObj[keyArray[i]] = object[keyArray[i]];
    }
    return newObj;
  }
}

//theirs:
function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

//9. what does the following log to the console?
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
//bar(foo, qux) makes foo.a = 'hi' and qux = 'hi' as argument2 but doesn't mutate
//the string assigned to qux. so it logs hi hello

//10. How many primative values are there in the following expression? how many objects?
[1, 2, ["a", ["b", false]], null, {}]
// primative values: 1, 2, 'a', 'b', false, null = 6
// objects: array1= ['b', false] nested in array2 = ["a", [array1]] nested in
// array3=[1, 2, [array2], null, {}], an empty object {} = 4

//11. write some code to replace the value 6 with 606.
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;
