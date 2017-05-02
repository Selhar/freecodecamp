// const waterfall = require("async/waterfall");
// const ThreadModel = require('../../models/Thread');

// exports.create = (request, response) => {
//     const title = request.params.thread;
//     console.log("oi");
//     waterfall([ 
//         function isThreadInDB(callback){
//             ThreadModel.findOne( {title: title}, (error, thread) =>{
//                 if(error){
//                     return callback(error);
//                 }else if(thread){
//                     return callback(null, thread);
//                 }else{
//                     return callback(null);
//                 }
//             });
//       }, function saveThread(thread, callback){

//             let new_thread = new ThreadModel({
//                 title: title
//             });
//             new_thread.save((error) => {
//                 if(error){
//                     return callback(error);
//                 }
//                 return callback(null, new_thread);
//             });
//           }
//     ], done);

//     function done(error, result) {
//         if(error){
//             console.log('\nError during fetch process: '+error+'\n');
//             return response.send(error);
//         }
//         return response.redirect('/'+result._id);
//     }
// }
