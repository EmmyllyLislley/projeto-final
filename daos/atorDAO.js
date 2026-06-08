const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "projeto_final");

class AtorDAO {
    constructor() {
        this.connection = connection;
    }

    criarTabelaAtor() {
        const sql = `CREATE TABLE ator (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(150) NOT NULL
        );`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela ator: " + err);
                return;
            }

            console.log('Tabela ator criada!');
        });
    }

    removerTabelaAtors() {
        const sql = `DROP TABLE ator`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a remover a tabela ator: " + err);
                return;
            }

            console.log('Tabela ator criada!');
        });
    }

    adicionarAtor(ator) {
        const sql = `INSERT INTO ator VALUES (?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [ator.nome],
            (err, result) => {
                if(err) {
                    reject(err);
                    return
                }
                resolve(result);
            });
        });
    }

    atualizarAtor(id, novoAtor) {
        const sql = `UPDATE ator
                     SET nome = ?
                     WHERE id = ?`
        
        return new Promise((resolve, result) => {
            this.connection.query(sql, [novoAtor.nome, id],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    removerAtor(id) {
        const sql = `DELETE FROM ator WHERE id = ?`

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

    listarAtors() {
        const sql = `SELECT * FROM ator`

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


module.exports = AtorDAO;