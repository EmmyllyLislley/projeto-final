const GeneroService = require("../services/generoService");

class GeneroController {
    constructor() {
        this.generoService = GeneroService;
    }

    async cadastrar(req, res) {
        try {
            const { nome } = req.body;

            const genero = await this.generoService.cadastrar(nome);

            res.status(201).json({
                mensagem: "Gênero cadastrado com sucesso!",
                genero,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome } = req.body;

            const genero = await this.generoService.atualizar(id, nome);

            res.status(200).json({
                mensagem: "Gênero atualizado com sucesso!",
                genero,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async remover(req, res) {
        try {
            const { id } = req.params;

            await this.generoService.remover(id);

            res.status(200).json({
                mensagem: "Gênero removido com sucesso!",
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async listar(req, res) {
        try {
            const generos = await this.generoService.listar();

            res.status(200).json({
                mensagem: "Lista de gêneros",
                generos,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;

            const genero = await this.generoService.buscarPorId(id);

            res.status(200).json({
                mensagem: "Gênero encontrado",
                genero,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }
}

module.exports = new GeneroController();
