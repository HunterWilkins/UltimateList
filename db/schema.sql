CREATE DATABASE oc4qqcj9hpvvscaj;
USE oc4qqcj9hpvvscaj;

CREATE TABLE list (
    id INT NOT NULL AUTO_INCREMENT,
    text VARCHAR(120) NOT NULL,
    finished BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);