class ListaModel {
    #id;
    #nome;
    #usuario;
    #titulos;

    constructor(id, nome, usuario) {
        this.#id = id;
        this.#nome = nome;
        this.#usuario = usuario;
        this.#titulos = [];
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get usuario() {
        return this.#usuario;
    }

    get titulos() {
        return this.#titulos;
    }

    set nome(nome) {
        if (!nome || nome.trim() === "") {
            throw new Error("Nome da lista inválido.");
        }

        this.#nome = nome;
    }
}

module.exports = ListaModel;