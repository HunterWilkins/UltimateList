CREATE DATABASE ultimateDB;
USE ultimateDB;

CREATE TABLE list (
    id INT NOT NULL AUTO_INCREMENT,
    text VARCHAR(120) NOT NULL,
    finished BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);