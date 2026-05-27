const ConnectionFactory = require('../connectionFactory.js');
const connection = new ConnectionFactory("localhost", "root", "", "projeto_final")

class UsuarioDAO {
    constructor() {
        this.connection = connection.open();
    }

    criarTabelaUsuario() {
        const sql = `CREATE TABLE IF NOT EXISTS usuarios (
                id INT PRIMARY KEY AUTO_INCREMENT,
                nome VARCHAR(100),
                email VARCHAR(100),
                senha VARCHAR(8)
        )`

        this.connection.query(sql, (err) => {
            if(err) {
                console.log("Erro ao criar a tabela usuários: " + err);
                return;
            }

            console.log('Tabela usuários criada!');
        })
    }

    removerTabela() {
        const sql = `DROP TABLE usuarios`;

        this.connection.query(sql, (err) => {
            if(err) {
                console.log("Erro ao remover tabela usuários: " + err);
                return;
            }

            console.log('Tabela excluída!');
        })
    }

    adicionarUsuario(usuario) {
        const sql = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;

        this.connection.query(sql, [usuario.nome, usuario.email, usuario.senha], (err) => {
            if (err) {
                console.log("Erro ao adicionar usuário: ", err);
                return;
            }
            console.log("Usuário cadastrado!");
        });
    }

    atualizarUsuario(id, novoUsuario) {
        const sql = `UPDATE usuarios
                    SET nome = ?, email = ?
                    WHERE id = ?`;

        this.connection.query(sql, [novoUsuario.nome, novoUsuario.email, id], (err) => {
            if(err) {
                console.log("Erro ao atualizar usuário: " + err);
                return;
            }
            console.log("Usuário atualizado com sucesso!")
        })
    }

    removerUsuario(id) {
        const sql = `DELETE FROM usuarios WHERE id = ?`;

        this.connection.query(sql, [id], (err) => {
            if(err) {
                console.log("Erro ao excluír usuário: " + err);
                return;
            }
            console.log("Usuário excluído!")
        });
    }

    listarUsuarios() {
        const sql = `SELECT * FROM usuarios`;

        this.connection.query(sql, (err, result) => {
            if(err) {
                console.log("Erro ao listar usuários: " + err);
                return;
            }
            console.log("Lista completa de usuários!");
            console.log(result);
        });
    }

    buscarUsuarioPorEmail(email) {
        const sql = `SELECT * FROM usuarios
                    WHERE email = ?`;

        this.connection.query(sql, [email], (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    }
}

module.exports = UsuarioDAO;