var orm = require("../config/orm");

var Burger = {

    findAll: async function() {
        const burgers = await orm.selectAll();
        return burgers;
    },

    create: async function(burgerName) {
        const burger = await orm.insertOne(burgerName);
        return burger;
    },

    update: async function(id) {
        const result = await orm.updateOne(id);
        return result;
    }

}

module.exports = Burger;