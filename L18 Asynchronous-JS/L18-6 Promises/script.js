/**
 * A promise is an object that represents, eventual completion or failure of an
 * operation. This solves the problem of callback hell(multiple nested callbacks).
 * A promise makes the code asynchronous and non-blocking.
 */

// Creating promise using promise constructor.
/**
 * Promise constructor accepts two objects, resolve and reject.
 * resolve -> we call this, when the operation is successful.
 * reject -> we call this, when the operation is unsuccessful.
 */

const promise = new Promise((resolve, reject) => {
  // This function(constructor would run as a normal method, when we instantiate an object)
  // Do some async tasks here.
  setTimeout(() => {
    console.log('Async Task Completed');
    resolve();
  }, 2000);
  // All sync tasks would run synchronously.
});

// Handling the promise
promise.then(() => console.log('Promise Fulfilled'));

const getUser = new Promise((resolve, reject) => {
  // This function(constructor would run as a normal method, when we instantiate an object)
  // Do some async tasks here.
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: 'Kritika', age: 23 });
    } else {
      reject('Something went wrong'); // if the error is not catched by the promise, then it will appear as uncaught error in the console.
    }
  }, 1000);
  // All sync tasks would run synchronously.
});

getUser
  .then((user) => console.log(user))
  .catch((err) => console.log(err))
  .finally(() => console.log('The promise has been resolved or rejected')); // runs not matter what
