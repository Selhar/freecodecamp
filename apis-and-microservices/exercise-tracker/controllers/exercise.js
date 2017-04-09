const UserModel = require('../models/user');
const ExerciseModel = require('../models/exercise');
const waterfall = require("async/waterfall");
const errors = {
    userNotInDB: "User is not in the database."
};

exports.addExercise = (request, response) => {
    waterfall([
         function isUserInDB(callback){
            UserModel.findOne({username: request.body.username}, (error, user) =>{
                if(error){
                    return callback(error);
                }else if(user){
                    return callback(null, user);
                }else{
                    done(errors.userNotInDB);
                }
            });
        }
    ], done);

    function done(error, result) {
        if(error === errors.userNotInDB){
            return response.json({error: error});
        }else if(error){
            console.log('\n\n\n **** error ***** \n\n\n'+error+'\n\n\n');
            return response.json({error: "an unidentified error ocurred."});
        }else{
            return response.json(result);
        }
    }
}