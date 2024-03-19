/**
 * Promise Chaining to address callback hell.
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

getData('./movies.json', (data) => {
  console.log('Movies: ', data);
  getData('./actors.json', (data) => {
    console.log('Actors: ', data);
    getData('./directors.json', (data) => {
      console.log('Directors: ', data);
    });
  });
});

// Implement the above using promise chaining
function getDataPromise(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        resolve(data);
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000 + 1000));
  });
}

getDataPromise('./movies.json')
  .then((movies) => {
    console.log('Movies: ', movies);
    return getDataPromise('./actors.json');
  })
  .then((actors) => {
    console.log('Actors: ', actors);
    return getDataPromise('./directors.json');
  })
  .then((directors) => console.log('Directors: ', directors))
  .catch((err) => console.log(err));

// Implement using Promise.all

const moviesPromise = getDataPromise('./movies.json');
const actorsPromise = getDataPromise('./actors.json');
const directorsPromise = getDataPromise('./directors.json');

// This method takes an array of promises and executes all of them,
// once every promise gets resolved, then we can get the response in an array for each promise.
Promise.all([moviesPromise, actorsPromise, directorsPromise]).then((data) => {
  console.log(data); // returns an array where each element is the data resolved by each promise in the array.
});
