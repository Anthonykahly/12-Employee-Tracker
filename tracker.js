// Installed/Required Dependencies
const cTable = require("console.table");
const mysql = require("mysql");
const inquirer = require("inquirer");

// Create connection to SQL DB
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // Change this password to match the password in your DB (Yours may not be root)
  password: "root",
  database: "employeetracker",
});

// If connection fails throw an error
connection.connect((err) => {
  if (err) throw err;
  mainMenu();
});
// Inquirer prompts user to choose from "choices array"
const mainMenu = () => {
  inquirer
    .prompt({
      type: "list",
      choices: [
        "View departments",
        "View roles",
        "View employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update employee role",
      ],
      message: "Choose what you need to do:",
      name: "choices",
    })
    // Call functions depending on what user selections
    .then((res) => {
      console.log(res.choices);
      switch (res.choices) {
        case "View departments":
          viewAllDepartments();
          break;
        case "View roles":
          viewAllRoles();
          break;
        case "View employees":
          viewAllEmployees();
          break;
        case "Add department":
          addDept();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Update employee role":
          updateEmployeeRoleID();
          break;
      }
    });
};
