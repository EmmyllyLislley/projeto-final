const Titulo = require('./tituloModel');

class Filme extends Titulo {
    #duracao;

    constructor(nome, dataLancamento, diretor, classificacaoIndicativa, duracao) {
        super(nome, dataLancamento, diretor, classificacaoIndicativa);
        this.#duracao = duracao;
    };

    get duracao() {
        return this.#duracao;
    }

    set duracao(novaDuracao) {
        this.#duracao = novaDuracao;
    }
};

module.exports = Filme;