const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode(200);
    res.end();
  }
});

server.listen(3001, () => {
  console.log('Server on localhost 3001');
});
