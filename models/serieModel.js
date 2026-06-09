const TituloModel = require('./TituloModel');

class SerieModel extends TituloModel {
    #temporadas;
    #episodios;

    constructor(id, nome, dataLancamento, classificacaoIndicativa, diretor, temporadas, episodios) {
        super(id, nome, dataLancamento, classificacaoIndicativa, diretor);

        this.#temporadas = temporadas;
        this.#episodios = episodios;
    }

    get temporadas() {
        return this.#temporadas;
    }

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