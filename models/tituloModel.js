class TituloModel {
    #id;
    #nome;
    #dataLancamento;
    #classificacaoIndicativa;
    #diretor;
    #generos;
    #atores;
    #avaliacoes;

    constructor(id, nome, dataLancamento, classificacaoIndicativa, diretor = null) {
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

    set nome(nome) {
        if (!nome || nome.trim() === "") {
            throw new Error("Insira um nome.");
        }
        this.#nome = nome;
    }

    set classificacaoIndicativa(classificacaoIndicativa) {
        const classificacoesValidas = ["livre", 10, 12, 14, 16, 18];

        if (!classificacoesValidas.includes(classificacaoIndicativa)) {
            throw new Error("Insira uma classificação válida.");
        }

        this.#classificacaoIndicativa = classificacaoIndicativa;
    }
}

module.exports = TituloModel;
