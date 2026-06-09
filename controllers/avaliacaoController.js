const AvaliacaoService = require('../services/avaliacaoService');

class AvaliacaoController {

    constructor() {
        this.avaliacaoService = new AvaliacaoService();
    }

    async cadastrar(req, res) {
        try {

            const {
                usuarioId,
                tituloId,
                nota,
                critica
            } = req.body;

            await this.avaliacaoService.cadastrarAvaliacao(
                usuarioId,
                tituloId,
                nota,
                critica
            );

            res.send(
                "Avaliação cadastrada com sucesso!"
            );

        } catch(err) {

            res.send(err.message);

        }
    }

    async buscarPorId(req, res) {
        try {

            const { id } = req.params;

            const avaliacao =
                await this.avaliacaoService.buscarPorId(id);

            res.send(avaliacao);

        } catch(err) {

            res.send(err.message);

        }
    }

    async listar(req, res) {
        try {

            const avaliacoes =
                await this.avaliacaoService.listarAvaliacoes();

            res.send(avaliacoes);

        } catch(err) {

            res.send(err.message);

        }
    }

    async atualizar(req, res) {
        try {

            const { id } = req.params;

            const {
                nota,
                critica
            } = req.body;

            const avaliacao =
                await this.avaliacaoService.atualizarAvaliacao(
                    id,
                    nota,
                    critica
                );

            res.send(avaliacao);

        } catch(err) {

            res.send(err.message);

        }
    }

    async remover(req, res) {
        try {

            const { id } = req.params;

            await this.avaliacaoService.removerAvaliacao(id);

            res.send(
                "Avaliação removida com sucesso!"
            );

        } catch(err) {

            res.send(err.message);

        }
    }

    async buscarPorUsuario(req, res) {
        try {

            const { usuarioId } = req.params;

            const avaliacoes =
                await this.avaliacaoService.buscarPorUsuario(
                    usuarioId
                );

            res.send(avaliacoes);

        } catch(err) {

            res.send(err.message);

        }
    }

    async buscarPorTitulo(req, res) {
        try {

            const { tituloId } = req.params;

            const avaliacoes =
                await this.avaliacaoService.buscarPorTitulo(
                    tituloId
                );

            res.send(avaliacoes);

        } catch(err) {

            res.send(err.message);

        }
    }

}

module.exports = AvaliacaoController;