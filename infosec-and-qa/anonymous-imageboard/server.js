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
The freecodecamp test suite require the server response to be on JSON
I can't return JSON to render a page, thus 2 pages were created
This curriculum is still in beta so this might be an oversight
either way, to test the project just uncomment beolw.


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

server.get(api_root, (request, response) => {
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


server.get(api_root+'/delete', (request, response) => {
    ThreadModel.findOneAndRemove({
        _id: request.body.thread_id,
        password: request.body.password
    }, (error, thread) => {
        if(error)
            throw error
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
