const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "catalogo"
});

connection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Conectado ao banco!");
});

module.exports = connection;