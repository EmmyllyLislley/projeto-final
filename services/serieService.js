const SerieModel = require("../models/serieModel");
const TituloDAO = require("../repository/tituloDAO");
const SerieDAO = require("../repository/serieDAO");

class SerieService {
    constructor() {
        this.tituloDAO = TituloDAO;
        this.serieDAO = SerieDAO;
    }

    async cadastrar(nome, dataLancamento, classificacaoIndicativa, temporadas, totalEpisodios, idDiretor) {
        const serie = new SerieModel(
            null,
            nome,
            dataLancamento,
            classificacaoIndicativa,
            idDiretor,
            temporadas,
            totalEpisodios,
        );

        const idTitulo = await this.tituloDAO.adicionar(serie, idDiretor);

        await this.serieDAO.adicionar(idTitulo, serie);

        return serie;
    }

    async atualizar(id, nome, dataLancamento, classificacaoIndicativa, temporadas, totalEpisodios, idDiretor) {
        const titulo = await this.tituloDAO.buscarPorId(id);

        if (!titulo) {
            throw new Error("Série não encontrada");
        }

        const serie = new SerieModel(
            null,
            nome,
            dataLancamento,
            classificacaoIndicativa,
            idDiretor,
            temporadas,
            totalEpisodios,
        );

        await this.tituloDAO.atualizar(id, serie);
        await this.serieDAO.atualizar(id, serie);

        return serie;
    }

    async remover(id) {
        const titulo = await this.tituloDAO.buscarPorId(id);

        if (!titulo) {
            throw new Error("Série não encontrada");
        }

        await this.serieDAO.remover(id);
        await this.tituloDAO.remover(id);
    }

    async listar() {
        return await this.serieDAO.listar();
    }

    async buscarPorId(id) {
        const titulo = await this.tituloDAO.buscarPorId(id);

        if (!titulo) {
            throw new Error("Série não encontrada");
        }

        return await this.serieDAO.buscarPorId(id);
    }
}

module.exports = new SerieService();
