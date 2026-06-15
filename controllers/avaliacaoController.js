const AvaliacaoService = require("../services/avaliacaoService");

class AvaliacaoController {
    constructor() {
        this.avaliacaoService = AvaliacaoService;
    }

    async cadastrar(req, res) {
        try {
            const { idUsuario, idTitulo, nota, critica } = req.body;

            const avaliacao = await this.avaliacaoService.cadastrar(
                idUsuario,
                idTitulo,
                nota,
                critica,
            );

            res.status(201).json({
                mensagem: "Avaliação cadastrada com sucesso!",
                avaliacao,
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

            const { idUsuario, nota, critica } = req.body;

            const avaliacao = await this.avaliacaoService.atualizar(
                id,
                idUsuario,
                nota,
                critica,
            );

            res.status(200).json({
                mensagem: "Avaliação atualizada com sucesso!",
                avaliacao,
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

            await this.avaliacaoService.remover(id);

            res.status(200).json({
                mensagem: "Avaliação removida com sucesso!",
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async listar(req, res) {
        try {
            const avaliacoes = await this.avaliacaoService.listar();

            res.status(200).json({
                avaliacoes,
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

            const avaliacao = await this.avaliacaoService.buscarPorId(id);

            res.status(200).json({
                avaliacao,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async listarPorTitulo(req, res) {
        try {
            const { idTitulo } = req.params;

            const avaliacoes =
                await this.avaliacaoService.listarPorTitulo(idTitulo);

            res.status(200).json({
                avaliacoes,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }
}

module.exports = new AvaliacaoController();
