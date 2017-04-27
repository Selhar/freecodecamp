const mongoose = require('mongoose');
const BookModel = require('../../models/book');
const CommentModel = require('../../models/comment');
const waterfall = require("async/waterfall");

exports.create = (request, response) => {
    waterfall([ 
        function isBookInDB(callback){
            BookModel.findOne( {title: request.body.title}, (error, book) =>{
                if(error){
                    return callback(error);
                }else if(book){
                    return callback(book);
                }else{
                    return callback(null);
                }
            });
      }, function saveBook(callback){

            let new_comment = new CommentModel({
                comment: request.body.comment
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