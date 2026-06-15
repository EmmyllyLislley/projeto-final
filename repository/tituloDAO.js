const connection = require("../config/db");

class TituloDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(titulo, idDiretor) {
        const sql = `INSERT INTO titulos (nome, data_lancamento, classificacao_indicativa, id_diretor) VALUES (?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [
                    titulo.nome,
                    titulo.dataLancamento,
                    titulo.classificacaoIndicativa,
                    idDiretor,
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

    atualizar(id, novoTitulo) {
        const sql = `UPDATE titulos
                     SET nome = ?, data_lancamento = ?, classificacao_indicativa = ?
                     WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [
                    novoTitulo.nome,
                    novoTitulo.dataLancamento,
                    novoTitulo.classificacaoIndicativa,
                    id,
                ],
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
        const sql = `DELETE FROM titulos WHERE id = ?`;

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
        const sql = `SELECT * FROM titulos`;

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
        const sql = `SELECT * FROM titulos WHERE id = ?`;

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

module.exports = new TituloDAO();
