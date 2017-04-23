const mongoose = require('mongoose');
const ProjectModel = require('../models/project');
const waterfall = require("async/waterfall");

exports.create = (request, response) => {
    waterfall([ 
        function isProjectInDB(callback){
            ProjectModel.findOne( {name: request.params.project}, (error, project) =>{
                if(error){
                    return callback(error);
                }else if(project){
                    return callback(null, true, project);
                }else{
                    return callback(null, false, null);
                }
            });
        }, function saveProject(isProjectInDB, project, callback){
            if(isProjectInDB){
              return callback(null, project);
            }else{
              let new_project = new ProjectModel({
                  name: request.params.project
              });
              new_project.save((error) => {
                  if(error){
                      return callback(error);
                  }
                  return callback(null, new_project);
              });
            }
        }, function create_issue(project, callback){
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

            return callback(null, issue_object);
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

// function is_project_in_db(callback){
    //   ProjectModel.findOne( {_id: request.body._project}, (error, project) => {
    //     if(error){
    //       return callback(error);
    //     }else if(project){
    //       return callback(null, false, project._id);
    //     }else{
    //       return callback(null, true, request.params.project);          
    //     }
    //   });
    // }, function create_project(isProjectInDB, project_name, callback){

    //     if(isProjectInDB){
    //       return callback(null);
    //     }else{
    //       const project = new ProjectModel({name: project_name});
    //       project.save((error) => {
    //         if(error){
    //           return callback(error);
    //         }else
    //         return callback(null, project._id);
    //       });
    //     }
    // }, function create_issue_model(project, callback){
    
    //     const issue_object = {
    //       title: request.body.title,
    //       text: request.body.text,
    //       creation_date: request.body.creation_date,
    //       latest_update: request.body.latest_update,
    //       author: request.body.author,
    //       assignee: request.body.assignee,
    //       isOpen: true,
    //       status: request.body.status,
    //       _project: project._id
    //     }