const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class GeneroDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaGeneros() {
        const sql = `CREATE TABLE generos (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nome VARCHAR(150) NOT NULL);`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela generos: " + err);
            }
            console.log('Tabela generos criada!');
        });
    }

    removerTabelaGeneros() {
        const sql = `DROP TABLE generos`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela generos: " + err);
            }
            console.log('Tabela generos removida!');
        });
    }

    adicionarGenero(genero) {
        const sql = `INSERT INTO generos (nome) VALUES (?)`;

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

    atualizarGenero(id, novoGeneros) {
        const sql = `UPDATE generos
                     SET nome = ?
                     WHERE id = ?`
        
        return new Promise((resolve, reject) => {
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
        const sql = `DELETE FROM generos WHERE id = ?`

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
        const sql = `SELECT * FROM generos`

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

    buscarGeneroPorId(id) {
        const sql = `SELECT * FROM generos WHERE id = ?`;

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

module.exports = GeneroDAO;