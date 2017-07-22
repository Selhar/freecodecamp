const waterfall = require('async/waterfall');
const ThreadModel = require('../../models/Thread');

exports.fetch = (request, response) => {
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
    waterfall([
        function fetchThreadList(callback){
            ThreadModel.findById(request.params.thread_id).select(
                '_id creation_date last_post text title replies'
                ).exec((error, threads) =>{
                if(error){
                    return callback(error);
                }else if(threads){
                    return callback(null, threads);
                }else{
                    return callback("There isn't a thread with this ID.");
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