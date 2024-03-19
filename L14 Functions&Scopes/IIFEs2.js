// const user = 'Kritika'; // This variable can't be declared here, as this has already been created inside IIFEs.js.
// console.log(user);

// we can create an IIFE,
(function () {
  const user = 'Kritika'; // const is function-block scoped.
  console.log(user);
})();

((name) => {
  console.log(`Hello ${name}`);
})('John'); // can pass params in an IIFE.
