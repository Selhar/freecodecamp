const UrlModel = require('../models/url');
const http_request = require('request');
const url = require('url');
const waterfall = require("async/waterfall");

exports.addUrl = (request, response) => {
    const full_url = request.body.url;    
waterfall([
    (callback) => {
        http_request(full_url, (error, result) => {
            if(error){
                callback(error);
                return;
            }
            if(result.statusCode === 200){
                const sanitized_url = full_url.replace(/(^\w+:|^)\/\/(w{3}.)?/, '');
                callback(null, sanitized_url);
            }
        });
    },(sanitized_url, callback) => {
        response.json({boga: sanitized_url});
        callback(null);
    }
], (error, result) => {
    if(error){
        response.json({error: "An unidentified error ocurred."});
        console.log(error);
    }
})
   
};

function findShortUrl(url){
    let result = false;
    UrlModel.findOne({short_url: url}, (error, result) => {
        if(!error && result){
            result = true;
        }
    });

    return result;
}


/*
 http_request(full_url, (error, reply) => {
        //Validate URL
        if(!error && reply.statusCode === 200){
            const sanitized_url = full_url.replace(/(^\w+:|^)\/\/(w{3}.)?/, '');
            //Check for the sanitized URL in DB
            UrlModel.findOne({original_url: sanitized_url}, (queryError, queryResult) => {
                if(!queryError && queryResult){
                    return response.json({original_url: queryResult.original_url, short_url: queryResult.short_url});
                }else{
                    let isShortUrlValid = false;
                    let short_url = sanitized_url.slice(0, 4);
                    let index = 0;
                    //Process data until i find a short URL that is not present in the DB
                    while(!isShortUrlValid){
                        UrlModel.findOne({short_url: short_url}, (smallUrlerror, smallUrlResult) => {
                            return true;
                        });
                    }
                }
            })
        }else{
            return response.json({error: "The provided URL is either invalid or currently offline."});
        }
    });



            if(error){
                output_error(error);
                return response.json({error: "An udentified error ocurred."});
            }else if(model){
                return response.json({original_url: model.original_url, short_url: model.short_url});
            }else{
                let short_url = sanitized_url.slice(0, 4);
                let index = 0;
                
                while(findShortUrl(short_url)){
                    if(short_url.length > 3){
                        short_url.replace(index, ++index);
                    }else{
                        short_url += index++;
                    }
                }
                const new_url = new UrlModel({
                    original_url: sanitized_url,
                    short_url: short_url
                });

                new_url.save((error) => {
                    if(error){
                        output_error(error);
                        return response.json("An unidentified error ocurred");
                    }else{
                        return response.json({original_url: sanitized_url, short_url: short_url});
                    }
                })
            }
        });

    */