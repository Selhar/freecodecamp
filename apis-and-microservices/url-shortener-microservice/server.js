const express = require('express');
const server = express();
const root = process.cwd();
const url_controller = require('./controllers/new_url');

server.use('/public', express.static(root + '/public'));

server.get('/api/shorten/:url', url_controller.new_url);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});
