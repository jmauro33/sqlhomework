DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department(
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(64) NOT NULL,
  department id INT 
);

CREATE TABLE employee(
  id INT PRIMARY KEY,
  first name VARCHAR (30) NOT NULL,
  last name VARCHAR (30) NOT NULL,
  role id INT 
  manager id INT NULL
);
