// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    
// Select all model for page load
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString), function(err, result) {
            if (err) throw err;
            return result;
        }

    }

// Insert one model for adding burger

// Update one model for updating burger (devouring)

};

// Export the orm object for the model
module.exports = orm;
