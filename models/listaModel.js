class Lista {
    #id 
    #nome
    #usuario
    #titulos

    constructor(nome, usuario) {
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

    set nome(novoNome) {
        this.#nome = novoNome;
    }
}

module.exports = Lista;