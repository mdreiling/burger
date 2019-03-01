// Dependencies

var orm = require("../config/orm");

// Calls to database

var burger = {
    
    // Read all rows of the database
    selectAll: function(cb) {
        console.log("SelectAll in burger.js fired");
        orm.selectAll("burgers", function(res) {
            console.log("ORM SelectAll in burger.js fired")
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