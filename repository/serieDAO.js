const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class SerieDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaSerie() {
        const sql = `CREATE TABLE series (
                    id INT PRIMARY KEY,
                    temporadas INT,
                    total_episodios INT,

                    FOREIGN KEY (id) REFERENCES titulos(id));`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar tabela series: " + err);
            }
            console.log("Tabela series criada!");
        });
    }

    removerTabelaSeries() {
        const sql = `DROP TABLE series`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela series: " + err);
            }
            console.log('Tabela series removida!');
        });
    }


    adicionarSerie(idTitulo, serie) {
        const sql = `INSERT INTO series (titulo_id, temporadas, episodios) VALUES (?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [idTitulo, serie.temporadas, serie.episodios],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }


    atualizarSerie(idTitulo, serie) {
        const sql = `UPDATE series
                    SET temporadas = ?, episodios = ?
                    WHERE titulo_id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [serie.temporadas, serie.episodios, idTitulo],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    removerSerie(idTitulo) {
        const sql = `DELETE FROM series
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

    listarSeries() {
        const sql = `SELECT t.id, t.nome, t.data_lancamento, t.classificacao_indicativa, t.diretor_id, s.temporadas, s.episodios
                    FROM titulos t
                    JOIN series s ON t.id = s.titulo_id`;

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

    buscarSeriePorId(id) {
        const sql = `SELECT t.id, t.nome, t.data_lancamento, t.classificacao_indicativa, t.diretor_id, s.temporadas, s.episodios
                    FROM titulos t
                    JOIN series s ON t.id = s.titulo_id
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

module.exports = SerieDAO;