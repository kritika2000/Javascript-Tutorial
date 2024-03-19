const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(req.url);
  if (url === '/') {
    // res.writeHead(200, {
    //   'content-type': 'text/html',
    // });
    // res.end('<h1>Welcome</h1>');
    fs.readFile('index.html', (err, result) => {
      if (err) {
        res.writeHead(500, {
          'content-type': 'text/html',
        });
        res.end('Internal Server Error');
      }
      res.end(result);
    });
    return;
  }
  res.end('Hello');
});

server.listen('5000', () => {
  console.log('Server Started Listening on 5000');
});
