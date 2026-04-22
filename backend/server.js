const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'hola mundo' }));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
