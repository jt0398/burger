const connection = require("./connection"); //MySQL connection

var ORM = {
    selectAll: async function() {
        return new Promise(resolve => {

            //Sends two queries - one to select uneaten burger and another for the devoured burger list
            connection.query("SELECT * FROM burgers WHERE devoured = false;", function(error, results) {
                if (error) throw error;

                connection.query("SELECT * FROM burgers WHERE devoured = true;", function(error, result2) {
                    if (error) throw error;

                    resolve([results, result2]);
                });
            });

        });
    },

    insertOne: async function(burgerName) {
        return new Promise(resolve => {

            //Inserts a new burger name and returns that same record
            connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [burgerName], function(error, results) {
                if (error) throw error;

                resolve(results);
            });

        });
    },

    updateOne: async function(id) {
        return new Promise(resolve => {

            //Updates specific burger devoured property to true 
            connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [id], function(error, results) {
                if (error) throw error;

                resolve(results);
            });

        });
    },

    close: async function() {
        return new Promise()(resolve => {
            connection.end(function(error) {

            });
        });
    }

}

module.exports = ORM;