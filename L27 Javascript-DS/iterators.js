/* 
Iterators are objects that define a sequence and 
return a value on completion. They implement the
Iterator Protocol by having a next method which returns 
an object having value and done properties.
*/

// app is an iterator.
const app = {
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
  //   nextIndex: 0,
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  //   next() {
  //     if (this.nextIndex >= this.teams.length) {
  //       return { done: true };
  //     }
  //     const returnValue = {
  //       value: this.teams[this.nextIndex],
  //       done: false,
  //     };
  //     this.nextIndex++;
  //     return returnValue;
  //   },
};

// console.log(app.next());
/*
let res = app.next();
while (!res.done) {
  console.log(res.value);
  res = app.next();
}
*/
// Iterate over the app object using Symbol.iterator(built-in iterator)
const iterator = app[Symbol.iterator]();
console.log(iterator);
// Will gibve values now, as we've defined iterator.
for (const team of app) {
  console.log(team);
}
