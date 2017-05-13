const waterfall = require('async/waterfall');
const ThreadModel = require('../../models/Thread');

exports.report = (request, response) => {
    console.log("request.body.reply_idrequest.body.reply_idrequest.body.reply_id");
    waterfall([ 
        function reportReply(callback){
            ThreadModel.update({'replies._id': request.body.reply_id}, 
                {'$set': {'replies.$.isReported': true}}, (error) => {
                    if(error){
                        callback(error);
                    }else{
                        callback(null, "Derezzed");
                    }
                }
            );
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