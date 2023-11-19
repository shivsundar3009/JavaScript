// ++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive) we get a copy of the value

let youtubeName = "zsshiv"

let anotherName = youtubeName

console.log(anotherName);

anotherName = 'shivsundar'

console.log(anotherName);

// Heap (Non-Primitive) we get reference to original value 

let obj1 = {
    name:'shiv',
    age:21,
}
console.log(obj1);

let obj2 = obj1

obj2.age = 25

console.log(obj1);
