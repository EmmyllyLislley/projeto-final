class Titulo {
    #id;
    #nome;
    #dataLancamento;
    #classificacaoIndicativa;
    #diretor;
    #generos;
    #atores;
    #avaliacoes;

    constructor(id, nome, dataLancamento,  classificacaoIndicativa) {
        this.#id = id;
        this.#nome = nome;
        this.#dataLancamento = dataLancamento;
        this.#classificacaoIndicativa = classificacaoIndicativa;
        this.#diretor = null;
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

    set nome(novoNome) {
        if(!novoNome || novoNome.trim() === "") {
            throw new Error("Insira um nome.")
        }
        this.#nome = novoNome;
    }

    set classificacaoIndicativa(classificacaoIndicativa) {
        if(!(livre || 10 || 12 || 14 || 16 || 18)) {
            throw new Error("Insira uma classificação válida.");
        }
        this.#classificacaoIndicativa = classificacaoIndicativa
    }

    set generos(genero) {
        if(!genero) {
            throw new Error("Insira um gênero.")
        }
    }
}

module.exports = Titulo