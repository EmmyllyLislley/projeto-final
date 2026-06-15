const AtorService = require("../services/atorService");

class AtorController {
    constructor() {
        this.atorService = AtorService;
    }

    async cadastrar(req, res) {
        try {
            const { nome, dataNascimento, nacionalidade } = req.body;

            const ator = await this.atorService.cadastrar(
                nome,
                dataNascimento,
                nacionalidade,
            );

            res.status(201).json({
                mensagem: "Ator cadastrado com sucesso!",
                ator,
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

            const { nome, dataNascimento, nacionalidade } = req.body;

            const ator = await this.atorService.atualizar(
                id,
                nome,
                dataNascimento,
                nacionalidade,
            );

            res.status(200).json({
                mensagem: "Ator atualizado com sucesso!",
                ator,
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

            await this.atorService.remover(id);

            res.status(200).json({
                mensagem: "Ator removido com sucesso!",
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async listar(req, res) {
        try {
            const atores = await this.atorService.listar();

            res.status(200).json({
                mensagem: "Lista de atores",
                atores,
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

            const ator = await this.atorService.buscarPorId(id);

            res.status(200).json({
                mensagem: "Ator encontrado",
                ator,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }
}

module.exports = new AtorController();
