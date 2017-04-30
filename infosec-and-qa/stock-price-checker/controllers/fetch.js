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
                        console.log("stock_price = stock_data.price;");
                        return done(stock_price);
                    }
                }
            );
        }, function isStockInDB(callback){
            StockModel.findOne({stock: stock_name}, (error, stock) => {
                if(error){
                    return callback(error);
                }else if(stock){
                    if(stock.IPs.indexOf(IP) == -1){
                        stock.IPs.push(IP);
                    }else{
                        isIpRepeated = true;
                    }
                    return callback(null, stock)
                }else{                    
                    return callback(null, null);
                }
            });
        }, function saveNewStock(isStockInDB, callback){
                let increment = isLiked && !isIpRepeated ? 1 : 0;
                let new_stock = {
                        $inc: {likes: increment}                        
                };

                if(!isIpRepeated){
                    new_stock.$push = {IPs: IP}
                }

                if(isStockInDB){
                    StockModel.findByIdAndUpdate(isStockInDB._id, new_stock);
                    return callback(null, {likes: new_stock.likes, stock: new_stock.stock});
                }else{
                    new_stock.stock = stock_name;
                    
                    const stock = new StockModel(new_stock);
                    stock.save((error) => {
                        if(error)
                            return callback(error);
                        else
                            return callback(null, {likes: new_stock.likes, stock: new_stock.stock});
                    });
                }                
            }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.send(result);
    }
}