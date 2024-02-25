const mysql=require('mysql');
require('dotenv').config()

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'piano',
    database:"process.env.DB_NAME"
});

module.exports = db;