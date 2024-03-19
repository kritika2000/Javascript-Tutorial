/**
 * Callback hell occurs when we want to execute operations
 * one after the another.
 */
function getData(endpoint, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      callback(data);
    }
  };
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000 + 1000));
}

// These functions would run give results randomly, depending on the number of ms allocated to them.
getData('./movies.json', (data) => {
  console.log('Movies: ', data);
  getData('./actors.json', (data) => {
    console.log('Actors: ', data);
    getData('./directors.json', (data) => {
      console.log('Directors: ', data);
    });
  });
});
console.log('Hello');
// getData('./actors.json');
// getData('./directors.json');
