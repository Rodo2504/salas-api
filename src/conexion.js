const mysql     = require('mysql');
const settings  = require('./config');
//import { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } from './config';

module.exports = mysql.createPool({
    host: settings.DB_HOST,
    user: settings.DB_USER,
    password: settings.DB_PASSWORD,
    port: settings.DB_PORT,
    database: settings.DB_NAME
}); 

/*
module.exports = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b65686317e6fe4",
    password: "c8307c77",
    database: "heroku_36d13502ba2c480"
}); */