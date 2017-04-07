const express = require('express');
const mongoose = require('mongoose');
const server = express();
const root = process.cwd();
const controller = require('./controllers/index');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

server.use('/public', express.static(root + '/public'));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});
