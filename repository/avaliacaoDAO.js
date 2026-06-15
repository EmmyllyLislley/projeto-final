const connection = require("../config/db");

class AvaliacaoDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(avaliacao, idTitulo) {
        const sql = `
            INSERT INTO avaliacoes
            (id_usuario, id_titulo, nota, critica)
            VALUES (?, ?, ?, ?)
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [
                    avaliacao.usuario,
                    idTitulo,
                    avaliacao.nota,
                    avaliacao.critica,
                ],
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

    atualizar(id, avaliacao) {
        const sql = `
            UPDATE avaliacoes
            SET nota = ?, critica = ?
            WHERE id = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [avaliacao.nota, avaliacao.critica, id],
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
        const sql = `DELETE FROM avaliacoes WHERE id = ?`;

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
        const sql = `SELECT * FROM avaliacoes`;

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
        const sql = `SELECT * FROM avaliacoes WHERE id = ?`;

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

    listarPorTitulo(idTitulo) {
        const sql = `
            SELECT *
            FROM avaliacoes
            WHERE id_titulo = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }
}

module.exports = new AvaliacaoDAO();
