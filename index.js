var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Viterbo",
  database: "employeeDB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt([{
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find Employee",
        "View departments",
        "View roles by department",
        "Find employees by role",
        "Search for a specific employee",
        "Find employee with a specific role",
        "Add a new employee",
        "Add a new role",
        "Add a new department",
        "exit"
      ]
    }])
    .then(function (answer) {
      switch (answer.action) {
        case "Find Employee":
          employeeSearch();
          break;

        case "View departments":
          departmentSearch();
          break;

        case "view roles by department":
          departmentsearchbyRole();
          break;

        case "Find employee with a specific role":
          roleSearch();
          break;

        case "Search for a specific employee":
          employeesearchbyName();
          break;

        case "Add a new employee":
          addEmployee();
          break;
        case "Add a new role":
          addRole();
          break;

        case "Add a new department":
          addDepartment();
          break;
   
        case "exit":
          connection.end();
          break;
          default:
          employeeSearch();  
      }
    });
}

function employeeSearch() {
  inquirer
    .prompt([{
      name: "employee",
      type: "input",
      message: "Which employee would you like to search for?"
    }])
    .then(function (answer) {
      var query = "SELECT firstname, lastname, role_id FROM name WHERE ?";
      connection.query(query, { firstname: answer.employee }, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log("firstname: " + res[i].firstname + " || lastname: " + res[i].lastname + " || role_id: " + res[i].role_id);
        }
        runSearch();
      });
    });
}

function departmentSearch() {
  // var query = "SELECT name, id FROM department";
  // connection.query(query, function (err, res) {
  //   if (err) throw err;
  //  // for (var i = 0; i < res.length; i++) {
  //  //   console.log(res[i].name);
  //  // }
  //   rolesearchbyDepartment(res);
  // });
    inquirer
      .prompt({
        name: "department",
        type: "input",
        message: "What department would you like to look for?"
      })
      .then(function(answer) {
        console.log(answer.department);
        connection.query("SELECT * FROM department WHERE ?", { name: answer.department}, function(err, res) {
          if (err) throw err;
         console.log(res);
          runSearch();
        });
      });
  
}

function roleSearch() {
  inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "What role would you like to look for?"
    })
    .then(function(answer) {
      console.log(answer.role);
      connection.query("SELECT * FROM role WHERE ?", { title: answer.role}, function(err, res) {
        if (err) throw err;
       console.log(res);
        runSearch();
      });
    });
}
      

function departmentsearchbyRole(res) {
  inquirer
    .prompt({
      name: "department",
      type: "list",
      choices: res,
      message: "What department would you like to look for?"
    })
    .then(function(answer) {
      console.log(answer.department);
      connection.query("SELECT * FROM role WHERE ?", { department_id: answer.department }, function(err, res) {
        if (err) throw err;
       for (var i = 0; i < res.length; i++) {
       console.log(res[i].firstname);
       }
        runSearch();
      });
    });
}

function employeesearchbyName(res) {
  inquirer
    .prompt({
      name: "firstname",
      type: "list",
      choices: res,
      message: "Which employee would you like to look for?"
    })
    .then(function(answer) {
      connection.query("SELECT * FROM name WHERE ?", { firstname: answer.firstname }, function(err, res) {
        if (err) throw err;
       for (var i = 0; i < res.length; i++) {
       console.log(res[i].firstname);
       }
        runSearch();
      });
    });
}

function addEmployee(res) {
  inquirer
    .prompt([{
      name: "firstname",
      type: "input",
      message: "Whats the employee's firstname?"
    },{
      name: "lastname",
      type: "input",
      message: "Whats the employee's lastname?"
    },{
      name: "manager_id",
      type: "input",
      message: "Whats the managers id?"
    },{
      name: "role_id",
      type: "input",
      message: "whats the role id?"
    }])
    .then(function(answer) {
      connection.query("INSERT INTO name (firstname,lastname,manager_id,role_id) VALUES (?,?,?,?)", [answer.firstname,answer.lastname,answer.manager_id,answer.role_id], function(err, res) {
        if (err) throw err;
       for (var i = 0; i < res.length; i++) {
       console.log(res[i].firstname);
       }
        runSearch();
      });
    });
}
function addRole(res) {
  inquirer
    .prompt([{
      name: "title",
      type: "input",
      message: "Whats the title?"
    },{
      name: "manager_id",
      type: "input",
      message: "Whats the salary?"
    },{
      name: "department_id",
      type: "input",
      message: "whats the department id?"
    }])
    .then(function(answer) {
      connection.query("INSERT INTO role (title,salary,department_id) VALUES (?,?,?)", [answer.title,answer.salary,answer.department_id], function(err, res) {
        if (err) throw err;
       for (var i = 0; i < res.length; i++) {
       console.log(res[i].title);
       }
        runSearch();
      });
    });
}
function addDepartment(res) {
  inquirer
    .prompt([{
      name: "name",
      type: "input",
      message: "Whats the name?"
    },{
      name: "department_id",
      type: "input",
      message: "whats the department id?"
    }])
    .then(function(answer) {
      connection.query("INSERT INTO department (name) VALUES (?)", [answer.name], function(err, res) {
        if (err) throw err;
       for (var i = 0; i < res.length; i++) {
       console.log(res[i].title);
       }
        runSearch();
      });
    });
}