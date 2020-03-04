
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT 
);

CREATE TABLE employee(
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR (30) NOT NULL,
  lastname VARCHAR (30) NOT NULL,
  role _id INT, 
  manager_id INT NULL
);

