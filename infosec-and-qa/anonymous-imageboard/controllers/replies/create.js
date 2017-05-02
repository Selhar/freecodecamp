const waterfall = require("async/waterfall");
const ThreadModel = require('../../models/Thread');

exports.create = (request, response) => {
    const text = request.body.comment.text;
    console.log(request.params.thread_id_2);
    waterfall([
        function saveComment(callback){
            ThreadModel.findByIdAndUpdate(request.params.thread_id_2, {
                replies: {
                    $push: {text: text}
                }
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
