const connection = require("../config/db");

class GeneroDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(genero) {
        const sql = `
            INSERT INTO generos (nome)
            VALUES (?)
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [genero.nome], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result.insertId);
            });
        });
    }

    atualizar(id, genero) {
        const sql = `
            UPDATE generos
            SET nome = ?
            WHERE id = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [genero.nome, id], (err, result) => {
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
            DELETE FROM generos
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
        const sql = `SELECT * FROM generos`;

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
            FROM generos
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

module.exports = new GeneroDAO();
