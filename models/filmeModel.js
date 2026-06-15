const TituloModel = require("./tituloModel");

class FilmeModel extends TituloModel {
    #duracao;

    constructor(
        id,
        nome,
        dataLancamento,
        classificacaoIndicativa,
        diretor,
        duracao,
    ) {
        super(id, nome, dataLancamento, classificacaoIndicativa, diretor);

        this.#duracao = duracao;
    }

    get duracao() {
        return this.#duracao;
    }
}

module.exports = FilmeModel;
