const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo");

class ListaDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaListas() {
        const sql = `CREATE TABLE listas (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nome VARCHAR(100),
                    id_usuario INT,

                    FOREIGN KEY(id_usuario) REFERENCES usuarios(id));`

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao criar tabela filmes: " + err);
            }
            console.log("Tabela filmes criada!");
        });
    }

    removerTabelaListas() {
        const sql = `DROP TABLE listas`;

        this.connection.query(sql, (err) => {
            if(err) {
                throw new Error("Erro ao remover a tabela listas: " + err);
            }
            console.log('Tabela listas removida!');
        });
    }


    adicionarLista(lista) {
        const sql = `INSERT INTO listas (nome, id_usuario) VALUES (?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [lista.nome, lista.id_usuario], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    atualizarLista(id, novaLista) {
        const sql = `UPDATE listas
                     SET nome = ?
                     WHERE id = ?`
        
        return new Promise((resolve, reject) => {
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
        const sql = `DELETE FROM listas
                    WHERE id = ?`;

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

    listarListas() {
        const sql = `SELECT * FROM listas`;

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

    buscarListaPorId(id) {
        const sql = `SELECT * FROM listas WHERE id = ?`;

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
}

module.exports = ListaDAO;