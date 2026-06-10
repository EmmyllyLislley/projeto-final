const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "catalogo")

class UsuarioDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaUsuario() {
        const sql = `CREATE TABLE IF NOT EXISTS usuarios (
                id INT PRIMARY KEY AUTO_INCREMENT,
                nome VARCHAR(100),
                email VARCHAR(100) UNIQUE,
                senha VARCHAR(255)
        )`

        this.connection.query(sql, (err) => {
            if(err) {
                console.error("Erro ao criar a tabela usuários: " + err);
                return;
            }

            console.log('Tabela usuários criada!');
        })
    }

    removerTabela() {
        const sql = `DROP TABLE IF EXISTS usuarios`;

        this.connection.query(sql, (err) => {
            if(err) {
                console.error("Erro ao remover tabela usuários: " + err);
                return;
            }

            console.log('Tabela excluída!');
        })
    }

    adicionarUsuario(usuario) {
        const sql = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [usuario.nome, usuario.email, usuario.senha], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    atualizarUsuario(id, novoUsuario) {
        const sql = `UPDATE usuarios
                    SET nome = ?, email = ?
                    WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [novoUsuario.nome, novoUsuario.email, id], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }

    atualizarSenha(id, novaSenha) {
        const sql =`UPDATE usuarios
                    SET senha = ?
                    WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [novaSenha, id], (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                resolve(result);
            });
        });
    }

    removerUsuario(id) {
        const sql = `DELETE FROM usuarios WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [id], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result)
            });
        });
    }

    listarUsuarios() {
        const sql = `SELECT * FROM usuarios`;

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

    buscarUsuarioPorEmail(email) {
        const sql = `SELECT * FROM usuarios WHERE email = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [email], (err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result[0]);
            });
        });
    }

    buscarUsuarioPorId(id) {
        const sql = `SELECT * FROM usuarios WHERE id = ?`

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

module.exports = UsuarioDAO;