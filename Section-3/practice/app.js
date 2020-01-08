const http = require('http');
const routes = rewuire('./routes');

const server = http.createServer(routes);

server.listen(8080);