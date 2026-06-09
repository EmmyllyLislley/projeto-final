<<<<<<< HEAD
const TituloModel = require('./TituloModel');

class SerieModel extends TituloModel {
    #temporadas;
    #episodios;

    constructor(id, nome, dataLancamento, classificacaoIndicativa, diretor, temporadas, episodios) {
        super(id, nome, dataLancamento, classificacaoIndicativa, diretor);

        this.#temporadas = temporadas;
        this.#episodios = episodios;
=======
const Titulo = require('./tituloModel');

class Serie extends Titulo {
    #temporadas
    #totalEpisodios

    constructor(nome, dataLancamento, diretor, classificacaoIndicativa, temporadas, totalEpisodios) {
        super(nome, dataLancamento, diretor, classificacaoIndicativa);
        this.#temporadas = temporadas;
        this.#totalEpisodios = totalEpisodios;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
    }

    get temporadas() {
        return this.#temporadas;
    }

<<<<<<< HEAD
    get episodios() {
        return this.#episodios;
    }

    set temporadas(qtde) {
        if (qtde < 1) {
            throw new Error("Temporadas inválidas");
        }
        this.#temporadas = qtde;
    }

    set episodios(qtde) {
        if (qtde < 1) {
            throw new Error("Episódios inválidos");
        }
        this.#episodios = qtde;
    }
}

module.exports = SerieModel;
=======
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
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
