const UrlModel = require('../models/url');
const http_request = require('request');
const url = require('url');
const waterfall = require("async/waterfall");

exports.addUrl = (request, response) => {
    const full_url = request.body.url;    
    
    waterfall([ 
        function(callback) {
            http_request(full_url, (error, result) => {
                    if(error){
                        return callback(error);
                    }
                    if(result.statusCode === 200){
                        const sanitized_url = full_url.replace(/(^\w+:|^)\/\/(w{3}.)?/, '');
                        return callback(null, {full_url: sanitized_url});
                    }
                });
        },function isUrlInDatabase(data, callback) {

            UrlModel.findOne({original_url: data.sanitized_url}, (error, result) => {
                if(error){
                    return callback(error);
                } else if(result){
                    return done(null, {original_url: result.original_url, short_url: result.short_url}, response);
                } else{
                    return callback(null, data.sanitized_url);
                }
            });
        },function processShortUrl(data, callback) {
                
            let isShortUrlUnique = data.unique || false;
            let short_url = data.sanitized_url || data.sanitized_url.slice(0, 3);
            let index = data.index || 0;
            
            UrlModel.findOne({short_url: short_url}, (error, result) => {
                if(error){
                    return callback(error);
                } 
                if(result){    
                    if(short_url.length > 3){
                        short_url = short_url.replace(index, ++index);
                    }else{
                        short_url += index++;
                    }
                }else{
                    isShortUrlUnique = true;
                }   
            });
                return callback(null, short_url, sanitized_url);
        },function saveToDatabase(short_url, sanitized_url, callback) {
            
            let new_url = new UrlModel({
                original_url: sanitized_url,
                short_url: short_url
            });
            new_url.save((error) => {
                if(error){
                    return callback(error);
                }

                return callback(null, {original_url: sanitized_url, short_url: short_url});
            });
        }
    ],done);

    function done(error, result) {
        if(error){
            switch(error.code){
            case 'ENOTFOUND':
                return response.json({error: "the url provided could not be found."});
            default:
                console.log(error);
                return response.json({error: "an unidentified error ocurred."});
            }
        }

        return response.json(result);
    }

}
