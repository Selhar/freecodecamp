const waterfall = require("async/waterfall");
const ThreadModel = require('../../models/Thread');

const ObjectId = require('mongodb').ObjectID;

exports.create = (request, response) => {
    const text = request.body.comment.text;
    const thread_id = request.params.thread;
    waterfall([
        function saveComment(callback){
            ThreadModel.findByIdAndUpdate(thread_id, {
                $push: {replies: {text: text, _id: new ObjectId()}}
                
            }, (error, data) => {
                if(error)
                    callback(error);
                else if(data)
                    callback(null, data);
                else
                    callback("Thread not found");
            });
          }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.redirect('/'+result._id);
    }
}
