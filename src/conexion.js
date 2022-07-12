const mysql = require('mysql');
const dbConfig = require('../src/conexion.js');

var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

module.exports = connection;

/*
module.exports = mysql.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b65686317e6fe4",
    password: "c8307c77",
    database: "heroku_36d13502ba2c480"
}); */