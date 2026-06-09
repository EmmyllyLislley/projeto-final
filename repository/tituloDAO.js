const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class TituloDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaTitulo() {
        const sql = `CREATE TABLE titulos (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nome VARCHAR(150) NOT NULL,
                    dataLancamento DATE,
                    classificacaoIndicativa INT,
                    diretor_id INT,

                    FOREIGN KEY (diretor_id) REFERENCES diretores(id));`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar tabela titulos: " + err);
            }
            console.log("Tabela titulos criada!");
        });
    }

    removerTabelaTitulos() {
        const sql = `DROP TABLE titulos`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela titulos: " + err);
            }
            console.log('Tabela titulos removida!');
        });
    }

    adicionarTitulo(titulo, diretorId) {
        const sql = `INSERT INTO titulos (nome, data_lancamento, classificacao_indicativa, diretor_id) VALUES (?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql,[titulo.nome, titulo.dataLancamento, titulo.classificacaoIndicativa, diretorId],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result.insertId);
            });
        });
    }

    atualizarTitulo(id, titulo, diretorId) {
        const sql = `UPDATE titulos
                    SET nome = ?, data_lancamento = ?, classificacao_indicativa = ?, diretor_id = ?
                    WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [titulo.nome, titulo.dataLancamento, titulo.classificacaoIndicativa, diretorId, id],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    removerTitulo(id) {
        const sql =`DELETE FROM titulos WHERE id = ?`;

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

    listarTitulos() {
        const sql = `SELECT * FROM titulos`

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

    buscarPorId(id) {
        const sql = `SELECT * FROM titulos WHERE id = ?`;

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

module.exports = TituloDAO;