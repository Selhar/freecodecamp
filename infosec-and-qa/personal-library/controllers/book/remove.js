// const mongoose = require('mongoose');
// const waterfall = require("async/waterfall");
// const PLACEHOLDERMODEL = require('PLACEHOLDERMODEL');

exports.remove = (request, response) => {
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
    //   }, function deletePLACEHOLDER(project, callback){
    //         PLACEHOLDERMODEL.findByIdAndRemove(PLACEHOLDERID, (error, PLACEHOLDER) => {
    //             if(error)
    //                 return callback(error)
    //             else if (PLACEHOLDER)
    //                 return callback(null, PLACEHOLDER._id);
    //         });
    //   }
    // ], done);

    // function done(error, result) {
    //     if(error){
    //         console.log('\nError during remove process: '+error+'\n');
    //         return response.send(error);
    //     }
    //     return response.send(result);
    // }
}