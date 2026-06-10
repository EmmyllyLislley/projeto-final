const mysql = require('mysql2');

class ConnectionFactory {

    constructor(host, user, password, database) {
        this.connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database 
        });

    }

    open() {
        this.connection.connect(function(err) {
            if (err) {
                console.error('Erro ao conectar ao banco de dados: ' + err.stack);
                return;
            }
            console.log('Conexão bem-sucedida');
        });
        return this.connection;
    }

    end() {
        this.connection.end(function(err) {
            if (err) {
                console.error('Erro ao encerrar conexão com o banco de dados: ' + err.stack);
                return;
            }
            console.log('Conexão encerrada.');
        });
    }
}

module.exports = ConnectionFactory;