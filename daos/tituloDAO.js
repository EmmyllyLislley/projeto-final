const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "projeto_final");

class TituloDAO {
    constructor() {
        this.connection = connection;
    }

    async adicionarTitulo(titulo, tipo) {
        const sql = `INSERT INTO titulos (nome, data_lancamento, classificacao_indicativa, tipo)
                     VALUES (?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql,
                [titulo.nome, titulo.dataLancamento, titulo.classificacaoIndicativa, tipo],
                (err, result) => {
                    if (err){
                        reject(err);
                        return;
                    } 
                resolve(result);
            });
        });
    }

    async atualizar(id, titulo) {
        const sql = `UPDATE titulos
                     SET nome = ?, data_lancamento = ?, classificacao_indicativa = ?, tipo = ?
                     WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql,
                [titulo.nome, titulo.dataLancamento, titulo.classificacaoIndicativa, titulo.diretor.id, titulo.tipo, id],
                (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    async remover(id) {
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

    async buscarPorId(id) {
        const sql = ` SELECT * FROM titulos WHERE id = ?`;

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

    async listar() {
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
}

module.exports = TituloDAO;