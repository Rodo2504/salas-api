//const mysql = require('mysql');
import mysql from 'mysql';
import { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } from './config';

module.exports = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
}); 

/*
module.exports = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b65686317e6fe4",
    password: "c8307c77",
    database: "heroku_36d13502ba2c480"
}); */