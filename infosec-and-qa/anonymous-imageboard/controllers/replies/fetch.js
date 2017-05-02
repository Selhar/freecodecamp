const waterfall = require('async/waterfall');
const ThreadModel = require('../../models/Thread');

exports.fetch = (request, response) => {
    console.log("oi3uh123ui1h2o3i21uj");
    waterfall([
        function fetchThreadList(callback){
            ThreadModel.find({}).select(
                '_id creation_date last_post text title replies'
                ).limit(10).exec((error, threads) =>{
                if(error){
                    return callback(error);
                }else if(threads){
                    return callback(null, threads);
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
    // waterfall([
    //     function fetchthreadByID(callback){
    //         threadModel.findById(request.params.id, (error, thread) =>{
    //             if(error){
    //                 return callback(error);
    //             }else if(thread){
    //                 console.log(thread);
    //                 return callback(null, {title: thread.title, id: thread._id, comment: thread.comment});
    //             }
    //         });
    //     }
    // ], done);

    // function done(error, result) {
    //     if(error){
    //         console.log('\nError during fetch process: '+error+'\n');
    //         return response.send(error);
    //     }
    //     return response.json(result);
    // }
}