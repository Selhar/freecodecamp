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
const ObjectId = require('mongodb').ObjectID;

mongoose.connect("mongodb://localhost:27017/anonymous-imageboard");

server.use(helmet({
    referrerPolicy: true,
    referrerPolicy: {
        policy: 'same-origin'
    }
}));

server.use('/public', express.static(root + '/public'));
server.use(body_parser());
server.use(body_parser.json());
server.use(body_parser.urlencoded( {extended: true} ));



/*
The freecodecamp test suite require the server response to be on JSON
I can't return JSON to render a page, thus 2 server responses were created
They're pretty much similar, but tests should never be done this way. (the official solution is also similar)

This curriculum is still in beta so this might be an oversight
either way, to test the project just uncomment below.

Also, routes are slightly different because you can't DELETE through http forms


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


//Get complete thread list
server.get(api_root, (request, response) => {
    ThreadModel.find({})
                .select('_id creation_date last_post text title replies')
                .sort({creation_date: '-1'})
                .limit(10).exec((error, threads) => {
        if(error){
            throw error;
        }else if(threads){
            response.render(root + '/views/board.ejs', {data: threads});
        }
    });
});

//Show a single thread
server.get(api_root+':thread_id', (request, response) => {
    ThreadModel.findById(request.params.thread_id)
                .select('_id creation_date last_post text title replies')
                .exec((error, threads) =>{
        if(error){
            return callback(error);
        }else if(threads){
            return callback(null, threads);
        }else{
            return callback("There isn't a thread with this ID.");
        }
    });
});

//Make a new thread
server.post(api_root, (request, response) => {
    let url_user_came_from = request.protocol + '://' + request.get('Host');
    
    let new_thread = new ThreadModel({
        title: request.body.title,
        text: request.body.text,
        password: request.body.password
    });

    new_thread.save((error) => {
        if(error){
            throw error;
        }
        response.redirect(url_user_came_from+'/'+new_thread._id);
    });
});

//Make a new comment
server.post(api_root+':thread', (request, response) => {
    let url_user_came_from = request.protocol + '://' + request.get('Host');
    let id = new ObjectId();
    ThreadModel.findByIdAndUpdate(request.body.thread_id, {
        $push: {replies: {
            text: request.body.text, 
            password: request.body.password,
            _id: id
        }}
    }, (error, data) => {
        if(error)
            throw error;
        else
            response.redirect(url_user_came_from+'/'+id);
    })
});

//Delete a thread
server.get(api_root+'delete', (request, response) => {
    let url_user_came_from = request.protocol + '://' + request.get('Host');
    ThreadModel.findOneAndRemove({
        _id: request.query.thread_id,
        password: request.query.password
    }, (error, thread) => {
        if(error)
            throw error
        else
            response.redirect(url_user_came_from);
    });

});

server.get('*', (request, response) => {
    response.send('<p>Bad, bad user. No donuts for you.</p>');
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Listening");
});

module.exports = server; // for testing
