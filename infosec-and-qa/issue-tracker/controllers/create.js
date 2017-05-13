const mongoose = require('mongoose');
const ProjectModel = require('../models/project');
const waterfall = require("async/waterfall");
const IssueModel = require('../models/issue');

exports.create = (request, response) => {
    waterfall([ 
      function isProjectInDB(callback){
        let project_name = request.body.title || request.params.project;
        
        ProjectModel.findOne( {name: project_name}, (error, project) =>{
          if(error){
              return callback(error);
          }else if(project){
              return callback(null, true, project);
          }else{
              return callback(null, false, null);
          }
        });
      }, function saveProject(isProjectInDB, project, callback){
        let project_name = request.body.title || request.params.project_title;
          if(isProjectInDB){
            return callback(null, project);
          }else{
            let new_project = new ProjectModel({
                name: project_name
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
            author: request.body.author,
            status: request.body.status,
            assignee: request.body.assignee,
            latest_update: null,
            isOpen: true,
            _project: project._id
          }

          const issue = new IssueModel(issue_object);

          issue.save((error) => {
            if(error)
              return callback(error);
            else
              return callback(null, issue);
          });
      }   
    ], done);

    function done(error, result) {
        if(error){
            console.log('\n\n\n **** error ***** \n\n\n'+error+'\n\n\n');
            return response.json({error: "an unidentified error ocurred."});
        }

        let shouldRenderEjs = request.params.project == 'noid' ? true : false;
        if(shouldRenderEjs){
            return response.render('../views/issue.ejs', {data: result});
        }
        return response.json(result);
    }
}