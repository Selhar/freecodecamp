const UrlModel = require('../models/url');
const http_request = require('request');
const url = require("url");

exports.addUrl = (request, response) => {
    const full_url = request.body.url;
    
    http_request(full_url, (error, reply) => {
        if(!error && reply.statusCode === 200){
            const sanitized_url = full_url.replace(/(^\w+:|^)\/\/(w{3}.)?/, '');
            return response.json({sanitized: sanitized_url});
        }else{
            return response.json({error: "The provided URL is either invalid or currently offline."});
        }
    });
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