// ============== GLOBAL VARIABLES ==============
	var express = require("express");
	var burger = require("../models/burger.js");

	var router = express.Router();

// ============== MAIN PROCESSES ==============

	// Add the following methods to the router object
	
	router.get("/", function(allReq, allResp) {
		displayBurgers(allResp);
	});

	module.exports = router;

// ============== FUNCTIONS ==============

	// Display all of the burgers in the table
	function displayBurgers(response) {
		
		burger.selectAll(function(results) {
			response.render("index", {burgers: results});
		});
	}