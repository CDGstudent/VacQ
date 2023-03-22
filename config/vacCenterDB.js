const mysql = require("mysql");
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Freezemaster2544',
    database: 'vaccenter'
});

module.exports = connection;