const waterfall = require('async/waterfall');
const ThreadModel = require('../../models/Thread');

exports.remove = (request, response) => {
    
    waterfall([
        function deleteReply(callback){
            ThreadModel.update({'_id': request.params.thread_id}, 
                {'$pull': 
                    {'replies': 
                        {'_id': request.body.reply_id}
                    }
                }, (error) => {
                    if(error){
                        callback(error);
                    }else{
                        callback(null, "Reply successfully deleted");
                    }
                }
            );
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