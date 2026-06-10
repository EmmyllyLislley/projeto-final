const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class TituloAtorDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaTituloAtor() {
        const sql = `CREATE TABLE titulo_ator (
                    id_titulo INT,
                    id_ator INT,
                    PRIMARY KEY(id_titulo, id_ator),

                    FOREIGN KEY(id_titulo) REFERENCES titulos(id),
                    FOREIGN KEY(id_ator) REFERENCES atores(id));`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar tabela tituloAtor: " + err);
            }
            console.log("Tabela tituloAtor criada!");
        });
    }

    removerTabelaTituloAtor() {
        const sql = `DROP TABLE titulo_ator`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela titulo_ator: " + err);
            }
            console.log('Tabela titulo_ator removida!');
        });
    }

    adicionarTituloAtor(idTitulo, idAtor) {
        const sql = `INSERT INTO titulo_ator (id_titulo, id_ator) VALUES (?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, idAtor], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    removerTituloAtor(idTitulo, idAtor) {
        const sql = `DELETE FROM titulo_ator
                     WHERE id_titulo = ?
                     AND id_ator = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, idAtor], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    listarTituloAtor() {
        const sql = `SELECT * FROM titulo_ator`;

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

    buscarAtoresDoTitulo(tituloId) {
        const sql = `SELECT a.*
                    FROM atores a
                    JOIN titulo_ator ta ON a.id = ta.ator_id
                    WHERE ta.titulo_id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query( sql, [tituloId], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }
}

module.exports = TituloAtorDAO;