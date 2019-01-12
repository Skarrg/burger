-- create burgers db and set up tables
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured_bool BOOLEAN NOT NULL DEFAULT 0,
	PRIMARY KEY (id)
);