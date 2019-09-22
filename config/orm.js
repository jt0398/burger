const connection = require("./connection");

var ORM = {
    selectAll: function() {
        return new Promise(resolve => {

            pool.query("SELECT * FROM burgers", function(error, results) {
                if (error) throw error;

                resolve(results[0]);
            });

        });
    },

    insertOne: function(burgerName) {
        return new Promise(resolve => {

            pool.query("INSERT INTO burgers (burger_name) VALUES (?); SELECT * FROM burgers WHERE id=(SELECT LAST_INSERT_ID());", [burgerName], function(error, results) {
                if (error) throw error;

                console.log();
                resolve(results[0]);
            });

        });
    },

    updateOne: function(id) {
        return new Promise(resolve => {

            pool.query("UPDATE burgers SET devoured = true WHERE id = ?", [id], function(error, results) {
                if (error) throw error;

                resolve(results);
            });

        });
    },

    close: function() {
        return new Promise()(resolve => {
            pool.end(function(error) {

            });
        });
    }

}

module.exports = ORM;