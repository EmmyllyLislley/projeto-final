class Genero {
    #id 
    #nome

    constructor(nome) {
        this.#nome = nome;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }
}

module.exports = Genero;