const Titulo = require('./tituloModel');

class Serie extends Titulo {
    #temporadas
    #totalEpisodios

    constructor(nome, dataLancamento, diretor, classificacaoIndicativa, temporadas, totalEpisodios) {
        super(nome, dataLancamento, diretor, classificacaoIndicativa);
        this.#temporadas = temporadas;
        this.#totalEpisodios = totalEpisodios;
    }

    get temporadas() {
        return this.#temporadas;
    }

    get totalEpisodios() {
        return this.#totalEpisodios;
    }

    set temporadas(novasTemporadas) {
        this.#temporadas = novasTemporadas;
    }

    set totalEpisodios(novoTotalEpisodios) {
        this.#totalEpisodios = novoTotalEpisodios;
    }
}

module.exports = Serie;