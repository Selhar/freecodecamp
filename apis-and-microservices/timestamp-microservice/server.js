const express = require('express');
const server = express();
const root = process.cwd();
server.use('/public', express.static(root + '/public'));
server.set('view engine', 'ejs');

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.get('/api/timestamp/:date?', (request, response) => {
    let timestamp = new Date();
    let date = timestamp.toUTCString();
    response.json({'Timestamp': timestamp.getTime(), 'date': date});
});

server.listen(process.env.PORT || 3000);
