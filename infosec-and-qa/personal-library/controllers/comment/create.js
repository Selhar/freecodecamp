const mongoose = require('mongoose');
const BookModel = require('../../models/book');
const waterfall = require("async/waterfall");
const IssueModel = require('../models/issue');

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