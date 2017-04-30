const mongoose = require('mongoose');
const waterfall = require("async/waterfall");
const req = require('request');
const StockModel = require('../models/stock');

exports.fetch_manager = (request, response) => {
    let isDoubleStock = false
    if( Object.prototype.toString.call( request.query.stock ) === '[object Array]' ) {
        isDoubleStock = true;
    }
    let stock_name = request.query.stock;
    const isLiked = request.query.like || false;
    let API = 'https://finance.google.com/finance/info?q=NASDAQ%3a';
    const IP = request.connection.remoteAddress;
    let isIpRepeated = false;
    let stock_price = '';
    
    let iteration = 0;
    let current_stock = isDoubleStock ? stock_name[iteration] : stock_name;
    let data = {
        stock_name: current_stock,
        isDoubleStock: isDoubleStock,
        isLiked: isLiked,
        API: API+current_stock,
        IP: IP,
        isIpRepeated: isIpRepeated,
        stock_price: stock_price
    }
    console.log(data);
    response.send(data);
}

function fetch(request, response, Data) {
    waterfall([ 
        function retrieveApiData(callback){
            req.get({
                url: Data.API,json: true,
                headers: {'User-Agent': 'request'}}, 
                (error, res, data) => {
                    if (error) {
                        return callback(error);
                    } else if (res.statusCode !== 200) {
                        return callback('Status: '+res.statusCode);
                    } else {
                        const stock_data = JSON.parse(data.substring(4))[0];
                        Data.stock_price = stock_data.l;
                        return callback(null);
                    }
                }
            );
        }, function isStockInDB(callback){
            StockModel.findOne({stock: stock_name}, (error, stock) => {
                if(error){
                    return callback(error);
                }else if(stock){
                    const isIpInDB = stock.IPs.indexOf(IP) >= 0;
                    if(isIpInDB){
                        isIpRepeated = true;
                    }
                    return callback(null, stock);
                }else{                    
                    return callback(null, null);
                }
            });
        }, function saveNewStock(stock, callback){
            const shouldAddLike = isLiked && !isIpRepeated ? true : false;

            if(stock){
                let update_stock = {};
                StockModel.findByIdAndUpdate(
                stock._id, 
                shouldAddLike ? {$push: {IPs: IP}, $inc: {likes: 1}} : {}, 
                (error, data) => {

                    if(error){
                        callback(error);
                    }else if(data){
                        //This is a workaround, since the findbyidandupdate method 
                        //returns the found object, not the updated object
                        //thus i must manually update the data.
                        callback(null, {likes: shouldAddLike ? data.likes+1 : data.likes});
                    }else{
                        callback("ID not found");
                    }
                });
            }else{
                const new_stock = new StockModel({
                    stock: stock_name,
                    IPs: shouldAddLike ? [IP] : [],
                    likes: shouldAddLike ? 1 : 0
                });
                new_stock.save((error, stock) => {
                    if(error)
                        return callback(error);
                    else
                        return callback(null, stock);
                });
            }                
        }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.send({price: stock_price, stock: stock_name, likes: result.likes});
    }
}