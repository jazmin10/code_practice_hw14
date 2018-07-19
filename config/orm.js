// OBJECT RELATIONAL MAPPING (ORM)

// ============== GLOBAL VARIABLES ==============
	var connection = require("./connection.js");

// ============== MAIN PROCESSES ==============

	module.exports = {

		// Select all values from a table
		selectAll: function(tableName, cb) {
			var allQry = "SELECT * FROM " + tableName;

			runQuery(cb, allQry);
		},

		// Insert a new value to a table
		insertOne: function(tableName, insertObj, cb) {
			var insertQry = "INSERT INTO " + tableName + " SET ?";

			runQuery(cb, insertQry, insertObj);
		},

		// Updates a value in a table
		updateOne: function(tableName, updtArr, cb) {
			var updtQry = "UPDATE " + tableName + " SET ? WHERE ?";

			runQuery(cb, updtQry, updtArr);
		}
	};

// ============== FUNCTIONS ==============
	function runQuery(cb, queryStr, phVals) {

		// If phVals exists then run the following query
		if (phVals) {
			connection.query(queryStr, phVals, function(err, data) {
				cb(data);
			});
			return;
		}

		connection.query(queryStr, function(err, data) {
			if (err) throw err;
			cb(data);
		});
	}	


	
