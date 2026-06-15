const connection = require("../config/db");

class TituloAtorDAO {
    constructor() {
        this.connection = connection;
    }

    adicionarAtorAoTitulo(idTitulo, idAtor) {
        const sql = `
            INSERT INTO titulos_atores
            (id_titulo, id_ator)
            VALUES (?, ?)
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, idAtor], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    removerAtorDoTitulo(idTitulo, idAtor) {
        const sql = `
            DELETE FROM titulos_atores
            WHERE id_titulo = ?
            AND id_ator = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, idAtor], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    listarAtoresDoTitulo(idTitulo) {
        const sql = `SELECT a.*
                    FROM atores a
                    INNER JOIN titulos_atores ta
                    ON a.id = ta.id_ator
                    WHERE ta.id_titulo = ?
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

    listarTitulosDoAtor(idAtor) {
        const sql = `SELECT t.*
                    FROM titulos t
                    INNER JOIN titulos_atores ta
                    ON t.id = ta.id_titulo
                    WHERE ta.id_ator = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idAtor], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }
}

module.exports = new TituloAtorDAO();
