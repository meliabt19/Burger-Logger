CREATE DATABASE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(25),
    devoured BOOL DEFAULT FALSE,
    PRIMARY KEY (id)
);