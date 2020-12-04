const http = require('http');
const fs = require('fs');

const routes = require('./routes')

// runs for every req to server
// function rqListener(req, res) {

// }

// http.createServer(rqListener);

const server = http.createServer(routes);

server.listen(3000);