const waterfall = require("async/waterfall");
const ThreadModel = require('../../models/Thread');

exports.create = (request, response) => {
    const title = request.body.thread ? request.body.thread.title : request.body.title;
    const text = request.body.thread ? request.body.thread.text : request.body.text
    waterfall([
        function saveThread(callback){
            let new_thread = new ThreadModel({
                title: title,
                text: text,
                replies: [{text: "O CANADA"}] //highly optional
            });

            new_thread.save((error) => {
                if(error){
                    return callback(error);
                }
                return callback(null, new_thread);
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
