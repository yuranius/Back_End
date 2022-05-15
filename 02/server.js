const http = require('http');

let requestsCount = 0;

const server = http.createServer((request, response) => {
    
    requestsCount ++
    response.write('yuranius: '+ requestsCount)
    response.end()
});

console.log('сервер запущен на порту 3003');

server.listen(3003)