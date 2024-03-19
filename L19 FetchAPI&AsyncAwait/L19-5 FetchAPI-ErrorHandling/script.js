// http://httpstat.us/
fetch('http://httpstat.us/200')
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data); // 200 OK
  });

fetch('http://httpstat.us/404')
  .then((response) => {
    if (!response.ok) throw new Error('Request Failed'); // the error will be catched by catch block
  })
  .then(() => {
    console.log('Success');
  })
  .catch((error) => {
    console.log(error);
  });

/* 
With Fetch API, to catch errors we have to manually check if the
error has occured. For errors, then will execute.
// Catch will run on network error
*/

fetch('http://httpstat.us/500')
  .then((response) => {
    if (response.status === 404) throw new Error('Not Found');
    else if (response.status === 500) throw new Error('Server Error');
  })
  .then(() => {
    console.log('Success');
  })
  .catch((error) => {
    console.log(error);
  });
