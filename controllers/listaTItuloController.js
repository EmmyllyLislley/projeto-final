const ListaTituloService = require("../services/listaTituloService");

class ListaTituloController {
    constructor() {
        this.listaTituloService = ListaTituloService;
    }

    async adicionar(req, res) {
        try {
            const { idLista, idTitulo } = req.body;

            await this.listaTituloService.adicionarTituloNaLista(
                idLista,
                idTitulo,
            );

            res.status(201).json({
                mensagem: "Título adicionado à lista com sucesso.",
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async remover(req, res) {
        try {
            const { idLista, idTitulo } = req.body;

            await this.listaTituloService.removerTituloDaLista(
                idLista,
                idTitulo,
            );

            res.status(200).json({
                mensagem: "Título removido da lista.",
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async listarTitulosDaLista(req, res) {
        try {
            const { idLista } = req.params;

            const titulos =
                await this.listaTituloService.listarTitulosDaLista(idLista);

            res.status(200).json({
                titulos,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async listarListasDoTitulo(req, res) {
        try {
            const { idTitulo } = req.params;

            const listas =
                await this.listaTituloService.listarListasDoTitulo(idTitulo);

            res.status(200).json({
                listas,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }
}

module.exports = new ListaTituloController();
