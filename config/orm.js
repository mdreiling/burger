// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    
// Select all model for page load
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString), function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        }
        
    },
    
// Insert one model for adding burger
    insertOne: function(burgerName, ingredients) {
        var queryString = "INSERT INTO burgers";
    }


// Update one model for updating burger (devouring)

};

// Export the orm object for the model
module.exports = orm;
