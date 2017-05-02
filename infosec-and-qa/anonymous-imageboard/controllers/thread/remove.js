const waterfall = require('async/waterfall');
const ThreadModel = require('../../models/Thread');

exports.remove = (request, response) => {
    waterfall([
        function deleteThread(callback){
            ThreadModel.findOneAndRemove({
                _id: request.body.thread_id,
                password: request.body.password
            }, (error, thread) => {
                if(error)
                    return callback(error)
                else if(thread)
                    return callback(null, 'Thread successfully deleted.');
                else
                    return callback(null, 'Thread not found');
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