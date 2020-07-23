CREATE DATABASE binge_db;

-- table for users --
CREATE TABLE binges
(
	id INTEGER NOT NULL AUTO_INCREMENT,
    userId INTEGER NOT NULL,
	title varchar(255) NOT NULL,
	presentlyWatching BOOLEAN DEFAULT false,
    alreadyWatched BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE users
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
 
);
