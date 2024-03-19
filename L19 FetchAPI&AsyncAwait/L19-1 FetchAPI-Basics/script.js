/**
 * Fetch API is an alternative way of making HTTP request to the server,
 * unlike xhr, it returns a promise that needs to be handled to get the response.
 */

// fetch method is available in the window object just like xhr
/**
 * The first response by the fetch API, would be a response object which has a
 * body property that contains our data in a readable stream.
 * To get the actual data, we use .json() method on the response object,
 * which returns a promise which resolves with the result of parsing the
 * body text as JSON
 * https://developer.mozilla.org/en-US/docs/Web/API/Response/json
 */
fetch('./movies.json') // receiving json a response
  .then((res) => {
    console.log(res);
    return res.json();
  }) // the first the returns a response object.
  .then((data) => console.log(data));

// receiving text as response
fetch('./test.txt')
  .then((res) => res.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/kritika2000') // GET Request, if not method is specified
  .then((res) => res.json())
  .then((data) => {
    document.querySelector('h1').textContent = data.login;
  });
