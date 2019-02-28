// Dependencies

var orm = require("../config/orm.js");

var burger = {
    
    // Read all of the database
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // Create a new burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    // Update burger
    updateOne: function(objColsVals, condition, cb) {
        orm.updateOne("burgers", objColsVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;