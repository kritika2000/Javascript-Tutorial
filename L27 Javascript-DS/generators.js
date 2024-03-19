/**
 * Generators are used to create iterators. They are functions
 * which can be paused and resumed.
 * Their defination is followed by an '*'
 */

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

function createTeamIterator1(teams) {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < teams.length
        ? { value: teams[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const it = createTeamIterator1(teams);
console.log(it);

function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const iterator = createTeamIterator(teams);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
/*
for (const team of createTeamIterator(teams)) {
  console.log(team);
}
*/
console.log([...createTeamIterator(teams)]);
