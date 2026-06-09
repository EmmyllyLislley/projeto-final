const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class FilmeDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaFilmes() {
        const sql = `CREATE TABLE IF NOT EXISTS filmes (
                    id INT PRIMARY KEY,
                    duracao INT NOT NULL,

                    FOREIGN KEY (id) REFERENCES titulos(id));`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar tabela filmes: " + err);
            }
            console.log("Tabela filmes criada!");
        });
    }

    removerTabelaFilmes() {
        const sql = `DROP TABLE IF NOT EXISTS filmes`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela filmes: " + err);
            }
            console.log('Tabela filmes removida!');
        });
    }

    adicionarFilme(idTitulo, filme) {
        const sql = `INSERT INTO filmes (titulo_id, duracao) VALUES (?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, filme.duracao], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    atualizarFilme(idTitulo, filme) {
        const sql = `UPDATE filmes
                    SET duracao = ?
                    WHERE titulo_id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [filme.duracao, idTitulo], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    removerFilme(idTitulo) {
        const sql = `DELETE FROM filmes
                     WHERE titulo_id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    listarFilmes() {
        const sql = `SELECT t.id, t.nome, t.data_lancamento, t.classificacao_indicativa, t.diretor_id, f.duracao
            FROM titulos t JOIN filmes f ON t.id = f.titulo_id`;

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

    buscarFilmesPorId(id) {
        const sql = `SELECT t.id, t.nome, t.data_lancamento, t.classificacao_indicativa, t.diretor_id, f.duracao
                    FROM titulos t JOIN filmes f ON t.id = f.titulo_id
                    WHERE t.id = ?`;

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
}

module.exports = FilmeDAO;