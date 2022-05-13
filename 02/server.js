const http = require('http');

let requestsCount = 0;

const server = http.createServer((request, response) => {

    requestsCount ++
    response.write('yuranius: '+ requestsCount)
    response.end()
});

server.listen(3003)