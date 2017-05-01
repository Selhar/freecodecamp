const mongoose = require('mongoose');
const waterfall = require("async/waterfall");

exports.remove = (request, response) => {
    // waterfall([
    //     function deleteBook(callback){
    //         BookModel.findByIdAndRemove(request.params.id, (error, book) => {
    //             if(error)
    //                 return callback(error)
    //             else
    //                 return callback(null, "Book successfully deleted.");
    //         });
    //   }
    // ], done);

    // function done(error, result) {
    //     if(error){
    //         console.log('\nError during remove process: '+error+'\n');
    //         return response.send(error);
    //     }
    //     return response.send(result);
    // }
}