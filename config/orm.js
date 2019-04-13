var connection = require("../config/connection.js");

function printQuestionMarks(number){
    var array = [];

    for (var i = 0; i < number; i++){
        array.push("?");
    }
    return array.toString();
}

function objToSql(object) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in object) {
      var value = object[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(object, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {

    selectAll : function(tableInput, callback){
        var queryString = 
        `SELECT * FROM ${tableInput};`;

        connection.query(queryString, function(error, result){
            console.log("hello");
            if (error){
                throw error;
            }
            callback(result);
        });
    },
    
    create: function(table, columns, values, callback){
        var queryString = 
        `INSERT INTO ${table}(
            ${columns}
        )
        VALUES(
            ${printQuestionMarks(values.length)});`;
        console.log(queryString);

        connection.query(queryString, values, function(error, result){
            if (error){
                throw error;
            }
            callback(result);
        })
    },
    
    delete: function(table, condition, callback){
        var queryString = "DELETE FROM " + table + " WHERE " + condition;

        connection.query(queryString, function(error, result){
            if (error){
                throw error;
            }

            callback(result);
        })

    },

    update: function(table, objectColumnValues, condition, callback){
        var queryString = "UPDATE " + table + " SET " + objToSql(objectColumnValues) + " WHERE " + condition + ";";

        console.log(queryString);
        connection.query(queryString, function(error, result){
            if (error){
                throw error;
            }

            callback(result);
        });
    }
}

module.exports = orm;