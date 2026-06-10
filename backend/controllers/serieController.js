const SerieService = require('../services/SerieService');

class SerieController {

    constructor() {
        this.serieService = new SerieService();
    }

    async cadastrar(req, res) {
        try {

            const {
                nome,
                dataLancamento,
                classificacaoIndicativa,
                diretorId,
                temporadas,
                episodios
            } = req.body;

            const serie =
                await this.serieService.cadastrarSerie(
                    nome,
                    dataLancamento,
                    classificacaoIndicativa,
                    diretorId,
                    temporadas,
                    episodios
                );

            res.send(serie);

        } catch(err) {
            res.send(err.message);
        }
    }

    async buscarPorId(req, res) {
        try {

            const { id } = req.params;

            const serie =
                await this.serieService.buscarPorId(id);

            res.send(serie);

        } catch(err) {
            res.send(err.message);
        }
    }

    async listar(req, res) {
        try {

            const series =
                await this.serieService.listarSeries();

            res.send(series);

        } catch(err) {
            res.send(err.message);
        }
    }

    async atualizar(req, res) {
        try {

            const { id } = req.params;

            const {
                nome,
                dataLancamento,
                classificacaoIndicativa,
                diretorId,
                temporadas,
                episodios
            } = req.body;

            const serie =
                await this.serieService.atualizarSerie(
                    id,
                    nome,
                    dataLancamento,
                    classificacaoIndicativa,
                    diretorId,
                    temporadas,
                    episodios
                );

            res.send(serie);

        } catch(err) {
            res.send(err.message);
        }
    }

    async remover(req, res) {
        try {

            const { id } = req.params;

            await this.serieService.removerSerie(id);

            res.send("Série removida com sucesso!");

        } catch(err) {
            res.send(err.message);
        }
    }

}

module.exports = SerieController;