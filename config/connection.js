var mysql = require("mysql");



if (process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user:"root",
        password:"Thebleepingcat96!",
        database: "ultimatedb"
    });
}

//EDIT THIS IF SOMETHING ISNT WORKING BC USUALLY THIS IS THE PROBLEM!!!!
let connection;
   if (process.env.JAWSDB_URL){
       connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection({
            host: "localhost",
            port: 8889, 
            user: "root",
            password: "root",
            database: "burgers_db"
        });
    };


connection.connect(function(err){
    if (err){
        console.error("Nice Job, Scumbag. You've got an Error. " + err.stack);
        return;
    }

    console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;