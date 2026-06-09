const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class AtorDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaAtores() {
        const sql = `CREATE TABLE atores (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(150) NOT NULL,
            dataNascimento DATE,
            nacionalidade VARCHAR(100)
        );`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela atores: " + err);
            }
            console.log('Tabela atores criada!');
        });
    }

    removerTabelaAtores() {
        const sql = `DROP TABLE atores`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela atores: " + err);
            }
            console.log('Tabela atores removida!');
        });
    }

    adicionarAtor(ator) {
        const sql = `INSERT INTO atores (nome, dataNascimento, nacionalidade) VALUES (?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [ator.nome, ator.dataNascimento, ator.nacionalidade],
            (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    atualizarAtor(id, novoAtor) {
        const sql = `UPDATE atores
                     SET nome = ?, dataNascimento = ?, nacionalidade = ?
                     WHERE id = ?`
        
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [novoAtor.nome, novoAtor.dataNascimento, novoAtor.nacionalidade, id],
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
        const sql = `DELETE FROM atores WHERE id = ?`

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

    listarAtores() {
        const sql = `SELECT * FROM atores`

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

    buscarAtorPorId(id) {
        const sql = `SELECT * FROM atores WHERE id = ?`;

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


module.exports = AtorDAO;