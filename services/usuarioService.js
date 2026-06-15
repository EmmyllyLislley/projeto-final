const UsuarioModel = require("../models/usuarioModel");
const UsuarioDAO = require("../repository/usuarioDAO");

const validator = require("validator");

class UsuarioService {
    constructor() {
        this.usuarioDAO = UsuarioDAO;
    }

    async cadastrar(nome, username, email, senha) {
        if (!nome?.trim() || !username?.trim() || !email?.trim() || !senha) {
            throw new Error("Todos os campos são obrigatórios");
        }

        const regexSemEspacos = /^[a-zA-Z0-9_]+$/;

        username = username.trim();

        if (!regexSemEspacos.test(username)) {
            throw new Error(
                "O username não pode conter espaços ou caracteres especiais!",
            );
        }

        email = email.trim().toLowerCase();

        if (!validator.isEmail(email)) {
            throw new Error("Email inválido!");
        }

        if (senha.length < 6) {
            throw new Error("Senha muito curta");
        }

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
        if (!email?.trim() || !senha) {
            throw new Error("Email e senha são obrigatórios");
        }

        email = email.trim().toLowerCase();

        if (!validator.isEmail(email)) {
            throw new Error("Email inválido!");
        }

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
        if (!id) {
            throw new Error("ID é obrigatório");
        }

        if (!nome?.trim() || !username?.trim()) {
            throw new Error("Nome e username são obrigatórios");
        }

        const regexSemEspacos = /^[a-zA-Z0-9_]+$/;

        username = username.trim();

        if (!regexSemEspacos.test(username)) {
            throw new Error(
                "O username não pode conter espaços ou caracteres especiais!",
            );
        }

        const usuarioId = await this.usuarioDAO.buscarPorId(id);

        if (!usuarioId) {
            throw new Error("Usuário não encontrado");
        }

        const usernameCadastrado =
            await this.usuarioDAO.buscarPorUsername(username);

        // evita conflito com o próprio usuário
        if (usernameCadastrado && usernameCadastrado.id !== id) {
            throw new Error("Já existe um usuário com esse username");
        }

        const usuario = new UsuarioModel(null, nome, username);

        return await this.usuarioDAO.atualizar(id, usuario);
    }

    async alterarSenha(id, senhaAtual, novaSenha) {
        if (!id || !senhaAtual || !novaSenha) {
            throw new Error("Todos os campos são obrigatórios");
        }

        if (novaSenha.length < 6) {
            throw new Error("A nova senha deve ter pelo menos 6 caracteres");
        }

        const usuarioEncontrado = await this.usuarioDAO.buscarPorId(id);

        if (!usuarioEncontrado) {
            throw new Error("Usuário não encontrado");
        }

        if (usuarioEncontrado.senha !== senhaAtual) {
            throw new Error("Senha atual incorreta");
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
        if (!id) {
            throw new Error("ID é obrigatório");
        }

        const usuarioEncontrado = await this.usuarioDAO.buscarPorId(id);

        if (!usuarioEncontrado) {
            throw new Error("Usuário não encontrado");
        }

        return await this.usuarioDAO.remover(id);
    }

    async buscarPorId(id) {
        if (!id) {
            throw new Error("ID é obrigatório");
        }

        const usuario = await this.usuarioDAO.buscarPorId(id);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        return usuario;
    }

    async buscarPorUsername(username) {
        if (!username?.trim()) {
            throw new Error("Username é obrigatório");
        }

        const usuario = await this.usuarioDAO.buscarPorUsername(username);

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        return usuario;
    }
}

module.exports = new UsuarioService();
