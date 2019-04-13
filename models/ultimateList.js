var orm = require("../config/orm.js");

var ultimateList = {

    selectAll: function(callback){
        orm.selectAll("list", function(res){
            callback(res);
        });
    },
    
    create: function(columns, values, callback){
        orm.create("list", columns, values, function(res){
            callback(res);
        });
    },

    delete: function(condition, callback){
        orm.delete("list", condition, function(res){
            callback(res);
        });
    },

    update: function(objectColumnValues, condition, callback){
        orm.update("list", objectColumnValues, condition, function(res){
            callback(res);
        });
    }
};

module.exports = ultimateList;