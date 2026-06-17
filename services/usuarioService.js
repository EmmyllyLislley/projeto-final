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

        // CORREÇÃO CRÍTICA: Garante que a senha seja tratada como string e remove espaços
        // Dentro do método cadastrar(nome, username, email, senha)

        // 1. Forçar a conversão para String e remover espaços acidentais nas pontas
        const senhaStr = String(senha).trim();

        // 2. Agora a validação de tamanho funciona perfeitamente para qualquer formato de entrada
        if (senhaStr.length < 6) {
            throw new Error("A senha deve ter pelo menos 6 caracteres ou dígitos.");
        }

        const regexSemEspacos = /^[a-zA-Z0-9_]+$/;
        username = username.trim();

        if (!regexSemEspacos.test(username)) {
            throw new Error("O username não pode conter espaços ou caracteres especiais!");
        }

        email = email.trim().toLowerCase();
        if (!validator.isEmail(email)) {
            throw new Error("Email inválido!");
        }

        const emailCadastrado = await this.usuarioDAO.buscarPorEmail(email);
        const usernameCadastrado = await this.usuarioDAO.buscarPorUsername(username);

        if (emailCadastrado) {
            throw new Error("Já existe um usuário com esse email.");
        }

        if (usernameCadastrado) {
            throw new Error("Já existe um usuário com esse username");
        }

        // Envia a senha devidamente sanitizada
        const usuario = new UsuarioModel(null, nome.trim(), username, email, senhaStr);
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

        const usuarioExistente = await this.usuarioDAO.buscarPorId(id);

        if (!usuarioExistente) {
            throw new Error("Usuário não encontrado");
        }

        const usernameCadastrado = await this.usuarioDAO.buscarPorUsername(username);

        if (usernameCadastrado && usernameCadastrado.id !== id) {
            throw new Error("Já existe um usuário com esse username");
        }

        // CORREÇÃO: Passar o ID recebido e manter as propriedades obrigatórias (email, senha) do registo existente
        const usuario = new UsuarioModel(
            id, 
            nome.trim(), 
            username, 
            usuarioExistente.email, 
            usuarioExistente.senha
        );

        return await this.usuarioDAO.atualizar(id, usuario);
    }

    async alterarSenha(id, senhaAtual, novaSenha) {
        if (!id || !senhaAtual || !novaSenha) {
            throw new Error("Todos os campos são obrigatórios");
        }

        // CORREÇÃO CRÍTICA: Garante que a nova senha seja uma string válida de 6 dígitos
        const novaSenhaStr = String(novaSenha).trim();
        if (novaSenhaStr.length < 6) {
            throw new Error("A nova senha deve ter pelo menos 6 caracteres/dígitos.");
        }

        const usuarioEncontrado = await this.usuarioDAO.buscarPorId(id);
        if (!usuarioEncontrado) {
            throw new Error("Usuário não encontrado");
        }

        if (usuarioEncontrado.senha !== String(senhaAtual)) {
            throw new Error("Senha atual incorreta");
        }

        const usuario = new UsuarioModel(
            usuarioEncontrado.id,
            usuarioEncontrado.nome,
            usuarioEncontrado.username,
            usuarioEncontrado.email,
            usuarioEncontrado.senha,
        );

        usuario.alterarSenha(String(senhaAtual), novaSenhaStr);

        return await this.usuarioDAO.setValue(usuario.id, usuario.senha);
    }    
    
    async listar() {
        return await this.usuarioDAO.listar();
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

        const usuario = await this.usuarioDAO.buscarPorUsername(username.trim());

        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        return usuario;
    }
}

module.exports = new UsuarioService();