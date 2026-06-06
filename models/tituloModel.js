class Titulo {
    #id 
    #nome
    #dataLancamento
    #diretor
    #elenco
    #genero
    #classificacaoIndicativa
    #avaliacoes

    constructor(id, nome, dataLancamento, diretor, classificacaoIndicativa) {
        this.#id = id;
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

    removerAtor(ator) {
        const indice = this.#ator.indexOf(ator)
        if (indice !== -1) {
            this.#ator.splice(indice, 1);
        }
        console.log(`Ator ${ator} removido com sucesso do filme/série ${this.#nome}`)
    }

    adicionarGenero(genero) {
        this.#genero.push(genero);
    }

    removerGenero(genero) {
        const indice = this.#genero.indexOf(genero)
        if (indice !== -1) {
            this.#genero.splice(indice, 1);
        }    
    }

    adicionarAvaliacao(avaliacao) {
        this.#avaliacoes.push(avaliacao);
    }

    removerAvaliacao(id) {
        if(typeof id === 'number' && Number.isFinite(id)) {
            const indice = this.#avaliacoes.findIndex(av => av.id === id)}
        if (indice !== -1) {
            this.#avaliacoes.splice(indice, 1);
        }    
        else {console.error("O ID digitado não é um número válido, tente novamente." + err)}
    }

    calcularMediaAvaliacoes() {
        const listaAvaliacoes = this.avaliacoes;
        if(this.#avaliacoes.length === 0) return 0;
        let somaNotas = 0;
        for(let i = 0; i < listaAvaliacoes.length; i++) {
            somaNotas += listaAvaliacoes[i].nota;
        }
        const media = somaNotas / listaAvaliacoes.length;
        return Number(media.toFixed(1))

    }
}

module.exports = Titulo;