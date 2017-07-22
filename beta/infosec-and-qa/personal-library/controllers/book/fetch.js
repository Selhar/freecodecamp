const mongoose = require('mongoose');
const waterfall = require('async/waterfall');
const BookModel = require('../../models/book');

exports.fetch = (request, response) => {
    waterfall([
        function fetchAllBooks(callback){
            BookModel.find({}, (error, books) =>{
                if(error){
                    return callback(error);
                }else if(books){
                    let book_list = [];
                    for(let book of books){
                        book_list.push({title: book.title, id: book._id, commentCount: book.commentCount});
                    }
                    return callback(null, book_list);
                }
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

exports.fetchById = (request, response) => {
    let id = request.query.id || request.params.id;
    waterfall([
        function fetchBookByID(callback){
            BookModel.findById(id, (error, book) =>{
                if(error){
                    return callback(error);
                }else if(book){
                    console.log(book);
                    return callback(null, {title: book.title, id: book._id, comment: book.comment});
                }
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