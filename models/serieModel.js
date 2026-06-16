const TituloModel = require("./tituloModel");

class SerieModel extends TituloModel {
    #temporadas;
    #totalEpisodios;

    constructor(
        id,
        nome,
        dataLancamento,
        classificacaoIndicativa,
        diretor,
        temporadas,
        totalEpisodios,
    ) {
        super(id, nome, dataLancamento, classificacaoIndicativa, diretor);

        this.#temporadas = temporadas;
        this.#totalEpisodios = totalEpisodios;
    }

    get temporadas() {
        return this.#temporadas;
    }

    get totalEpisodios() {
        return this.#totalEpisodios;
    }
}

module.exports = SerieModel;
