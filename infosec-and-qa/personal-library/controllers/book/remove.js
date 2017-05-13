const mongoose = require('mongoose');
const waterfall = require("async/waterfall");
const BookModel = require('../../models/book');

exports.remove = (request, response) => {
    let id = request.query.id || request.params.id;
    waterfall([
        function deleteBook(callback){
            BookModel.findByIdAndRemove(id, (error, book) => {
                if(error)
                    return callback(error)
                else
                    return callback(null, "Book successfully deleted.");
            });
      }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during remove process: '+error+'\n');
            return response.send(error);
        }
        return response.send(result);
    }
}