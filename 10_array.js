// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // pushes 6 to the end

// myArr.push(7)

// myArr.pop()  // removes last element

// myArr.unshift(9) // adds value to first Index

// myArr.shift() // removes first element

// console.log(myArr.includes(9)); returns boolean value

// console.log(myArr.indexOf(3)); returns index of given value if present else returns -1

// const newArr = myArr.join() // converts array to string

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A ", myArr);

// Does not modify original Array
const myn1 = myArr.slice(1, 3)
// prints start -> end (not Included)
console.log(myn1);
console.log("B ", myArr);

// Modifies the Original Array
const myn2 = myArr.splice(1, 3)
// prints start -> end (Included)
console.log("C ", myArr);
console.log(myn2);
