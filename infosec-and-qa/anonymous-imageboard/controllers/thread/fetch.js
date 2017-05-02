const waterfall = require('async/waterfall');
const ThreadModel = require('../../models/Thread');

exports.fetch = (request, response) => {
    waterfall([
        function fetchThreadList(callback){
            ThreadModel.find({}).limit(10).exec((error, threads) =>{
                if(error){
                    return callback(error);
                }else if(threads){
                    let thread_list = [];
                    for(let thread of threads){
                        thread.push({
                            id: thread._id,
                            creation_date: thread.creation_date,
                            last_post: thread.last_post,
                            text: thread.text,
                            title: thread.title, 
                            replies: thread.replies,
                        });
                    }
                    return callback(null, thread_list);
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
    // waterfall([
    //     function fetchthreadByID(callback){
    //         threadModel.findById(request.params.id, (error, thread) =>{
    //             if(error){
    //                 return callback(error);
    //             }else if(thread){
    //                 console.log(thread);
    //                 return callback(null, {title: thread.title, id: thread._id, comment: thread.comment});
    //             }
    //         });
    //     }
    // ], done);

    // function done(error, result) {
    //     if(error){
    //         console.log('\nError during fetch process: '+error+'\n');
    //         return response.send(error);
    //     }
    //     return response.json(result);
    // }
}