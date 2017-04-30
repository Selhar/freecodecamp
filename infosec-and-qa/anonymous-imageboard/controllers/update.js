// const mongoose = require('mongoose');
// const PLACEHOLDER = require('../models/project');
// const waterfall = require("async/waterfall");

exports.update = (request, response) => {
    // waterfall([ 
    //     function isPLACEHOLDERInDB(callback){
    //         PLACEHOLDERMODEL.findOne( {PARAMETER: PLACEHOLDERDATA}, (error, project) =>{
    //             if(error){
    //                 return callback(error);
    //             }else if(project){
    //                 return callback(null, project);
    //             }else{
    //                 return done("there are no PLACEHOLDERS with the parameters provided "+request.params.project);
    //             }
    //         });
    //   }, function updatePLACEHOLDER(callback){
    //         let update_parameters = request.body.new_PLACEHOLDER;
    //         if(Object.keys(update_parameters).length > 1){
    //             update_parameters.latest_update = Date.now();
    //             PLACEHOLDERModel.findOneAndUpdate({_id: update_parameters._id}, {$set: update_parameters}, (error, data) => {
    //                 if(error){
    //                     console.log(error);
    //                     callback("could not update");
    //                 }else if(data){
    //                     callback(null, "successfully updated")
    //                 }else{
    //                     callback("PLACEHOLDER does not exist");
    //                 }
    //             });
    //         }else{
    //             callback("no fields were provided for update");
    //         }
    //   }
    // ], done);

    // function done(error, result) {
    //     if(error){
    //         console.log('\nError during fetch process: '+error+'\n');
    //         return response.send(error);
    //     }
    //     return response.json(result);
    // }
}