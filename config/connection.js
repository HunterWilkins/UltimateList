var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Thebleepingcat96!",
    database: "ultimatedb"
});

connection.connect(function(err){
    if (err){
        console.error("Nice Job, Scumbag. You've got an Error. " + err.stack);
        return;
    }

    console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;