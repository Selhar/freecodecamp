const express = require('express');
const mongoose = require('mongoose');
const server = express();
const root = process.cwd();
const add_url = require('./controllers/Controller_url');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');


mongoose.connect("mongodb://localhost:27017/urlshortener");

server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({'extended': true}));
server.use('/public', express.static(root + '/public'));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});
server.post('/api/shorturl/add', add_url);
server.get('/api/shorturl/:url', add_url); //TODO
server.delete('/api/shorturl/:url', add_url); //TODO

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(port, () => {
    console.log("Listening on port "+port);
});
