const fs = require("fs");
const mysql = require("mysql2");
const path = require("path");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    multipleStatements: true
});

const sql = fs.readFileSync(
    path.join(__dirname, "tabelas.sql"),
    "utf8"
);

connection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Conectado ao MySQL");

    connection.query(sql, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("Banco e tabelas criados com sucesso!");

        connection.end();
    });
});