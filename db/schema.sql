DROP DATABASE IF EXISTS binge_db;

CREATE DATABASE binge_db;
USE binge_db;

-- create first: table for users --

CREATE TABLE users
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
 
);

-- create second: table for users --
CREATE TABLE binges
(
	id INTEGER NOT NULL AUTO_INCREMENT,
    userId INTEGER NOT NULL,
	title varchar(255) NOT NULL,
	presentlyWatching BOOLEAN DEFAULT false,
    alreadyWatched BOOLEAN DEFAULT false,
	PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id)
);

