const Titulo = require('./Titulo');

class Filme extends Titulo {
    #duracao;

    constructor(id, nome, dataLancamento, classificacaoIndicativa, diretor, duracao) {
        super(id, nome, dataLancamento, classificacaoIndicativa, diretor);

        this.#duracao = duracao;
    }

    get duracao() {
        return this.#duracao;
    }

    set duracao(tempo) {
        if (tempo <= 0) {
            throw new Error("Duração inválida");
        }
        this.#duracao = tempo;
    }
}

module.exports = Filme;