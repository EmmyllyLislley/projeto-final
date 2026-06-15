const connection = require("../config/db");

class FilmeDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(idTitulo, duracao) {
        const sql = `
        INSERT INTO filmes
        (id_filme, duracao)
        VALUES (?, ?)
    `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, duracao], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    atualizar(id, novoFilme) {
        const sql = `UPDATE filmes
                     SET duracao = ?
                     WHERE id_filme = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [novoFilme.duracao, id],
                (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                },
            );
        });
    }

    remover(id) {
        const sql = `DELETE FROM filmes WHERE id_filme = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [id], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    listar() {
        const sql = `SELECT t.id, t.nome, t.data_lancamento, t.classificacao_indicativa, f.duracao
                     FROM titulos t
                     INNER JOIN filmes f
                     ON t.id = f.id_filme
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    buscarPorId(id) {
        const sql = `SELECT t.id, t.nome, t.data_lancamento, t.classificacao_indicativa, f.duracao
                     FROM titulos t
                     INNER JOIN filmes f
                     ON t.id = f.id_filme
                     WHERE t.id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [id], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result[0]);
            });
        });
    }
}

module.exports = new FilmeDAO();
