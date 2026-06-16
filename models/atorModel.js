class AtorModel {
    #id;
    #nome;
    #dataNascimento;
    #nacionalidade;

    constructor(id, nome, dataNascimento, nacionalidade) {
        this.#id = id;
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
        this.#nacionalidade = nacionalidade;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    get nacionalidade() {
        return this.#nacionalidade;
    }
}

module.exports = AtorModel;