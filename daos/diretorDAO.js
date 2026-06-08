const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "projeto_final");

class DiretorDAO {
    constructor() {
        this.connection = connection;
    }

    criarTabelaDiretor() {
        const sql = `CREATE TABLE diretor (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(150) NOT NULL
        );`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela diretor: " + err);
                return;
            }

            console.log('Tabela diretor criada!');
        });
    }

    removerTabelaDiretor() {
        const sql = `DROP TABLE diretor`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a remover a tabela diretor: " + err);
                return;
            }

            console.log('Tabela diretor criada!');
        });
    }

    adicionarDiretor(diretor) {
        const sql = `INSERT INTO diretor VALUES (?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [diretor.nome],
            (err, result) => {
                if(err) {
                    reject(err);
                    return
                }
                resolve(result);
            });
        });
    }

    atualizarDiretor(id, novoDiretor) {
        const sql = `UPDATE diretor
                     SET nome = ?
                     WHERE id = ?`
        
        return new Promise((resolve, result) => {
            this.connection.query(sql, [novoDiretor.nome, id],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    removerDiretor(id) {
        const sql = `DELETE FROM diretor WHERE id = ?`

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

    listarDiretores() {
        const sql = `SELECT * FROM diretor`

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

module.exports = DiretorDAO;