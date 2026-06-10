const UsuarioService = require('../services/usuarioService');

class UsuarioController {
    constructor() {
        this.usuarioService = new UsuarioService();
    }

    async cadastrar(req, res) {
        try {
            const {nome, email, senha} = req.body;

            const usuario = await this.usuarioService.cadastrarUsuario(nome, email, senha);

            res.json({mensagem: "Usuário cadastrado com sucesso!", usuario})

        } catch(err) {
            res.send(err.message);
        }
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            const resultado = await this.usuarioService.login(email, senha);

            return res.json({
                mensagem: "Login realizado com sucesso!",
                ...resultado
            });

        } catch (err) {
            return res.status(401).json({
                erro: err.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const {id} = req.params;

            const usuario = await this.usuarioService.buscarUsuarioPorId(id);

            res.send(usuario);

        } catch(err) {
            res.send(err.message);
        }
    }

    async listar(req, res) {
        try {
            const usuarios = await this.usuarioService.listarUsuarios();
            res.send(usuarios);

        } catch(err) {
            res.send(err.message);
        }
    }

    async alterarSenha(req, res) {
        try {
            const {id} = req.params;
            const {senhaAtual, novaSenha} = req.body;
            await this.usuarioService.alterarSenha(id, senhaAtual, novaSenha);

            res.send("Senha alterada com sucesso!");

        } catch(err) {
            res.send(err.message);
        }
    }

    async remover(req, res) {
        try {
            const {id} = req.params;

            await this.usuarioService.removerUsuario(id);

            res.send("Usuário removido com sucesso!");

        } catch(err) {
            res.send(err.message);
        }
    }
}

module.exports = UsuarioController;