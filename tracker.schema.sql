DROP DATABASE IF EXISTS employeetracker;

CREATE DATABASE employeetracker;

USE employeetracker;


CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30));

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id));

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id));

INSERT INTO department (name)
VALUE ("Administration");
INSERT INTO department (name)
VALUE ("Services");
INSERT INTO department (name)
VALUE ("Development");
INSERT INTO department (name)
VALUE ("Procurement");


INSERT INTO role (title, salary, department_id)
VALUE ("Representative", 170000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Analyst", 250000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Specialist", 125000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Coordinator", 85000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Generalist", 60000,2 );
INSERT INTO role (title, salary, department_id)
VALUE ("Consultant", 150000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Technician", 125000, 3);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Rachel","Kahly",null,5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Paul", "Wall", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Steven", "Smith", 3, 7);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;