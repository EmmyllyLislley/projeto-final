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

    set nome(nome) {
        if (!nome || nome.trim() === "") {
            throw new Error("Nome do diretor inválido.");
        }
        this.#nome = nome;
    }
}

module.exports = DiretorModel;