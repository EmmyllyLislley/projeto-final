const TituloGeneroService = require("../services/tituloGeneroService");

class TituloGeneroController {
    constructor() {
        this.tituloGeneroService = TituloGeneroService;
    }

    async adicionar(req, res) {
        try {
            const { idTitulo, idGenero } = req.body;

            await this.tituloGeneroService.adicionarGeneroAoTitulo(
                idTitulo,
                idGenero,
            );

            res.status(201).json({
                mensagem: "Genero associado ao título com sucesso.",
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async remover(req, res) {
        try {
            const { idTitulo, idGenero } = req.body;

            await this.tituloGeneroService.removerGeneroDoTitulo(idTitulo, idGenero);

            res.status(200).json({
                mensagem: "Associação removida com sucesso.",
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async listarGenerosDoTitulo(req, res) {
        try {
            const { idTitulo } = req.params;

            const Generos =
                await this.tituloGeneroService.listarGenerosDoTitulo(idTitulo);

            res.status(200).json({
                Generos,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async listarTitulosDoGenero(req, res) {
        try {
            const { idGenero } = req.params;

            const titulos =
                await this.tituloGeneroService.listarTitulosDoGenero(idGenero);

            res.status(200).json({
                titulos,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }
}

module.exports = new TituloGeneroController();
