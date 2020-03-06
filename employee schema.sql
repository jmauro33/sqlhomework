name
USE employeeDB;
DROP TABLE IF EXISTS department;

CREATE TABLE department(
  id INT AUTO_INCREMENT, 
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INT AUTO_INCREMENT, 
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE name(
  id INT AUTO_INCREMENT, 
  firstname VARCHAR (30) NOT NULL,
  lastname VARCHAR (30) NOT NULL,
  role_id INT NULL, 
  manager_id INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO department (name)
VALUES ("IT");

INSERT INTO role (title,salary,department_id)
VALUES ("Director",25,1);

INSERT INTO name ( firstname, lastname, role_id, manager_id)
VALUES ("Alan","Burns",1, null );


