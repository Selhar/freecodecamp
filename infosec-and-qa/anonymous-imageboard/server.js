const express = require('express');
const helmet = require('helmet');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const server = express();
const root = process.cwd();
const api_root = '/api/anonymous-imageboard/';
const index = require('./controllers/index');

mongoose.connect("mongodb://localhost:27017/anonymous-imageboard");

// server.use(helmet({
//     referrerPolicy: true,
//     referrerPolicy: {
//         policy: 'same-origin'
//     }
// }));

server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded( {extended: true} ));

server.get('/', (request, response) => {
    response.render(root + '/views/index.ejs');
});
server.get('/:board', (request, response) => {
    response.render(root + '/views/board.ejs');
});
server.get('/:board/:id', (request, response) => {
    response.render(root + '/views/thread.ejs');
});

//server.post(api_root, index.create);
//server.delete(api_root, index.remove);
//server.get(api_root, index.fetch);
//server.put(api_root, index.update);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
