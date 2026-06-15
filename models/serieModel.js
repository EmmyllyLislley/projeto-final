const TituloModel = require("./TituloModel");

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

    set temporadas(qtde) {
        if (qtde < 1) {
            throw new Error("Temporadas inválidas");
        }
        this.#temporadas = qtde;
    }

    set totalEpisodios(qtde) {
        if (qtde < 1) {
            throw new Error("Episódios inválidos");
        }
        this.#totalEpisodios = qtde;
    }
}

module.exports = SerieModel;
