// Import stylesheets
import './style.css';

//  we have function declarations and expressions, functions start with the function keyword
// followed by a name which you want to call your function normally the function has a camelcasing structure
// followed by a bracket and a paranthesis afterwards
// inside the paranthesis or curly braces you type whatever action you want to create
// after which you call the function by name followed by a bracket

// function decleration
// example 1
function ourFunctionName() {
  console.log(2);
}
ourFunctionName();
// example 2
function ourFunctionName2(nr1, nr2) {
  return nr1 + nr2;
}
console.log(ourFunctionName2(4, 8));
// parameters and arguments: used to dictate the particular function you want your javascript to take on

// function expression has two types
// anonymous function
const ourFunctionExpression = function () {
  console.log(15);
};
ourFunctionExpression();
// arrow function used to condescence our code

// pure function(which is also an arrow function)
let ourFunctionExpression2 = () => console.log(25);
ourFunctionExpression2();

// d/f between function expressions and function declaration:the initial can be called back anytime in the text editor while the former cannot, you must follow it assymetrical
// for function declaration
function fn1() {
  console.log(1);
}

function fn2() {
  console.log(2);
}

fn1();
fn2();

// for function expression
// fn11();
// fn22();
const fn11 = function () {
  console.log(1);
};

const fn22 = function () {
  console.log(2);
};

// class note
function addNumbers(a, b) {
  return a + b;
}
let results = addNumbers(3, 5);
console.log(results);

let myString = 'Hello, world!';
let length = myString.length;
console.log(length);

// ARRAYS
// TO make an array you must declare a variable
// after which you can now log the content of the array
// add content to the arrays, with a comma and a space after the list items
// in arrays the indexing starts from 0
// knowing this is important because thats how you access individual contents of an array
// get the content then using console.log(a[0])
// when you put an element that doesnt exist it just states undefined
// to the properties use the variable name. with the list displayed in the dom
const a = ['a', 'b', 'c', 'd'];
a.push('e');
// with the push you can add any data type be it a string or a number or a boolean
console.log(a);
const b = [
  ['a', 'b'],
  [1, 2],
];
b.push([true, false]);

console.log(b);
//  to get arrays from a nested array
console.log(b[0]);
// to get elements from an array in a nested array
console.log(b[2][1]);
// to change the element and content of an array
b[1] = 2;

let myArray = [1, 2, 3, 'four', true];
console.log(myArray[0]);
console.log(myArray[3]);

myArray[2] = 10;

// console.log(myArray);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
