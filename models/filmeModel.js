<<<<<<< HEAD
const TituloModel = require('./TituloModel');

class FilmeModel extends TituloModel {
    #duracao;

    constructor(id, nome, dataLancamento, classificacaoIndicativa, diretor, duracao) {
        super(id, nome, dataLancamento, classificacaoIndicativa, diretor);

        this.#duracao = duracao;
    }
=======
const Titulo = require('./tituloModel');

class Filme extends Titulo {
    #duracao;

    constructor(nome, dataLancamento, diretor, classificacaoIndicativa, duracao) {
        super(nome, dataLancamento, diretor, classificacaoIndicativa);
        this.#duracao = duracao;
    };
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52

    get duracao() {
        return this.#duracao;
    }

<<<<<<< HEAD
    set duracao(tempo) {
        if (tempo <= 0) {
            throw new Error("Duração inválida");
        }
        this.#duracao = tempo;
    }
}

module.exports = FilmeModel;
=======
    set duracao(novaDuracao) {
        this.#duracao = novaDuracao;
    }
};

module.exports = Filme;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
