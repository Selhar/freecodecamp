const mongoose = require('mongoose');
const PLACEHOLDERMODEL = require('PLACEHOLDER');
const waterfall = require("async/waterfall");
const IssueModel = require('../models/issue');

exports.create = (request, response) => {
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
      }, function savePLACEHOLDER(isPLACEHOLDERInDB, PLACEHOLDER, callback){

          if(isPLACEHOLDERInDB){
            return callback(null, PLACEHOLDER);
          }else{
            let new_PLACEHOLDER = new PLACEHOLDERMODEL({
                FIELD: request.params.PLACEHOLDER
            });
            new_PLACEHOLDER.save((error) => {
                if(error){
                    return callback(error);
                }
                return callback(null, new_PLACEHOLDER);
            });
          }
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