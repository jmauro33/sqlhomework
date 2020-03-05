var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
 
  port: 3306,

 
  user: "root",


  password: "Viterbo",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find employees by department",
        "Find all employees",
        "Find employees by role",
        "Search for a specific employee",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Find employee":
        employeeSearch();
        break;

      case "Find all employees who appear more than once":
        multiSearch();
        break;

      case "Find employee with a specific role":
        roleSearch();
        break;

      case "Search for a specific employee":
        employeeSearch();
        break;

      case "exit":
        connection.end();
        break;
      }
    });
}

function employeeSearch() {
  inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "Which employee would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT position, employee, department FROM employees WHERE ?";
      connection.query(query, { artist: answer.artist }, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || department: " + res[i].department + " || role: " + res[i].role);
        }
        runSearch();
      });
    });
}

function multiSearch() {
  var query = "SELECT employee FROM employee GROUP BY employee HAVING count(*) > 1";
  connection.query(query, function(err, res) {
    if (err) throw err;

    console.log('Results:', res.length);

    for (var i = 0; i < res.length; i++) {
      
      console.log(res[i].artist);
    }
    runSearch();
  });
}

function roleSearch() {
  inquirer
    .prompt([
      {
        name: "start",
        type: "input",
        message: "Enter starting position: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "end",
        type: "input",
        message: "enter ending position: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      var query = "SELECT position,department,role,employee FROM employee WHERE position BETWEEN ? AND ?";
      connection.query(query, [answer.start, answer.end], function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log(
            "Position: " +
              res[i].position +
              " || department: " +
              res[i].department +
              " || role: " +
              res[i].role +
              " || employee: " +
              res[i].employee
          );
        }
        runSearch();
      });
    });
}

function employeeSearch() {
  inquirer
    .prompt({
      name: "employees",
      type: "input",
      message: "What employee info would you like to look for?"
    })
    .then(function(answer) {
      console.log(answer.song);
      connection.query("SELECT * FROM Employees WHERE ?", { department: answer.role }, function(err, res) {
        if (err) throw err;
        console.log(
          "Position: " +
            res[0].position +
            " || department: " +
            res[0].department +
            " || role: " +
            res[0].role +
            " || employee: " +
            res[0].employee
        );
        runSearch();
      });
    });
}
