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
    database: "employeetracker"
});

// If connection fails throw an error
connection.connect((err) => {
    if (err) throw err;
    mainMenu();
});
// Inquirer prompts user to choose from "choices array"
const mainMenu = () => {
    inquirer.prompt({
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
        name: "choices"
    }) 