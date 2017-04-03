const UrlModel = require('../models/url');
const http_request = require('request');
const url = require('url');
const waterfall = require("async/waterfall");

exports.addUrl = (request, response) => {
    const full_url = request.body.url;    
waterfall([
    function isUrlAlive(callback) {

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

        UrlModel.findOne({original_url: sanitized_url}, (error, result) => {
            if(error){
                return callback(error);
            }
            console.log("\n\n\n\n\n"+result+"\n\n\n\n\n");
        });

           return callback(null, sanitized_url);
    }, function processShortUrl(sanitized_url, callback) {
        
        let isShortUrlUnique = false;
        let short_url = sanitized_url.slice(0, 4);
        let index = 0;
        
        while(!isShortUrlUnique){
            UrlModel.findOne({short_url: short_url}, (error, result) => {
                if(error){
                    return callback(error);
                }
                if(short_url.length > 3){
                    short_url.replace(index, ++index);
                }else{
                    short_url += index++;
                }
            });            
            return callback(null, short_url, sanitized_url);
        }
    }, function saveToDatabase(short_url,sanitized_url, callback) {
        
        const new_url = new UrlModel({
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
], (error, result) => {
    if(error){
        console.log(error);
        return response.json({error: "An unidentified error ocurred."});
    }
    response.json(result);
})
   
};