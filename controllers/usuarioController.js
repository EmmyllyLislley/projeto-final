const UsuarioService = require('../services/usuarioService');

class UsuarioController {
    constructor() {
        this.usuarioService = new UsuarioService();
    }

    async cadastrar(req, res) {
        try {
            const usuario = await this.usuarioService.cadastrarUsuario(req.body);
            res.json({
                mensagem: 'Usuário cadastrado com sucesso!',
                usuario
            });

        } catch(err) {
            res.json({
                erro: err.message
            });

        }
    }

    async login(req, res) {
        try {
            const usuario = await this.usuarioService.login(req.body.email, req.body.senha);
            res.json({
                mensagem: 'Login realizado com sucesso!',
                usuario
            });
        } 
        
        catch(err) {
            res.json({
                erro: err.message
            });

        }
    }
}

module.exports = UsuarioController;