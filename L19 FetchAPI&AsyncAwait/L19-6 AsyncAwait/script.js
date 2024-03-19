const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 });
  }, 2000);
});

promise.then((data) => console.log(data));

/* 
For Async Await, there has to be an async function
which returns a promise.
We use await keyword, to get reponse from some async operation.
*/

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

function getUsers() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
}

getUsers().then((res) => console.log(res));

async function getUsersAsync() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
}

getUsersAsync().then((data) => console.log(data));

// Try Catch to handle errors in Async Await.

try {
  console.log(x); // the error will be catched by catch block
} catch (err) {
  console.log(err); // the error is caught here.
}

function double(number) {
  if (isNaN(number)) throw new Error(number + ' is not a number');
  return number * 2;
}

try {
  const y = double('hello');
  console.log(y);
} catch (err) {
  console.log(err);
}

async function getUsersAsyncError() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todo');
    console.log(res);
    if (!res.ok) throw new Error("Couldn't fetch results");
    const data = await res.json();
    console.log(data); // {}, if error is not thrown
  } catch (err) {
    console.log(err); // Error thrown in try block will be displayed as uncaught error, if catch block is not used.
  }
}

getUsersAsyncError();
/** Getting Multiple promises using async await */
