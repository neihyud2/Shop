var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2458696357",
    database: "my_db"
});

module.exports = con