const UsuarioService = require("../services/usuarioService");
const jwt = require('jsonwebtoken')

class UsuarioController {
    constructor() {
        this.usuarioService = UsuarioService;
    }

    async cadastrar(req, res) {
        try {
            const { nome, username, email, senha } = req.body;

            const usuario = await this.usuarioService.cadastrar(
                nome,
                username,
                email,
                senha,
            );

            res.status(201).json({
                mensagem: "Usuário cadastrado com sucesso!",
                usuario: {
                    nome: usuario.nome,
                    username: usuario.username,
                    email: usuario.email,
                },
            });

            const token = jwt.sign(
                { id: usuario.id, email: usuario.email },
                process.env.JWT_SECRET, 
                {   expiresIn: "1d" })

            return res.json({
                sucesso: true,
                token: token
            });

            } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            const usuario = await this.usuarioService.login(email, senha);

            res.status(200).json({
                mensagem: "Login realizado com sucesso",
            });
        } catch (err) {
            res.status(401).json({
                erro: err.message,
            });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, username } = req.body;

            const usuario = await this.usuarioService.atualizar(
                id,
                nome,
                username,
            );

            res.status(200).json({
                mensagem: "Atualização realizada com sucesso",
                usuario: {
                    nome: usuario.nome,
                    username: usuario.username,
                },
            });
        } catch (err) {
            res.status(409).json({
                erro: err.message,
            });
        }
    }

    async alterarSenha(req, res) {
        try {
            const { id } = req.params;
            const { senhaAtual, novaSenha } = req.body;
            await this.usuarioService.alterarSenha(id, senhaAtual, novaSenha);

            res.status(200).json({
                mensagem: "Senha alterada com sucesso",
            });
        } catch (err) {
            res.status(409).json({
                erro: err.message,
            });
        }
    }

    async remover(req, res) {
        try {
            const { id } = req.params;

            const usuario = await this.usuarioService.remover(id);

            res.status(200).json({
                mensagem: "Usuário removido",
            });
        } catch (err) {
            res.status(440).json({ erro: err.message });
        }
    }

    async listar(req, res) {
        try {
            // Chama a função que criamos no Service
            const usuarios = await this.usuarioService.listar();
            
            // Devolve pro Front-end o JSON com sucesso (Status 200)
            res.status(200).json({ usuarios });
        } catch (erro) {
            console.error("Erro ao listar usuários:", erro);
            res.status(500).json({ erro: "Erro interno ao buscar usuários." });
        }
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;

            const usuario = await this.usuarioService.buscarPorId(id);

            res.status(200).json({
                mensagem: "Usuário encontrado",
                usuario,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    // async buscarPorNome(req, res) {
    //      try {
    //         const { nome } = req.body;

    //         const usuario = await this.usuarioService.buscarPorNome(nome);

    //         res.json({
    //             mensagem: "",
    //             usuario
    //         });

    //     } catch (err) {
    //         res.json({
    //             erro: err.message
    //         })
    //     }
    // }

    async buscarPorUsername(req, res) {
        try {
            const { username } = req.params;

            const usuario =
                await this.usuarioService.buscarPorUsername(username);

            res.json({
                mensagem: "",
                usuario,
            });
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    // async buscarPorEmail(req, res) {
    //      try {
    //         const { email } = req.body;

    //         const usuario = await this.usuarioService.buscarPorEmail(email);

    //         res.json({
    //             mensagem: "",
    //             usuario
    //         });

    //     } catch (err) {
    //         res.json({
    //             erro: err.message
    //         })
    //     }
    // }
}

module.exports = new UsuarioController();
