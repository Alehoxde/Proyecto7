const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'hola mundo' }));
});
server.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));