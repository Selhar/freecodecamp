/* 
    Author: Selhar
    Date: 2017
    Contact: selhar@protonmail.com
    License: GPL
*/

const express = require('express');
const server = express();
const root = process.cwd();
const helmet = require('helmet');
const body_parser = require('body-parser');

let converter = require('./controllers/converter');

server.use(helmet());
server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: true }));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.get('/api/convert/:data', converter.convert);
//second one added for the front end version
server.get('/api/convert', converter.convert);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server;