const waterfall = require('async/waterfall');
const ThreadModel = require('../../models/Thread');

exports.report = (request, response) => {
    waterfall([ 
        function reportThread(callback){
            ThreadModel.findByIdAndUpdate(request.body.thread_id, 
            {isReported: true}, (error, thread) => {
                if(error)
                    return callback(error);
                else if(thread)
                    return callback(null, 'Derezzed');
                else
                    return callback('Thread not found');
            });
        }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.send(result);
    }
}