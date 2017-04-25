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
      }, function isIssueInDB(callback){
            let issue = new IssueModel(request.body.new_issue);
            issue.findOneAndUpdate({_id:issue._id}, {$set: request.body.new_issue}, (error) => {
                if(error){
                    callback("could not update");
                }else{
                    callback(null, "successfully updated")
                }
            });
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