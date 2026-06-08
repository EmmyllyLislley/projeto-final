const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "projeto_final");

class GeneroDAO {
    constructor() {
        this.connection = connection;
    }

    criarTabelaGeneros() {
        const sql = `CREATE TABLE genero (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(150) NOT NULL
        );`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela genero: " + err);
                return;
            }

            console.log('Tabela genero criada!');
        });
    }

    removerTabelaGeneros() {
        const sql = `DROP TABLE genero`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a remover a tabela genero: " + err);
                return;
            }

            console.log('Tabela genero criada!');
        });
    }

    adicionarGeneros(genero) {
        const sql = `INSERT INTO genero VALUES (?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [genero.nome],
            (err, result) => {
                if(err) {
                    reject(err);
                    return
                }
                resolve(result);
            });
        });
    }

    atualizarGeneros(id, novoGeneros) {
        const sql = `UPDATE genero
                     SET nome = ?
                     WHERE id = ?`
        
        return new Promise((resolve, result) => {
            this.connection.query(sql, [novoGeneros.nome, id],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    removerGeneros(id) {
        const sql = `DELETE FROM genero WHERE id = ?`

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [id], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    listarGeneros() {
        const sql = `SELECT * FROM genero`

        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }
}

module.exports = GeneroDAO;