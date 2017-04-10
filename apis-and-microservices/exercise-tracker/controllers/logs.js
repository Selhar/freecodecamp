const UserModel = require('../models/user');
const ExerciseModel = require('../models/exercise');
const waterfall = require("async/waterfall");

exports.fetch_logs = (request, response) => {
    const username = request.params.username;
    const initial_date = request.params.from || 0;
    const final_date = request.params.to || Date.now();
    const limit = request.params.limit || 0;

    waterfall([ 
        function isUserInDB(callback){
            UserModel.findOne({username: username}, (error, user) =>{
                if(error){
                    return callback(error);
                }else if(user){
                    return callback(null, user);
                }else{
                    callback("A username must be provided.");
                }
            });
        }, function fetchLog(user, callback){
            ExerciseModel.find({
                _user: user._id,
                date: {
                    $gt: initial_date,
                    $lt: final_date
                }
            })
            .sort('-date')
            .limit(limit)
            .exec((error, data) => {
                return callback(null, data);
            });
        }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\n\n\n **** error ***** \n\n\n'+error+'\n\n\n');
            return response.json({error: "an unidentified error ocurred."});
        }
        return response.json(result);
    }
}