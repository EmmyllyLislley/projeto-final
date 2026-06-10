class DiretorModel {
    #id;
    #nome;

    constructor(id, nome) {
        this.#id = id;
        this.#nome = nome;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        if (!novoNome || novoNome.trim() === "") {
            throw new Error("Nome do diretor inválido.");
        }
        this.#nome = novoNome;
    }
}

module.exports = DiretorModel;