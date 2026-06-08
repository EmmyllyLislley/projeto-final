const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "projeto_final");

class AvaliacaoDAO {
    constructor() {
        this.connection = connection;
    }

    criarTabelaAvaliacao() {
        const sql = `CREATE TABLE avaliacao (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nota INT NOT NULL,
            critica VARCHAR(255)
        );`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela avaliacao: " + err);
                return;
            }

            console.log('Tabela avaliacao criada!');
        });
    }

    removerTabelaAvaliacao() {
        const sql = `DROP TABLE avaliacao`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a remover a tabela avaliacao: " + err);
                return;
            }

            console.log('Tabela avaliacao criada!');
        });
    }

    adicionarAvaliacao(avaliacao) {
        const sql = `INSERT INTO avaliacao VALUES (?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [avaliacao.nota, avaliacao.critica],
            (err, result) => {
                if(err) {
                    reject(err);
                    return
                }
                resolve(result);
            });
        });
    }

    atualizarAvaliacao(id, novoAvaliacao) {
        const sql = `UPDATE avaliacao
                     SET nota = ?, critica = ?
                     WHERE id = ?`
        
        return new Promise((resolve, result) => {
            this.connection.query(sql, [novoAvaliacao.nota, novoAvaliacao.critica, id],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    removerAvaliacao(id) {
        const sql = `DELETE FROM ttulos WHERE id = ?`

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

    listarAvaliacaos() {
        const sql = `SELECT * FROM avaliacao`

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


module.exports = AvaliacaoDAO;