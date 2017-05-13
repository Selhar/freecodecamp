const mongoose = require('mongoose');
const ProjectModel = require('../models/project');
const waterfall = require("async/waterfall");
const IssueModel = require('../models/issue');

exports.fetch = (request, response) => {
    let project_name = request.query.title || request.params.project;
    waterfall([
        function isProjectInDB(callback){
            ProjectModel.findOne( {name: project_name}, (error, project) =>{
                if(error){
                    return callback(error);
                }else if(project){
                    return callback(null, project);
                }else{
                    return done("there are no projects with the name "+project_name);
                }
            });
      }, function fetchQuery(project, callback){
            let query = request.query;
            query._project = project._id;
            IssueModel.find(query).exec((error, issues) => {
                return callback(null, issues);
            });
      }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\n\n\n **** error ***** \n\n\n'+error+'\n\n\n');
            return response.send(error);
        }
        return response.json(result);
    }
}