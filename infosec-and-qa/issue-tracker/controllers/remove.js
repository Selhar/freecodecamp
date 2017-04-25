const mongoose = require('mongoose');
const ProjectModel = require('../models/project');
const waterfall = require("async/waterfall");
const IssueModel = require('../models/issue');

exports.remove = (request, response) => {
    waterfall([
        function isProjectInDB(callback){
            ProjectModel.findOne( {name: request.params.project}, (error, project) =>{
                if(error){
                    return callback(error);
                }else if(project){
                    return callback(null, project);
                }else{
                    return done("there are no projects with the name "+request.params.project);
                }
            });
      }, function deleteQuery(project, callback){
            let id = request.body.id;
            
            IssueModel.findByIdAndRemove(id, (error, issue) => {
                if(error)
                    return callback(error)
                else if (issue)
                    return callback(null, issue._id);
            });
      }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\n\n\n **** error ***** \n\n\n'+error+'\n\n\n');
            return response.send(error);
        }
        return response.send('deleted issue of id: ' + result);
    }
}