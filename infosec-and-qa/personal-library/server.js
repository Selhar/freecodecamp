/* 
    Author: Selhar
    Date: 2017
    Contact: selhar@protonmail.com
    License: GPL
*/

const express = require('express');
const helmet = require('helmet');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const server = express();
const root = process.cwd();
const api_root = '/api/books/';
const library = require('./controllers/book/index');

mongoose.connect("mongodb://localhost:27017/personallibrary");

server.use(helmet({
    noCache: true
}));

server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded( {extended: true} ));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});

server.post(api_root, library.create);
server.post(api_root+':id', library.createComment);
server.delete(api_root+':id', library.remove);
server.get(api_root, library.fetch);
server.get(api_root+':id', library.fetchById);


server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
