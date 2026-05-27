class Titulo {
    #id 
    #nome
    #dataLancamento
    #diretor
    #elenco
    #genero
    #classificacaoIndicativa
    #avaliacoes

    constructor(nome, dataLancamento, diretor, classificacaoIndicativa) {
        this.#nome = nome;
        this.#dataLancamento = dataLancamento;
        this.#diretor = diretor;
        this.#elenco = [];
        this.#genero = [];
        this.#classificacaoIndicativa = classificacaoIndicativa;
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

    get diretor() {
        return this.#diretor
    }

    get elenco() {
        return this.#elenco;
    }

    get genero() {
        return this.#genero;
    }

    get classificacaoIndicativa() {
        return this.#classificacaoIndicativa;
    }

    get avaliacoes() {
        return this.#avaliacoes;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    set dataLancamento(novaData) {
        this.#dataLancamento = novaData;
    }

    set diretor(novoDiretor) {
        this.#diretor = novoDiretor;
    }

    set classificacaoIndicativa(novaCI) {
        this.#classificacaoIndicativa = novaCI;
    }

    adicionarAtor(ator) {
        this.#elenco.push(ator);
    }

    removerAtor(ator) {}

    adicionarGenero(genero) {
        this.#genero.push(genero);
    }

    removerGenero(genero) {}

    adicionarAvaliacao(avaliacao) {
        this.#avaliacoes.push(avaliacao);
    }

    removerAvaliacao() {}

    calcularMediaAvaliacoes() {}
}

module.exports = Titulo;