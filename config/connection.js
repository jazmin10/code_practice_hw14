// CONNECTING TO MYSQL DATABASE

// ============== GLOBAL VARIABLES ==============
	var mysql = require("mysql");

	var connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "root",
		database: "burgers2_db"
	});

// ============== MAIN PROCESSES ==============

	connection.connect(function(err) {
		if (err) throw err;

		console.log("connected as id", connection.threadId);
	});

	module.exports = connection;