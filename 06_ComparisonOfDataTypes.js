// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true
// console.log("02" > 1); // true

// The reason is that an equality check == and comparisons > < >= <= works differently
// comparisons convert null to a number treating as 0 thats why (3) null >=0 is true and (1) null > 0 is false

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === 

console.log("2" === 2);
