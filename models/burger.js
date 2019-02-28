// Dependencies

var orm = require("../config/orm.js");

// Calls to database

var burger = {
    
    // Read all rows of the database
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

// Export for router
module.exports = burger;