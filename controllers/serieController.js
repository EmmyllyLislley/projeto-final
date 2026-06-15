const SerieService = require("../services/serieService");

class SerieController {
    constructor() {
        this.serieService = SerieService;
    }

    async cadastrar(req, res) {
        try {
            const {
                nome,
                dataLancamento,
                classificacaoIndicativa,
                temporadas,
                totalEpisodios,
                idDiretor,
            } = req.body;

            const serie = await this.serieService.cadastrar(
                nome,
                dataLancamento,
                classificacaoIndicativa,
                temporadas,
                totalEpisodios,
                idDiretor,
            );

            res.status(201).json({
                mensagem: "Serie cadastrada com sucesso!",
                serie: {
                    nome: serie.nome,
                    dataLancamento: serie.dataLancamento,
                    classificacaoIndicativa: serie.classificacaoIndicativa,
                    temporadas: serie.temporadas,
                    totalEpisodios: serie.totalEpisodios,
                },
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
            const {
                nome,
                dataLancamento,
                classificacaoIndicativa,
                temporadas,
                totalEpisodios,
                idDiretor,
            } = req.body;

            const serie = await this.serieService.atualizar(
                id,
                nome,
                dataLancamento,
                classificacaoIndicativa,
                temporadas,
                totalEpisodios,
                idDiretor,
            );

            res.status(200).json({
                mensagem: "Atualização realizada com sucesso",
                serie: {
                    nome: serie.nome,
                    dataLancamento: serie.dataLancamento,
                    classificacaoIndicativa: serie.classificacaoIndicativa,
                    temporadas: serie.temporadas,
                    totalEpisodios: serie.totalEpisodios,
                },
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

            await this.serieService.remover(id);

            res.status(200).json({
                mensagem: "Serie removida",
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async listar(req, res) {
        try {
            const series = await this.serieService.listar();

            res.status(200).json({
                mensagem: "Lista de series: ",
                series,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;

            const serie = await this.serieService.buscarPorId(id);

            res.status(200).json({
                mensagem: "Serie encontrada",
                serie,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }
}
module.exports = new SerieController();
