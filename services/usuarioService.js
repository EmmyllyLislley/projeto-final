const UsuarioModel = require("../models/usuarioModel");
const UsuarioDAO = require("../repository/usuarioDAO");

class UsuarioService {
    constructor() {
        this.usuarioDAO = UsuarioDAO;
    }

    async cadastrar(nome, username, email, senha) {
        const emailCadastrado = await this.usuarioDAO.buscarPorEmail(email);
        const usernameCadastrado =
            await this.usuarioDAO.buscarPorUsername(username);

        if (emailCadastrado) {
            throw new Error("Já existe um usuário com esse email.");
        }

        if (usernameCadastrado) {
            throw new Error("Já existe um usuário com esse username");
        }

        const usuario = new UsuarioModel(null, nome, username, email, senha);
        await this.usuarioDAO.adicionar(usuario);
        return usuario;
    }

    async login(email, senha) {
        const usuario = await this.usuarioDAO.buscarPorEmail(email);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        if (usuario.senha !== senha) {
            throw new Error("Senha inválida.");
        }

        return usuario;
    }

    async atualizar(id, nome, username) {
        const usuarioId = await this.usuarioDAO.buscarPorId(id);
        const usernameCadastrado =
            await this.usuarioDAO.buscarPorUsername(username);

        if (!usuarioId) {
            throw new Error("Usuário não encontrado");
        }

        if (usernameCadastrado) {
            throw new Error("Já existe um usuário com esse username");
        }

        const usuario = new UsuarioModel(null, nome, username);

        return await this.usuarioDAO.atualizar(id, usuario);
    }

    async alterarSenha(id, senhaAtual, novaSenha) {
        const usuarioEncontrado = await this.usuarioDAO.buscarPorId(id);

        if (!usuarioEncontrado) {
            throw new Error("Usuário não encontrado");
        }

        const usuario = new UsuarioModel(
            usuarioEncontrado.id,
            usuarioEncontrado.nome,
            usuarioEncontrado.username,
            usuarioEncontrado.email,
            usuarioEncontrado.senha,
        );

        usuario.alterarSenha(senhaAtual, novaSenha);
        return await this.usuarioDAO.atualizarSenha(usuario.id, usuario.senha);
    }

    async remover(id) {
        const usuarioEncontrado = await this.usuarioDAO.buscarPorId(id);

        if (!usuarioEncontrado) {
            throw new Error("Usuário não encontrado");
        }

        return await this.usuarioDAO.remover(id);
    }

    async listar() {
        return await this.usuarioDAO.listar();
    }

    async buscarPorId(id) {
        const usuario = await this.usuarioDAO.buscarPorId(id);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        return usuario;
    }

    async buscarPorUsername(username) {
        const usuario = await this.usuarioDAO.buscarPorUsername(username);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        return usuario;
    }
}

module.exports = new UsuarioService();
