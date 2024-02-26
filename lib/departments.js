const db = require('../db/connection');
const consTab = require('console.table');
const inquirer = require("inquirer");

const startInq = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: "toDo",
            message: "What would you like to do?",
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'view employees by manager',
                'View employees by department',
                'add department',
                'add role',
                'add employee',
                'Update an employees department',
                'Update an employees manager',
                'Remove Department',
                'Remove Employee',
                'Remove Role',
                'Exit'
            ]
        }
    ])
    .then(answers => {
        const nextPrompt = answers.toDo;
        if (nextPrompt === "view all departments") {
            viewDepartments();
        }
        if (nextPrompt === "view all roles") {
            viewRoles();
        }
        if (nextPrompt === "view all employees") {
            viewEmployees();
        }
        if (nextPrompt === "add role") {
            addRole();
        }
        if (nextPrompt === "add department") {
            addDepartment();
        }
        if (nextPrompt === "add employee") {
            addEmployee();
        }
        if (nextPrompt === "update an employee role") {
            updateEmployeeRole();
        }
        if (nextPrompt === "Update an employees manager") {
            updateEmployeeManager();
        }
        if (nextPrompt === "view employees by manager") {
            viewByManager();
        }
        if (nextPrompt === "view employees by department") {
            viewByDepartment();
        }
        if (nextPrompt === "remove department") {
            removeDepartment();
        }
        if (nextPrompt === "remove employee") {
            removeEmployee();
        }
        if (nextPrompt === "remove role") {
            removeRole();
        }
        if (nextPrompt === "Exit") {
            process.exit();
        }
    });
};

const viewDepartments = () =>{
    const sql=`SELECT * FROM departments`;
    db.query(sql,(err,rows)=>{
        if(err){
            throw err;
        }
        console.log('\n');
        console.table(rows);
        return startInq();
    });
};

module.exports= startInq;