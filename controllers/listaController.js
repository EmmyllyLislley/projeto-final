const ListaService = require("../services/listaService");

class ListaController {
    constructor() {
        this.listaService = ListaService;
    }

    async cadastrar(req, res) {
        try {
            const { nome, idUsuario } = req.body;

            const lista = await this.listaService.cadastrar(nome, idUsuario);

            res.status(201).json({
                mensagem: "Lista criada com sucesso!",
                lista,
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

            const lista = await this.listaService.atualizar(id, nome);

            res.status(200).json({
                mensagem: "Lista atualizada",
                lista,
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

            await this.listaService.remover(id);

            res.status(200).json({
                mensagem: "Lista removida",
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async listar(req, res) {
        try {
            const listas = await this.listaService.listar();

            res.status(200).json({
                listas,
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

            const lista = await this.listaService.buscarPorId(id);

            res.status(200).json({
                lista,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }
}

module.exports = new ListaController();
