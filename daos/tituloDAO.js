const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "projeto_final");

class TituloDAO {
    constructor() {
        this.connection = connection;
    }

    criarTabelaTitulo() {
        const sql = `CREATE TABLE titulos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(150) NOT NULL,
            data_lancamento DATE,
            classificacao_indicativa VARCHAR(10)
        );`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela titulos: " + err);
                return;
            }

            console.log('Tabela titulos criada!');
        });
    }

    removerTabelaTitulos() {
        const sql = `DROP TABLE titulos`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a remover a tabela titulos: " + err);
                return;
            }

            console.log('Tabela titulos criada!');
        });
    }

    adicionarTitulo(titulo) {
        const sql = `INSERT INTO titulos VALUES (?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [titulo.nome, titulo.dataLancamento, titulo.classificacaoIndicativa],
            (err, result) => {
                if(err) {
                    reject(err);
                    return
                }
                resolve(result);
            });
        });
    }

    atualizarTitulo(id, novoTitulo) {
        const sql = `UPDATE titulo
                     SET nome = ?, dataLancamento = ?, classificacaoIndicativa = ?
                     WHERE id = ?`
        
        return new Promise((resolve, result) => {
            this.connection.query(sql, [novoTitulo.nome, novoTitulo.dataLancamento, novoTitulo.classificacaoIndicativa, id],
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
        const sql = `DELETE FROM ttulos WHERE id = ?`

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
}