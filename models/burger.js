var orm = require("orm");

var Burger = function() {
    this.findAll = async function() {
        var burgers = await orm.selectAll();
    }
}

module.exports = Burger;