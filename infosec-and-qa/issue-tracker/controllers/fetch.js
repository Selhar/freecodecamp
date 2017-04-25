const mongoose = require('mongoose');
const ProjectModel = require('../models/project');
const waterfall = require("async/waterfall");
const IssueModel = require('../models/issue');

exports.fetch = (request, response) => {
    waterfall([
        function isProjectInDB(callback){
            ProjectModel.findOne( {name: request.params.project}, (error, project) =>{
                if(error){
                    return callback(error);
                }else if(project){
                    return callback(null, project);
                }else{
                    return done("project does not exist");
                }
            });
      }, function fetchQuery(project, callback){

      }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\n\n\n **** error ***** \n\n\n'+error+'\n\n\n');
            return response.send(error);
        }
        return response.send(result);
    }
}