<<<<<<< HEAD
class GeneroModel {
    #id;
    #nome;

    constructor(id, nome) {
        this.#id = id;
=======
class Genero {
    #id 
    #nome

    constructor(nome) {
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
        this.#nome = nome;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

<<<<<<< HEAD
    set nome(nome) {
        if (!nome || nome.trim() === "") {
            throw new Error("Nome do gênero inválido.");
        }
        this.#nome = nome;
    }
}

module.exports = GeneroModel;
=======
    set nome(novoNome) {
        this.#nome = novoNome;
    }
}

module.exports = Genero;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
