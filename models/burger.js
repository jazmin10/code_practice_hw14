// BURGER MODEL

// ============== GLOBAL VARIABLES ==============
	var orm = require("../config/orm.js");

// ============== MAIN PROCESSES ==============
	module.exports = {

		// Select all values from the burgers table
		selectAll: function(cb) {

			orm.selectAll("burgers", cb);
		},

		// Insert a new burger to the burgers table given name of burger
		insertOne: function(name, cb) {

			orm.insertOne("burgers", {burger_name: name}, cb);
		},

		// Update devoured value of a burger given its id
		updateOne: function(newVal, condition, cb) {
			var arr = [{devoured: newVal}, {id: condition}];

			orm.updateOne("burgers", arr, cb);
		}
	};