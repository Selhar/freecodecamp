const mongoose = require('mongoose');
const waterfall = require('async/waterfall');
const BookModel = require('../../models/book');

exports.fetch = (request, response) => {
    waterfall([
        function isPLACEHOLDERInDB(callback){
            PLACEHOLDERMODEL.findOne( {PARAMETER: PLACEHOLDERDATA}, (error, project) =>{
                if(error){
                    return callback(error);
                }else if(project){
                    return callback(null, project);
                }else{
                    return done("there are no PLACEHOLDERS with the parameters provided "+request.params.project);
                }
            });
      }, function fetchPLACEHOLDER(project, callback){
            let query = request.params.PLACEHOLDERPARAMETERS;
            
            IssueModel.find(query).exec((error, PLACEHOLDER) => {
                return callback(null, PLACEHOLDER);
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