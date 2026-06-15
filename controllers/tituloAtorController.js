const TituloAtorService = require("../services/tituloAtorService");

class TituloAtorController {
    constructor() {
        this.tituloAtorService = TituloAtorService;
    }

    async adicionar(req, res) {
        try {
            const { idTitulo, idAtor } = req.body;

            await this.tituloAtorService.adicionarAtorAoTitulo(
                idTitulo,
                idAtor,
            );

            res.status(201).json({
                mensagem: "Ator associado ao título com sucesso.",
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async remover(req, res) {
        try {
            const { idTitulo, idAtor } = req.body;

            await this.tituloAtorService.removerAtorDoTitulo(idTitulo, idAtor);

            res.status(200).json({
                mensagem: "Associação removida com sucesso.",
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async listarAtoresDoTitulo(req, res) {
        try {
            const { idTitulo } = req.params;

            const atores =
                await this.tituloAtorService.listarAtoresDoTitulo(idTitulo);

            res.status(200).json({
                atores,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async listarTitulosDoAtor(req, res) {
        try {
            const { idAtor } = req.params;

            const titulos =
                await this.tituloAtorService.listarTitulosDoAtor(idAtor);

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

module.exports = new TituloAtorController();
