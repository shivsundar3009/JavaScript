const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // It pushes dc_heros as a array element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // this concats the array 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] Spread operator we can use multiple arrays to spread

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // returns array as a flat array removes arrays inside array
console.log(real_another_array);

console.log(Array.isArray("Hitesh")) // checks if the value is Array

console.log(Array.from("Hitesh")) // creates array from value

console.log(Array.from({name: "hitesh"})) // interesting // If unable to create array returns Empty Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // creates array of values or variables


