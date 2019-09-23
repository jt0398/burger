var mysql = require("mysql");
var connection;

if (process.env.JAWSDB) {
    connection = mysql.createPool(process.env.JAWSDB);
} else {
    connection = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "Pa$$w0rd",
        database: "burgers_db",
        port: 3306,
        multipleStatements: true
    });
}

//connection.connect();

module.exports = connection;