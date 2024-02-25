const db= require('../db/connection');
const consTab=require('console.table');
const inquirer =require ('inquirer');

const startInq=()=>{
    inquirer.prompt([
        {
            type:'list',
            name:"toDo",
            message:"What would you like to do?",
            choices:[
                'view all departments',
                'view all roles',
                'view all employees',
                'view employees by manager',
                'View employees by department',
                'add department',
                'add role',
                'add employee',
                'Update an employees department',
                'Update an emplyees manager',
                'Remove Department',
                'Remove Emplyee',
                'Remove Role',
                'Exit'
            ]

        }
    ])
    .then(answers=>{
        const nextPrompt
    
    })
}