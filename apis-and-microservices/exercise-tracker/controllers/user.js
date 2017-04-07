const UserModel = require('../models/user');
const ExerciseModel = require('../models/exercise');

exports.add_user = (request, response) => {
        
        let new_user = new UrlModel({
            username: request.body.username            
        });
        
        new_url.save((error) => {
            if(error){
                return callback(error);
            }

            return callback(null, {original_url: full_url, short_url: short_url});
    
        });
}
