const express = require('express');
const server = express();
const root = process.cwd();
server.use('/public', express.static(root + '/public'));

server.get('/', (request, response) => {
    response.sendFile(root + '/views/index.html');
});

server.get('/api/timestamp/:date?', (request, response) => {
    let timestamp = new Date();
    let date = timestamp.toUTCString();
    response.json({'timestamp': timestamp, 'Date': date});
});

server.listen(process.env.PORT || 3000);
