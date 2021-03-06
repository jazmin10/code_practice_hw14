DROP DATABASE IF EXISTS burgers2_db;

CREATE DATABASE burgers2_db;

USE burgers2_db;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);