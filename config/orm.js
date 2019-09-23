const connection = require("./connection");

var ORM = {
    selectAll: async function() {
        return new Promise(resolve => {

            connection.query("SELECT * FROM burgers WHERE devoured = false; SELECT * FROM burgers WHERE devoured = true;", function(error, results) {
                if (error) throw error;

                resolve(results);
            });

        });
    },

    insertOne: async function(burgerName) {
        return new Promise(resolve => {

            connection.query("INSERT INTO burgers (burger_name) VALUES (?); SELECT * FROM burgers WHERE id=(SELECT LAST_INSERT_ID());", [burgerName], function(error, results) {
                if (error) throw error;

                console.log();
                resolve(results);
            });

        });
    },

    updateOne: async function(id) {
        return new Promise(resolve => {

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