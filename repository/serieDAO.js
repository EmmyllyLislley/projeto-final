const connection = require("../config/db");

class SerieDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(idTitulo, serie) {
        const sql = `INSERT INTO series (id_serie, temporadas, total_episodios) VALUES (?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [ idTitulo, serie.temporadas, serie.totalEpisodios],
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

    atualizar(id, novaSerie) {
        const sql = `UPDATE series
                     SET temporadas = ?, total_episodios = ?
                     WHERE id_serie = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [novaSerie.temporadas, novaSerie.totalEpisodios, id],
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
        const sql = `DELETE FROM series WHERE id_serie = ?`;

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
        const sql = `SELECT t.id, t.nome, t.data_lancamento, t.classificacao_indicativa, s.temporadas, s.total_episodios
                     FROM titulos t
                     INNER JOIN series s
                     ON t.id = s.id_serie`;

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
        const sql = `SELECT t.id, t.nome, t.data_lancamento, t.classificacao_indicativa, s.temporadas, s.total_episodios
                     FROM titulos t
                     INNER JOIN series s
                     ON t.id = s.id_serie
                     WHERE t.id = ?`;

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
}

module.exports = new SerieDAO();
