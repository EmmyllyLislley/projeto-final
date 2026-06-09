const SerieModel = require('../models/serieModel');

const SerieDAO = require('../repository/serieDAO');
const TituloDAO = require('../repository/tituloDAO');
const DiretorDAO = require('../repository/diretorDAO');

class SerieService {

    constructor() {
        this.serieDAO = new SerieDAO();
        this.tituloDAO = new TituloDAO();
        this.diretorDAO = new DiretorDAO();
    }

    async cadastrarSerie(
        nome,
        dataLancamento,
        classificacaoIndicativa,
        diretorId,
        temporadas,
        episodios
    ) {

        const diretor =
            await this.diretorDAO.buscarPorId(diretorId);

        if(!diretor) {
            throw new Error(
                "Diretor não encontrado."
            );
        }

        const serie = new SerieModel(
            null,
            nome,
            dataLancamento,
            classificacaoIndicativa,
            temporadas,
            episodios
        );

        const idTitulo =
            await this.tituloDAO.adicionarTitulo(
                serie,
                diretorId
            );

        await this.serieDAO.adicionarSerie(
            idTitulo,
            serie
        );

        return serie;
    }


    async buscarPorId(id) {

    const serie =
        await this.serieDAO.buscarPorId(id);

    if(!serie) {
        throw new Error("Série não encontrada.");
    }

    return serie;
}

    async atualizarSerie(
        id,
        nome,
        dataLancamento,
        classificacaoIndicativa,
        diretorId,
        temporadas,
        episodios
    ) {

        const titulo =
            await this.tituloDAO.buscarPorId(id);

        if(!titulo) {
            throw new Error(
                "Série não encontrada."
            );
        }

        const serie = new SerieModel(
            id,
            nome,
            dataLancamento,
            classificacaoIndicativa,
            temporadas,
            episodios
        );

        await this.tituloDAO.atualizarTitulo(
            id,
            serie,
            diretorId
        );

        await this.serieDAO.atualizarSerie(
            id,
            serie
        );

        return serie;
    }

    async removerSerie(id) {

        const titulo =
            await this.tituloDAO.buscarPorId(id);

        if(!titulo) {
            throw new Error(
                "Série não encontrada."
            );
        }

        await this.serieDAO.removerSerie(id);

        await this.tituloDAO.removerTitulo(id);
    }

    async listarSeries() {

    return await this.serieDAO.listarSeries();

}

}

module.exports = SerieService;