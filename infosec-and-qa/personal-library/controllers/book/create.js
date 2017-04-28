const mongoose = require('mongoose');
const BookModel = require('../../models/book');
const waterfall = require("async/waterfall");

exports.create = (request, response) => {
    waterfall([ 
        function isBookInDB(callback){
            BookModel.findOne( {title: request.body.title}, (error, book) =>{
                if(error){
                    return callback(error);
                }else if(book){
                    return done("A book with this name already exists");
                }else{
                    return callback(null);
                }
            });
      }, function saveBook(callback){

            let new_book = new BookModel({
                title: request.body.title
            });
            new_book.save((error) => {
                if(error){
                    return callback(error);
                }
                return callback(null, new_book);
            });
          }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.json({title: result.title, _id: result._id});
    }
}

exports.createComment = (request, response) => {
    waterfall([ 
        function addComment(callback) {
            BookModel.findByIdAndUpdate(request.params.id, {$push: {comment: request.body.comment}, $inc: {commentCount: 1}}, (error, book) => {
                if(error){
                    callback(error);
                }else{
                    callback(null, book);
                }
            });
        }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.json({title: result.title, _id: result._id, commentCount: result.commentCount});
    }
}