const mysql = require('mysql2');

// to create connection
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'node-complete',
	password: 'alona310103',
});

module.exports = pool.promise();
