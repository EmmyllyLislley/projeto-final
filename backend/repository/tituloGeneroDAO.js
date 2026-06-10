const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class TituloGeneroDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaTituloGenero() {
        const sql = `CREATE TABLE titulo_genero (
                    id_titulo INT,
                    id_genero INT,

                    PRIMARY KEY(id_titulo, id_genero),

                    FOREIGN KEY(id_titulo) REFERENCES titulos(id),
                    FOREIGN KEY(id_genero) REFERENCES generos(id));`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar tabela titulo_genero: " + err);
            }
            console.log("Tabela titulo_genero criada!");
        });
    }

    removerTabelaTituloGenero() {
        const sql = `DROP TABLE titulo_genero`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela titulo_genero: " + err);
            }
            console.log('Tabela titulo_genero removida!');
        });
    }

    adicionarTituloGenero(idTitulo, idGenero) {
        const sql = `INSERT INTO titulo_genero (id_titulo, id_genero) VALUES (?, ?)`;

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

    removerTituloGenero(idTitulo, idGenero) {
        const sql = `DELETE FROM titulo_genero 
                    WHERE id_titulo = ? AND id_genero = ?`;

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

    listarTituloGenero() {
        const sql = `SELECT * FROM titulo_genero`;

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

module.exports = TituloGeneroDAO;