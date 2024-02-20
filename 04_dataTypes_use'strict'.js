// In JavaScript, there are several data types that can be categorized into two main 
// categories: primitive data types and non-primitive (reference) data types.

// Primitive Data Types:

// Number: Represents numeric values. It can be an integer or a floating-point number.
// String: Represents a sequence of characters, enclosed within single (''), double ("") or backtick (``) quotes.
// Boolean: Represents a logical value indicating true or false.
// Undefined: Represents a variable that has been declared but not assigned a value.
// Null: Represents the intentional absence of any object value.
// Symbol (ES6): Represents a unique identifier, introduced in ES6.

 
// Non-primitive (Reference) Data Types:

// Object: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be of any 
// data type, including other objects, functions, and arrays.
// Array: Represents a list-like object containing elements indexed by sequential integer keys.
// Function: Represents a callable object that can be invoked to perform a task or return a value.
// Date: Represents a date and time value.
// RegExp: Represents a regular expression object for pattern matching and manipulation.
 
// JavaScript is a dynamically typed language, meaning you don't have to explicitly declare the data type of a variable.
// The type of a variable is determined dynamically at runtime based on the value assigned to it. Additionally, JavaScript
// is a loosely typed language, allowing variables to hold values of any data type and allowing implicit type coercion in certain operations.

// we can check data type of any variable using typeof methods

********************************************************************************************************************************************
 
testing something

*/

'use strict' // treat all js code as newer version

// In JavaScript, "use strict"; is a directive that enables strict mode within a script or a function. Strict mode helps catch common coding errors 
// and discourages potentially problematic syntax, which can lead to more robust and less error-prone code. Here's how you would use it:

"use strict";

function myFunction() {
  x = 10; // This will cause an error in strict mode because 'x' is not declared
  return x;
}

console.log(myFunction());

// In this example, without strict mode, x = 10; would create a global variable x. However, in strict mode, it throws a reference error because x 
// is not declared with var, let, or const.

// alert(3 +3) this works only in browsers

// console.log(3 +3); console.log(shiv); // this is a bad practice

let name = 'shivsundar'
let age = '22'
let isLoggedIn = true


console.log(typeof null);
