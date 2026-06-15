const connection = require("../config/db");

class AtorDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(ator) {
        const sql = `
            INSERT INTO atores
            (nome, data_nascimento, nacionalidade)
            VALUES (?, ?, ?)
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [ator.nome, ator.dataNascimento, ator.nacionalidade],
                (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve(result.insertId);
                },
            );
        });
    }

    atualizar(id, ator) {
        const sql = `
            UPDATE atores
            SET nome = ?, data_nascimento = ?, nacionalidade = ?
            WHERE id = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [ator.nome, ator.dataNascimento, ator.nacionalidade, id],
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
        const sql = `
            DELETE FROM atores
            WHERE id = ?
        `;

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
        const sql = `SELECT * FROM atores`;

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
        const sql = `
            SELECT *
            FROM atores
            WHERE id = ?
        `;

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

module.exports = new AtorDAO();
