// Import MySQL connection.
var connection = require("../config/connection.js");


function addQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objtoSearch(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
    
// Select all model for page load
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString), function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        }
        
    },
    
// Insert one model for adding burger
    insertOne: function(table, burgerName, ingredients) {
        var queryString = "INSERT INTO " + table;
    }


// Update one model for updating burger (devouring)

};

// Export the orm object for the model
module.exports = orm;
