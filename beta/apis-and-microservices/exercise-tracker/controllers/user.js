const UserModel = require('../models/user');
const ExerciseModel = require('../models/exercise');
const waterfall = require("async/waterfall");

exports.add_user = (request, response) => {
    waterfall([ 
        function isUserInDB(callback){
            UserModel.findOne({username: request.body.username}, (error, user) =>{
                if(error){
                    return callback(error);
                }else if(user){
                    return done(null, user);
                }else{
                    callback(null);
                }
            });
        }, function saveUser(callback){
            let new_user = new UserModel({
                username: request.body.username
            });
            new_user.save((error) => {
                if(error){
                    return callback(error);
                }

                return callback(null, {username: new_user.username, id: new_user._id});
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