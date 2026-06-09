const UsuarioModel = require('../models/UsuarioModel');
const UsuarioDAO = require('../repository/UsuarioDAO');

class UsuarioService {
    constructor() {
        this.usuarioDAO = new UsuarioDAO();
    }
    

    async cadastrarUsuario(nome, email, senha) {
        const emailCadastrado = await this.usuarioDAO.buscarUsuarioPorEmail(email);
        if (emailCadastrado) {
            throw new Error("Já existe um usuário com esse email.");
        }

        const usuario = new UsuarioModel(null, nome, email, senha);
        await this.usuarioDAO.adicionarUsuario(usuario);
        return usuario;
    }

    async alterarSenha(id, senhaAtual, novaSenha) {
        const usuario = await this.usuarioDAO.buscarUsuarioPorId(id);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        const usuario = new UsuarioModel(usuario.id, usuario.nome, usuario.email, usuario.senha);
        usuario.alterarSenha(senhaAtual, novaSenha);
        await this.usuarioDAO.atualizarSenha(usuario.id, usuario.senha);
        return usuario;
    }

    async removerUsuario(id) {
        const usuario = await this.usuarioDAO.buscarUsuarioPorId(id);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        await this.usuarioDAO.removerUsuario(id);
    }


    async buscarUsuarioPorId(id) {
        const usuario = await this.usuarioDAO.buscarUsuarioPorId(id);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }
        return usuario;
    }


    async listarUsuarios() {
        return await this.usuarioDAO.listarUsuarios();
    }
}

module.exports = UsuarioService;