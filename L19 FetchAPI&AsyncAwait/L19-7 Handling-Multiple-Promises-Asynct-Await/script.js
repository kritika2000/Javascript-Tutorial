/**
 * Callback hell occurs when we want to execute operations
 * one after the another.
 */
/*
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
*/
/*
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
*/

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error('Request Failed');
        return res.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}

getData('./movies.json')
  .then((data) => {
    console.log(data);
    return getData('./actors.json');
  })
  .then((data) => {
    console.log(data);
    return getData('./directors.json');
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getDataAsync() {
  try {
    // const movies = await getData('./movies.json');
    // const actors = await getData('./actors.json');
    // const directors = await getData('./directors.json');
    let movies = await fetch('./movies.json');
    if (!movies.ok) throw new Error('Movies Request Failed');
    movies = await movies.json();
    let actors = await fetch('./actors.json');
    if (!actors.ok) throw new Error('Actors Request Failed');
    actors = await actors.json();
    let directors = await fetch('./directors.json');
    if (!directors.ok) throw new Error('Directors Request Failed');
    directors = await directors.json();
    console.log(movies, actors, directors);
  } catch (err) {
    console.log(err);
  }
}

getDataAsync();

async function getAllDataAsync() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);
  /*
  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();
  */
  await Promise.all([
    moviesRes.json(),
    actorsRes.json(),
    directorsRes.json(),
  ]).then(([movies, actors, directors]) =>
    console.log(movies, actors, directors)
  );
}

getAllDataAsync();
