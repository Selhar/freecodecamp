const mongoose = require('mongoose');
const project_model = require('../models/project');
const waterfall = require("async/waterfall");

exports.create = (request, response) => {
  waterfall([
    function is_project_in_db(callback){
      
      project_model.findOne( {_id: request.body._project}, (error, project) => {
        if(error){
          return callback(error);
        }else if(project){
          return callback(null, false, project._id);
        }else{
          return callback(null, true, request.param.project);          
        }
      });
    }, function create_project(callback, isProjectInDB, project_name){

        if(isProjectInDB){
          return callback(null);
        }else{
          const project = new project_model({name: project_name});
          project.save((error) => {
            if(error){
              return callback(error);
            }
            return callback(null, project._id);
          });
        }
    }, function create_issue_model(callback, project){
        
        const issue_object = {
          title: request.body.title,
          text: request.body.text,
          creation_date: request.body.creation_date,
          latest_update: request.body.latest_update,
          author: request.body.author,
          assignee: request.body.assignee,
          isOpen: true,
          status: request.body.status,
          _project: project._id
        }
    }
  ]);
}