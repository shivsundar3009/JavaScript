const name = "Shivsundar"
const repoCount = 50

// console.log(name + repoCount + " Value");

// backticks " `` " was introduced in es6 version 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// STRING methods

// It does not change the original string


// console.log(gameName.length); // to get the length of the string

// console.log(gameName.toUpperCase()); // to convert the string to UPPER CASE

console.log(gameName.charAt(2)); // to get CHAR at given Index
console.log(gameName.indexOf('t'));

// slice(indexStart, indexEnd) // last index isn't included
const newString = gameName.substring(0, 4)
console.log(newString);


// slice(indexStart)
// slice(indexStart, indexEnd)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
