const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "pokehub-db.mysql.database.azure.com",
    user: "pokehub_admin",
    password: "proyectointegrado10,.",
    database: "pokehub",
    port: 3306,
    ssl: {
        rejectUnauthorized: false
    }
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;