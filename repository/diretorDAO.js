const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class DiretorDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaDiretores() {
        const sql = `CREATE TABLE diretores (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nome VARCHAR(150) NOT NULL
                );`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela diretores: " + err);
            }
            console.log('Tabela diretores criada!');
        });
    }

    removerTabelaDiretores() {
        const sql = `DROP TABLE diretores`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela diretores: " + err);
            }
            console.log('Tabela diretores removida!');
        });
    }

    adicionarDiretor(diretor) {
        const sql = `INSERT INTO diretores (nome) VALUES (?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [diretor.nome], (err, result) => {
                if(err) {
                    reject(err);
                    return
                }
                resolve(result);
            });
        });
    }

    atualizarDiretor(id, novoDiretor) {
        const sql = `UPDATE diretores
                     SET nome = ?
                     WHERE id = ?`
        
        return new Promise((resolve, reject) => {
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
        const sql = `DELETE FROM diretores WHERE id = ?`

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
        const sql = `SELECT * FROM diretores`

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

    buscarDiretoresPorId(id) {
        const sql = `SELECT * FROM diretores WHERE id = ?`;

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
}

module.exports = DiretorDAO;