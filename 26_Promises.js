In JavaScript, promises are objects representing the eventual completion or failure of an asynchronous operation and
its resulting value. They are a core feature introduced in ECMAScript 6 (ES6) to handle asynchronous operations more 
effectively compared to traditional callback functions.

Here's a basic overview of promises in JavaScript:

1. Creating Promises: You can create a promise using the Promise constructor. It takes a function with two parameters,
  resolve and reject, which are themselves functions. Inside this function, you perform your asynchronous task and 
  call resolve(value) when the task is successful, or reject(error) when it encounters an error.

  const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  if (/* operation successful */) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
 });


 Promise States:
 
 Pending: Initial state, neither fulfilled nor rejected.
 Fulfilled: The operation completed successfully.
 Rejected: The operation failed.


2. Consuming Promises: You consume a promise using the then() method, which takes two optional callback functions: 
   one for handling the fulfillment (onFulfilled) and another for handling rejection (onRejected).   

   myPromise.then(
  (result) => {
    console.log('Promise resolved:', result);
  },
  (error) => {
    console.error('Promise rejected:', error);
  }
);
   

