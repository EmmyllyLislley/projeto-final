const UsuarioDAO = require('../daos/usuarioDAO');
const validator = require('validator');

class UsuarioService {
    constructor() {
        this.usuarioDAO = new UsuarioDAO();
    }

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
    }
}

module.exports = UsuarioService;