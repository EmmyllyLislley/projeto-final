const connection = require("../config/db");

class DiretorDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(diretor) {
        const sql = `
            INSERT INTO diretores (nome)
            VALUES (?)
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [diretor.nome], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result.insertId);
            });
        });
    }

    atualizar(id, diretor) {
        const sql = `
            UPDATE diretores
            SET nome = ?
            WHERE id = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [diretor.nome, id], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    remover(id) {
        const sql = `
            DELETE FROM diretores
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
        const sql = `SELECT * FROM diretores `;

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
            FROM diretores
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

    buscarPorNome(nome) {
        const sql = `
            SELECT *
            FROM diretores
            WHERE nome = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [nome], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }
}

module.exports = new DiretorDAO();
