/*
 * HTTP is a protocol for sending and receiveing data on the web.
 * HTTP is a client/server protocol. Requests are initiated by the client
 * and the server will respond with a response.
 * The response could be HTML, CSS, JS files, images, and other
 * resources as well as data formatted as XML or JSON.
 *
 * HTTP Methods:-
 * 1. GET - Fetch data from the server.
 * 2. POST - Send data to the server.
 * 3. PUT & PATCH - Update data on a server.
 * 4. DELETE - Delete data from the server.
 *
 * HTTP Status Codes:-
 * 100 -> continue()
 * 200 -> success(200), created(201), 204(no content, deleting data(not returning anything))
 * 300 -> redirects(301 -> resource moved), (304 -> The 304 Not Modified HTTP
 * server response code indicates that the requested resource
 * has not been modified since the last time it was loaded,
 *  and there's no need to transfer it again. For browsers,
 *  this means that the cached version of the resource can
 * be shown to the user.)
 * 400 -> client error(400 -> bad request,
 * 401 -> unauthorized(not authenticated), 403 -> Forbidden(not authorized to
 * access the resource),
 * 404 -> Not Found)
 * 500 -> Internal Server Error.
 */

/**
 * Making requests from javascript.
 * 1. Older Method - XMLHttpRequest:- this object/api is provided by the browser,
 *    to commmunicate with the server.
 * 2. We use mostly fetch API now a days, which is also available
 * in the browser.
 */

/** XMLHttpRequest Object 
  A built-in browser object that allows us to make HTTP requests. We can make
  requests to servers without having to refresh the page. This allows us
  to make out web pages more dynamic.
  These days, we use the fetch API over XHR, however, it is still
  important to know how to use.
  The data is exchanged as JSON(preferred) or XML.
*/

//require('./movies.json'); // won't work in browser, as it is method in node js.
/* Also, we can't use import statement to import JSON yet,
  so, we need to make a fetch request to this file, to get data here.
  XHR request status.
  https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
*/

const xhr = new XMLHttpRequest();

xhr.open(
  'GET',
  'http://127.0.0.1:5500/Javascript-Travesry-Media/L18%20Asynchronous-JS/L19-3%20HTTP-Requests/movies.json' // same as './movies.json, as we're making to request to our own server.
);

xhr.onreadystatechange = function () {
  // Runs every time the ready state is getting chnaged(from 2 - 4)
  console.log(this.readyState, this.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach((movie) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send(); // send the request.
