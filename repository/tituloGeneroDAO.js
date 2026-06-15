const connection = require("../config/db");

class TituloGeneroDAO {
    constructor() {
        this.connection = connection;
    }

    adicionarGeneroAoTitulo(idTitulo, idGenero) {
        const sql = `
            INSERT INTO titulos_generos
            (id_titulo, id_genero)
            VALUES (?, ?)
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, idGenero], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    removerGeneroDoTitulo(idTitulo, idGenero) {
        const sql = `
            DELETE FROM titulos_generos
            WHERE id_titulo = ?
            AND id_genero = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, idGenero], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    listarGenerosDoTitulo(idTitulo) {
        const sql = `
            SELECT g.*
            FROM generos g
            INNER JOIN titulos_generos tg
                ON g.id = tg.id_genero
            WHERE tg.id_titulo = ?
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

    listarTitulosDoGenero(idGenero) {
        const sql = `
            SELECT t.*
            FROM titulos t
            INNER JOIN titulos_generos tg
                ON t.id = tg.id_titulo
            WHERE tg.id_genero = ?
        `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idGenero], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }
}

module.exports = new TituloGeneroDAO();
