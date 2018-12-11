const app = require('./backend/app');
const http = require('http');

const hostName = '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);
server.listen(port, hostName, () => {
  console.log(`serve running at ${hostName}:${port}/ `);
})

