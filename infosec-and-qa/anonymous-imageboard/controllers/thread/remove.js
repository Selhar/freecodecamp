const waterfall = require("async/waterfall");
const ThreadModel = require('../../models/Thread');

exports.remove = (request, response) => {
    waterfall([
        function deleteThread(callback){
            ThreadModel.findByIdAndRemove(request.params.id, (error, thread) => {
                if(error)
                    return callback(error)
                else
                    return callback(null, "Thread successfully deleted.");
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