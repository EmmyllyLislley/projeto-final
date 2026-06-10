const tituloGeneroService =
    require('../services/tituloGeneroService');

class TituloGeneroController {

    async adicionar(req, res) {

        try {

            const {
                id_titulo,
                id_genero
            } = req.body;

            const resultado =
                await tituloGeneroService.adicionar(
                    id_titulo,
                    id_genero
                );

            res.json({
                mensagem: 'Gênero associado ao título com sucesso!',
                resultado
            });

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }

    async listar(req, res) {

        try {

            const resultado =
                await tituloGeneroService.listar();

            res.json(resultado);

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }

    async remover(req, res) {

        try {

            await tituloGeneroService.remover(
                req.params.idTitulo,
                req.params.idGenero
            );

            res.json({
                mensagem: 'Relacionamento removido com sucesso!'
            });

        } catch (err) {

            res.status(500).json({
                erro: err.message
            });
        }
    }
}

module.exports =
    new TituloGeneroController();