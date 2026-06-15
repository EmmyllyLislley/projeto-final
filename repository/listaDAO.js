const connection = require("../config/db");

class ListaDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(lista) {
        const sql = `
            INSERT INTO listas
            (nome, id_usuario)
            VALUES (?, ?)
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [lista.nome, lista.usuario],
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

    atualizar(id, lista) {
        const sql = `
            UPDATE listas
            SET nome = ?
            WHERE id = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [lista.nome, id], (err, result) => {
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
            DELETE FROM listas
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
        const sql = `SELECT * FROM listas`;

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
            FROM listas
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

module.exports = new ListaDAO();
