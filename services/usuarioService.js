<<<<<<< HEAD
const UsuarioModel = require('../models/UsuarioModel');
const UsuarioDAO = require('../repository/UsuarioDAO');
=======
const UsuarioDAO = require('../daos/usuarioDAO');
const validator = require('validator');
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52

class UsuarioService {
    constructor() {
        this.usuarioDAO = new UsuarioDAO();
    }
<<<<<<< HEAD
    

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
=======

    async login(email, senha) {
        const usuario = await this.usuarioDAO.buscarUsuarioPorEmail(email);
        if(!usuario) {
            throw new Error('E-mail ou senha inválidos');
        }

        if(usuario.senha !== senha) {
            throw new Error('E-mail ou senha inválidos');
        }

        return usuario;
    }

    async cadastrarUsuario(usuario) {
        if (!usuario.nome || !usuario.email || !usuario.senha) {
            throw new Error('Todos os campos são obrigatórios!');
        }

        if (!validator.isEmail(usuario.email)) {
            throw new Error('Insira um email válido!');
        }

        const emailExistente = await this.usuarioDAO.buscarUsuarioPorEmail(usuario.email)
        if(emailExistente) {
            throw new Error('Email já cadastrado!')
        }

        if(usuario.senha.length < 8) {
            throw new Error('Senha deve ter pelo menos 8 caracteres');
        }

        return await this.usuarioDAO.adicionarUsuario(usuario);
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
    }
}

module.exports = UsuarioService;