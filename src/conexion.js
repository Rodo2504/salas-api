const mysql = require('mysql');

module.exports = mysql.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b65686317e6fe4",
    password: "c8307c77",
    database: "heroku_36d13502ba2c480"
});