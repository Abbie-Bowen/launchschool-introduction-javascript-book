//1. Greet 'Victor' 3x without hardcoding 'Victor' in each string
let name = "Victor";
console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);

//2. Take current age, calculate & report future age.
let age = 20;
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

//3. What happens and why?
{
  let foo = 'bar';
}

console.log(foo);
// foo is only defined in block scope, so foo doesn't exist in the console.log
//statement and will throw an error.

//4. What happens and why?
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
// the first 3 console.log statements will output with Victor but you can't
//reassign a const variable so then an error will be thrown and the last 3 lines
//wont be ran.

//5.what happens and why?
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
//first it will log 'bar' because it is initialized before the block. a new foo
//varible is initialized in the block but it goes out of scope and foo goes back
//to being 'bar';

//6. Will this throw an error?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
//no because one exists outside the block and one inside
