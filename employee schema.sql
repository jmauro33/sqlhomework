
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department(
  id INT AUTO INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INT AUTO INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NULL,
  department id INT 
);

CREATE TABLE employee(
  id INT AUTO INCREMENT PRIMARY KEY,
  firstname VARCHAR (30) NOT NULL ,
  lastname VARCHAR (30) NOT NULL ,
  role id INT 
  manager id INT NULL
);

USE employeeDB;

INSERT INTO (department, role, employee)
VALUES ("", "", "");

INSERT INTO (department, role, employee)
VALUES ("", "", "");

INSERT INTO (department, role, employee)
VALUES ("", "", "");


