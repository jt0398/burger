var connection = require("./connection");

var ORM = function() {
    this.selectAll() = function() {
        return new Promise(resolve => {

            pool.query("SELECT * FROM burgers", function(error, results) {
                if (error) throw error;

                resolve(results[0]);
            });

        });
    }

    this.insertOne() = function(burgerName) {
        return new Promise(resolve => {

            pool.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function(error, results) {
                if (error) throw error;

                resolve(results);
            });

        });
    }

    this.updateOne() = function(id) {
        return new Promise(resolve => {

            pool.query("UPDATE burgers SET devoured = true WHERE id = ?", [id], function(error, results) {
                if (error) throw error;

                resolve(results);
            });

        });
    }
}

module.exports = new ORM();