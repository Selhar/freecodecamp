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
const api_root = '/';
const thread_controller = require('./controllers/thread/index');
const replies_controller = require('./controllers/replies/index');

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

// server.get('/', (request, response) => {
//     response.render(root + '/views/board.ejs');
// });
server.get('/:id', (request, response) => {
    response.render(root + '/views/thread.ejs');
});

//threads
server.post(api_root, thread_controller.create); 
server.get(api_root, thread_controller.fetch); 
server.delete(api_root+':thread_id', thread_controller.remove);
server.put(api_root+':thread_id', thread_controller.report);

//replies
server.post(api_root+':thread', replies_controller.create); 
server.get(api_root+':thread_id', replies_controller.fetch);

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
