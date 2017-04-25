const mongoose = require('mongoose');
const ProjectModel = require('../models/project');
const waterfall = require("async/waterfall");
const IssueModel = require('../models/issue');

exports.update = (request, response) => {
    waterfall([ 
      function isProjectInDB(callback){

        ProjectModel.findOne( {name: request.params.project}, (error, project) =>{
          if(error){
              return callback(error);
          }else if(project){
              return callback(null);
          }else{
              return done("project does not exist");
          }
        });
      }, function updateIssue(callback){
            let update_parameters = request.body.new_issue;
            console.log(update_parameters);
            if(Object.keys(update_parameters).length > 1){
                update_parameters.latest_update = Date.now();
                IssueModel.findOneAndUpdate({_id: update_parameters._id}, {$set: update_parameters}, (error, data) => {
                    if(error){
                        console.log(error);
                        callback("could not update");
                    }else if(data){
                        callback(null, "successfully updated")
                    }else{
                        callback("issue does not exist");
                    }
                });
            }else{
                callback("no fields were provided for update");
            }
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