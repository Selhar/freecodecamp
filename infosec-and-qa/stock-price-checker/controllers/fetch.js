const mongoose = require('mongoose');
const waterfall = require("async/waterfall");
const req = require('request');
const StockModel = require('../models/stock');

exports.fetch = (request, response) => {
    const stock_name = request.query.stock;
    const isLiked = request.query.like;
    const API = 'https://finance.google.com/finance/info?q=NASDAQ%3a'+stock_name;
    const IP = request.connection.remoteAddress;
    let isIpRepeated = false;
    let stock_price = '';
    waterfall([ 
        function retrieveApiData(callback){
            req.get({
                url: API,json: true,
                headers: {'User-Agent': 'request'}}, 
                (error, res, data) => {
                    if (error) {
                        return callback(error);
                    } else if (res.statusCode !== 200) {
                        return callback('Status: '+res.statusCode);
                    } else {
                        const stock_data = JSON.parse(data.substring(4))[0];
                        stock_price = stock_data.l;
                        return callback(null);
                    }
                }
            );
        }, function isStockInDB(callback){
            StockModel.findOne({stock: stock_name}, (error, stock) => {
                if(error){
                    return callback(error);
                }else if(stock){
                    let isIpInDB = stock.IPs.indexOf(IP) == -1;
                    if(isLiked && !isIpInDB){
                        stock.IPs.push(IP);
                    }else if(isIpInDB){
                        isIpRepeated = true;
                    }
                    return callback(null, stock)
                }else{                    
                    return callback(null, null);
                }
            });
        }, function saveNewStock(isStockInDB, callback){
            if(isStockInDB){
                if(isLiked && !isIpRepeated){
                    isStockInDB.$inc = {likes: increment}  
                }

                if(!isIpRepeated){
                    isStockInDB.$push = {IPs: IP}
                }
                StockModel.findByIdAndUpdate(isStockInDB._id, isStockInDB, (error, data) => {
                    if(error){
                        callback(error);
                    }else if(data){
                        callback(null, data);
                    }
                });
            }else{
                const stock = new StockModel({
                    stock: stock_name,
                    IPs: [IP],
                    likes: isLiked ? 1 : 0
                });

                stock.save((error, stock) => {
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