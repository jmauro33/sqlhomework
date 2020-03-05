DROP DATABASE IF EXISTS employeeDB;
USE employeeDB;

CREATE TABLE department(
  id INT AUTO_INCREMENT, 
  department VARCHAR(30) NOT NULL
  PRIMARY KEY
);

CREATE TABLE role(
  id INT AUTO_INCREMENT, 
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT,
  PRIMARY KEY
);

CREATE TABLE name(
  id INT AUTO_INCREMENT, 
  firstname VARCHAR (30) NOT NULL,
  lastname VARCHAR (30) NOT NULL,
  role_id INT, 
  manager_id INT NULL,
  PRIMARY KEY
);


INSERT INTO department (department, role, name)
VALUES ("IT", "Manager", "Alan");

INSERT INTO role (department, role, name)
VALUES ("HR", "Director", "Julie");

INSERT INTO name (department, role, name)
VALUES ("Marketing", "Associate", "Kevin");


