const tituloAtorService =
    require('../services/tituloAtorService');

class TituloAtorController {

    async adicionar(req, res) {

        try {

            const {
                id_titulo,
                id_ator
            } = req.body;

            const resultado =
                await tituloAtorService.adicionar(
                    id_titulo,
                    id_ator
                );

            res.json(resultado);

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }

    async listar(req, res) {

        try {

            const resultado =
                await tituloAtorService.listar();

            res.json(resultado);

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }

    async remover(req, res) {

        try {

            await tituloAtorService.remover(
                req.params.idTitulo,
                req.params.idAtor
            );

            res.json({
                mensagem: 'Relacionamento removido.'
            });

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }
}

module.exports =
    new TituloAtorController();