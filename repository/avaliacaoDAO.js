const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class AvaliacaoDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaAvaliacoes() {
        const sql = `CREATE TABLE IF NOT EXISTS avaliacoes (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    usuario_id INT NOT NULL,
                    titulo_id INT NOT NULL,
                    nota INT NOT NULL,
                    critica VARCHAR(255),

                    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
                    FOREIGN KEY (titulo_id) REFERENCES titulos(id)
                )`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar tabela avaliações: " + err);
            }
            console.log("Tabela avaliações criada!");
        });
    }

    removerTabelaAvaliacoes() {
        const sql = `DROP TABLE IF EXISTS avaliacoes`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover tabela avaliações: " + err);
            }
            console.log("Tabela avaliações removida!");
        });
    }

    adicionarAvaliacao(avaliacao) {
        const sql = `INSERT INTO avaliacoes (usuario_id, titulo_id, nota, critica)
                     VALUES (?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql, [avaliacao.usuarioId, avaliacao.tituloId, avaliacao.nota, avaliacao.critica],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                });
        });
    }

    atualizarAvaliacao(id, novaAvaliacao) {
        const sql = `UPDATE avaliacoes
                     SET nota = ?, critica = ?
                     WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql, [novaAvaliacao.nota, novaAvaliacao.critica, id],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                }
            );
        });
    }

    removerAvaliacao(id) {
        const sql = `DELETE FROM avaliacoes WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [id], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    listarAvaliacoes() { 
        const sql =  `SELECT * FROM avaliacoes`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    buscarAvaliacaoPorId(id) {
        const sql = `SELECT * FROM avaliacoes WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [id], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result[0]);
            });
        });
    }

    buscarAvaliacoesPorUsuario(usuarioId) {
        const sql = `SELECT *
                    FROM avaliacoes
                    WHERE usuario_id = ?
                `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [usuarioId], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    buscarAvaliacoesPorTitulo(tituloId) {
        const sql = `SELECT *
                    FROM avaliacoes
                    WHERE titulo_id = ?
                `;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [tituloId], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }
}

module.exports = AvaliacaoDAO;