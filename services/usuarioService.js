const UsuarioModel = require('../models/UsuarioModel');
const UsuarioDAO = require('../daos/UsuarioDAO');

class UsuarioService {
    constructor() {
        this.usuarioDAO = new UsuarioDAO();
    }
    

    async cadastrarUsuario(nome, email, senha) {
        const emailExistente = await this.usuarioDAO.buscarUsuarioPorEmail(email);
        if (emailExistente) {
            throw new Error("Já existe um usuário com esse email.");
        }

        const usuario = new Usuario(null, nome, email, senha);
        await this.usuarioDAO.adicionarUsuario(usuario);
        return usuario;
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


    async alterarSenha(id, senhaAtual,novaSenha) {
        const dadosUsuario = await this.usuarioDAO.buscarUsuarioPorId(id);

        if (!dadosUsuario) {
            throw new Error("Usuário não encontrado.");
        }

        const usuario = new Usuario(dadosUsuario.id, dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha);
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
}

module.exports = UsuarioService;