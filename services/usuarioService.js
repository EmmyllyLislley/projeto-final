const UsuarioDAO = require('../daos/usuarioDAO');
const Usuario = require('../models/usuarioModel');

const usuarioDAO = new UsuarioDAO();

class UsuarioService {
    constructor(usuarioDAO) {
        this.usuarioDAO = usuarioDAO;
    }

    cadastrarUsuario(nome, email, senha) {
        if(!email.includes('@')) {
            throw new Error('Email inválido');
        }

        const usuario = new Usuario(nome, email, senha);

        this.usuarioDAO.adicionarUsuario(usuario);
    }
}

module.exports = UsuarioService;