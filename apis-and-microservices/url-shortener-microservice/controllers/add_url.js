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
                        return callback(null, sanitized_url);
                    }
                });
        },function isUrlInDatabase(sanitized_url, callback) {

            UrlModel.findOne({original_url: full_url}, (error, result) => {
                if(error){
                    return callback(error);
                } else if(result){
                    return done(null, {original_url: result.original_url, short_url: result.short_url}, response);
                } else{
                    return callback(null, {sanitized_url: sanitized_url});
                }
            });
        },function processShortUrl(data, callback) {
            let isShortUrlUnique = data.unique || false;
            let short_url = data.short_url || data.sanitized_url.slice(0, 3);
            let index = data.index || 0;

            if(isShortUrlUnique) 
                return callback(null, data.short_url, data.sanitized_url);

            UrlModel.findOne({short_url: short_url}, (error, result) => {
                if(error) 
                    return callback(error);
            
                if(result){    
                    if(short_url.length > 3)
                        short_url = short_url.replace(index-1, index++);
                    else
                        short_url += index;
                    return processShortUrl({unique: isShortUrlUnique, short_url: short_url, index: index, sanitized_url: data.sanitized_url}, callback);
                }else{
                    isShortUrlUnique = true;
                    return processShortUrl({unique: isShortUrlUnique, short_url: short_url, index: index, sanitized_url: data.sanitized_url}, callback);
                }   
            });

        },function saveToDatabase(short_url, sanitized_url, callback) {
            
            let new_url = new UrlModel({
                original_url: full_url,
                short_url: short_url
            });
            new_url.save((error) => {
                if(error){
                    return callback(error);
                }

                return callback(null, {original_url: full_url, short_url: short_url});
            });
        }
    ],done);

    function done(error, result) {
        if(error){
            switch(error.code){
            case 'ENOTFOUND':
                return response.json({error: "invalid URL."});
            default:
                console.log(error);
                return response.json({error: "an unidentified error ocurred."});
            }
        }

        return response.json(result);
    }

}
