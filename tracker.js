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
// error throw

// put choices for inquirer

// add functions

// insert user input

// user selection
