// Require mysql
const mysql = require("mysql");

// Set up our connection information
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "soccerkid",
    database: "burgers_db"
  });
};


// Connect to the database
connection.connect(function(err) {
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});

// Export connection
module.exports = connection;