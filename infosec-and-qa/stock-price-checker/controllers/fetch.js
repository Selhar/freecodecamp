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
    waterfall([ 
        function isIpRepeated(callback){
            if(isLiked){
                StockModel.findOne({stock: stock_name}, (error, stock) => {
                    if(error){
                        callback(error);
                    }else if(stock){
                        if(stock.IPs.indexOf(IP) == -1){
                            isIpRepeated = false;
                        }                            
                        else{
                            isIpRepeated = true;
                        }
                        callback(null, stock)
                    }
                });
            }else{
                callback(null, null);
            }
        }, function retrieveApiData(stock, callback){
            req.get({url: API,json: true,headers: {'User-Agent': 'request'}}, (error, res, data) => {
                if (error) {
                    callback(error);
                } else if (res.statusCode !== 200) {
                    return callback('Status: '+res.statusCode);
                } else {
                    const what_the_fuck_is_up_with_this_endpoint = JSON.parse(data.substring(4))[0];
                    let stock_data = {stock_name: what_the_fuck_is_up_with_this_endpoint.t, price: what_the_fuck_is_up_with_this_endpoint.l};
                    return callback(null, stock_data, stock);
                }
            }); 
        }, function saveNewStock(stock_data, isStockInDB, callback){
                if(isStockInDB)
                    return callback(null, {stock: isStockInDB, stock_data: stock_data});
                else{
                    const stock = new StockModel({stock: stock_name, likes: isLiked ? 1 : 0, $push : {IPs: isIpRepeated ? [] : IP}});
                    stock.save((error) => {
                        if(error)
                            return callback(error);
                        else
                            return callback(null, {stock: stock, stock_data: stock_data});
                    });
                }                
            }
    ], done);

    function done(error, result) {
        if(error){
            console.log('\nError during fetch process: '+error+'\n');
            return response.send(error);
        }
        return response.json({stock: result.stock.stock, price: result.stock_data.price, likes: result.stock.likes});
    }
}