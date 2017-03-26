const express = require('express');
const server = express();
const root = process.cwd();
server.use('/public', express.static(root + '/public'));

server.get('/', (request, response) => {
    response.sendFile(root + '/views/index.html');
});

server.get('/api/timestamp/:date?', (request, response) => {
    response.send("1");
});

server.use( (request, response, next) => {
    response.send("2");
});

server.listen(process.env.PORT || 3000);
