var mysql = require("mysql");

/*MySQL configuration
https://devcenter.heroku.com/articles/jawsdb
*/
if (process.env.JAWSDB_URL) {
    connection = mysql.createPool(process.env.JAWSDB_URL);
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

module.exports = connection;