const connection = require("../config/db");

class ListaTituloDAO {
    constructor() {
        this.connection = connection;
    }

    adicionarTituloNaLista(idLista, idTitulo) {
        const sql = `
            INSERT INTO listas_titulos
            (id_lista, id_titulo)
            VALUES (?, ?)
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idLista, idTitulo], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    removerTituloDaLista(idLista, idTitulo) {
        const sql = `
            DELETE FROM listas_titulos
            WHERE id_lista = ?
            AND id_titulo = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idLista, idTitulo], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    listarTitulosDaLista(idLista) {
        const sql = `
            SELECT t.*
            FROM titulos t
            INNER JOIN listas_titulos lt
                ON t.id = lt.id_titulo
            WHERE lt.id_lista = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idLista], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    listarListasDoTitulo(idTitulo) {
        const sql = `
            SELECT l.*
            FROM listas l
            INNER JOIN listas_titulos lt
                ON l.id = lt.id_lista
            WHERE lt.id_titulo = ?
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

module.exports = new ListaTituloDAO();
