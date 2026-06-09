const listaService = require('../services/listaService');

class ListaController {

    async cadastrar(req, res) {

        try {

            const resultado =
                await listaService.cadastrarLista(req.body);

            res.json(resultado);

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }

    async listar(req, res) {

        try {

            const listas =
                await listaService.listarListas();

            res.json(listas);

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }

    async excluir(req, res) {

        try {

            await listaService.excluirLista(
                req.params.id
            );

            res.json({
                mensagem: 'Lista removida.'
            });

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }
}

module.exports = new ListaController();