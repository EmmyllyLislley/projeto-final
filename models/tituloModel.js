class TituloModel {
    #id;
    #nome;
    #dataLancamento;
    #classificacaoIndicativa;
    #diretor;
    #generos;
    #atores;
    #avaliacoes;

    constructor(id, nome, dataLancamento = null, classificacaoIndicativa = null, diretor = null) {
        this.#id = id;
        this.#nome = nome;
        this.#dataLancamento = dataLancamento;
        this.#classificacaoIndicativa = classificacaoIndicativa;
        this.#diretor = diretor;
        this.#generos = [];
        this.#atores = [];
        this.#avaliacoes = [];
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get dataLancamento() {
        return this.#dataLancamento;
    }

    get classificacaoIndicativa() {
        return this.#classificacaoIndicativa;
    }

    get diretor() {
        return this.#diretor;
    }

    get generos() {
        return this.#generos;
    }

    get atores() {
        return this.#atores;
    }

    get avaliacoes() {
        return this.#avaliacoes;
    }
}

module.exports = TituloModel;
