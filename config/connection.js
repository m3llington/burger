var mysql = require("mysql");
//required for database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "UCFbootcamp123",
    database: "burger_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
//exports connection
module.exports = connection;