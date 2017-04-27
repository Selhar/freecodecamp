const mongoose = require('mongoose');
const BookModel = require('../../models/book');
const CommentModel = require('../../models/comment');
const waterfall = require("async/waterfall");

exports.create = (request, response) => {
    waterfall([ 
        function isBookInDB(callback){
            BookModel.findById(request.params.id, (error, book) =>{
                if(error){
                    return callback(error);
                }else if(book){
                    return callback(null, book);
                }else{
                    return callback("title not found");
                }
            });
      }, function saveComment(book, callback){

            let new_comment = new CommentModel({
                comment: request.body.comment,
                book: book._id
            });
            new_comment.save((error) => {
                if(error){
                    return callback(error);
                }
                return callback(null, new_comment);
            });
          }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.json(result);
    }
}