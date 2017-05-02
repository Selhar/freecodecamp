const waterfall = require('async/waterfall');
const ThreadModel = require('../../models/Thread');

exports.report = (request, response) => {
    waterfall([ 
        function reportReply(callback){
            ThreadModel.findOneAndUpdate(
                {'replies._id': request.body.reply_id}, 
                {'replies.$.isReported': true}, 
                (error, thread) => {
                    if(error)
                        return callback(error);
                    else if(thread)
                        return callback(null, 'Derezzed');
                    else
                        return callback('Reply not found.');
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