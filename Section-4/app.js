const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(5432);






/* TYPES OF ERRORS */
// Syntax Errors: errors in the syntax of your code
// Runtime Errors: When you tried to execute some code that breaks
// Logical Errors: When you don't get an error but your app just doesn't seem to run.