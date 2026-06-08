const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "projeto_final");

class ListaDAO {
    constructor() {
        this.connection = connection;
    }

    criarTabelaLista() {
        const sql = `CREATE TABLE lista (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(150) NOT NULL
        );`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a tabela lista: " + err);
                return;
            }

            console.log('Tabela lista criada!');
        });
    }

    removerTabelaLista() {
        const sql = `DROP TABLE lista`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar a remover a tabela lista: " + err);
                return;
            }

            console.log('Tabela lista criada!');
        });
    }

    adicionarLista(lista) {
        const sql = `INSERT INTO lista VALUES (?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [lista.nome],
            (err, result) => {
                if(err) {
                    reject(err);
                    return
                }
                resolve(result);
            });
        });
    }

    atualizarLista(id, novaLista) {
        const sql = `UPDATE lista
                     SET nome = ?
                     WHERE id = ?`
        
        return new Promise((resolve, result) => {
            this.connection.query(sql, [novaLista.nome, id],
                (err, result) => {
                    if(err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    removerLista(id) {
        const sql = `DELETE FROM lista WHERE id = ?`

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

    listarListas() {
        const sql = `SELECT * FROM lista`

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


module.exports = ListaDAO;