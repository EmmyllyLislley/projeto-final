const connection = require("../config/db");

class UsuarioDAO {
    constructor() {
        this.connection = connection;
    }

    adicionar(usuario) {
        const sql = `INSERT INTO usuarios (nome, username, email, senha) VALUES (?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [usuario.nome, usuario.username, usuario.email, usuario.senha],
                (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                },
            );
        });
    }

    atualizar(id, novoUsuario) {
        const sql = `UPDATE usuarios 
                     SET nome = ?, username = ?
                     WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(
                sql,
                [novoUsuario.nome, novoUsuario.username, id],
                (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                },
            );
        });
    }

    //criar função para alterar email

    atualizarSenha(id, novaSenha) {
        const sql = `UPDATE usuarios
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

    remover(id) {
        const sql = `DELETE FROM usuarios WHERE id = ?`;

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

    listar() {
        const sql = `SELECT * FROM usuarios`;

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

    buscarPorId(id) {
        const sql = `SELECT * FROM usuarios WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [id], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result[0]);
            });
        });
    }

    buscarPorUsername(username) {
        const sql = `SELECT * FROM usuarios WHERE username = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [username], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result[0]);
            });
        });
    }

    buscarPorEmail(email) {
        const sql = `SELECT * FROM usuarios WHERE email = ?`;

        return new Promise((resolve, reject) => {
            this.connection.query(sql, [email], (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result[0]);
            });
        });
    }
}

module.exports = new UsuarioDAO();
