const mongoose = require('mongoose');
const ProjectModel = require('../models/project');
const waterfall = require("async/waterfall");
const IssueModel = require('../models/issue');

exports.update = (request, response) => {
    waterfall([ 
      function isProjectInDB(callback){
        let project_title = request.body.title || request.params.project;
        ProjectModel.findOne( {name: project_title}, (error, project) =>{
          if(error){
              return callback(error);
          }else if(project){
              return callback(null);
          }else{
              return done("project does not exist");
          }
        });
      }, function updateIssue(callback){
          
            let new_issue = {
                _id: request.body.issue_id, 
                status: request.body.status,
                text: request.body.text,
                assignee: request.body.assignee,
                author: request.body.author,
                open: true
            }
            let update_parameters = request.body.new_issue || new_issue;
            if(Object.keys(update_parameters).length > 1){
                update_parameters.latest_update = Date.now();
                IssueModel.findOneAndUpdate({_id: update_parameters._id}, {$set: update_parameters}, (error, data) => {
                    if(error){
                        console.log(error);
                        callback("could not update");
                    }else if(data){
                        callback(null, data)
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
        let shouldRenderEJS = request.body.title ? true : false;
        if(shouldRenderEJS){
            return response.render('../views/issue', result);
        }
        if(result){
            return response.send("successfully updated");
        }
        return response.send(result);
    }
}