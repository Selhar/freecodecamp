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
const ThreadModel = require('./models/Thread');

mongoose.connect("mongodb://localhost:27017/anonymous-imageboard");

server.use(helmet({
    referrerPolicy: true,
    referrerPolicy: {
        policy: 'same-origin'
    }
}));

server.use('/public', express.static(root + '/public'));
server.use(body_parser.json());
server.use(body_parser.urlencoded( {extended: true} ));



/*
for the record this is horrible design 
don't test stuff in 2 completely separate implementations, it kills the purpose of testing
i'm doing it because i was dumb and didn't realize 
my back end wouldn't work with fron end + testing (tests use json response, front end returns html). 
I did the back end first without even considering this possibility.


        **  Uncomment these for testing  **

server.get(api_root, thread_controller.fetch); 
server.get(api_root+':thread_id', thread_controller.fetchById);
server.post(api_root, thread_controller.create); 
server.delete(api_root, thread_controller.remove);
server.put(api_root, thread_controller.report);

//replies
server.post(api_root+':thread', replies_controller.create); 
server.put(api_root+':thread_id', replies_controller.report);
server.delete(api_root+':thread_id', replies_controller.remove);

*/

server.get('/', (request, response) => {
    ThreadModel.find({})
                .select('_id creation_date last_post text title replies')
                .limit(10).exec((error, threads) => {
        if(error){
            throw error;
        }else if(threads){
            response.render(root + '/views/board.ejs', {data: threads});
        }
    });
});
server.get('/:id', (request, response) => {
    response.render(root + '/views/thread.ejs');
});

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
