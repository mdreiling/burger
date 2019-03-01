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
        console.log("SelectAll data call in orm selected")
        var queryString = "SELECT * FROM " + table + ";";
        
        console.log(queryString);
        connection.query(queryString, function(err, result) {
                        
            console.log("Select All connection query fired")
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
// Insert one model for adding burger
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += addQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },


// Update one model for updating burger (devouring)
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objtoSearch(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })
    }
};

// Export the orm object for the model
module.exports = orm;
