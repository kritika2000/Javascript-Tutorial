function first() {
  const x = 100;
  function second() {
    const y = 200;
    // x is accessible here
    console.log(x + y);
  }
  // y is not accessible here.
  second();
}

first();

if (true) {
  const x = 100;
  if (x === 100) {
    const y = 200; // const is block scoped
    console.log(x + y); // x is accessible here.
  }
}
