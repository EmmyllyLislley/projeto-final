<<<<<<< HEAD
class DiretorModel {
    #id;
    #nome;

    constructor(id, nome) {
        this.#id = id;
=======
class Diretor {
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

    set nome(novoNome) {
<<<<<<< HEAD
        if (!novoNome || novoNome.trim() === "") {
            throw new Error("Nome do diretor inválido.");
        }
=======
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
        this.#nome = novoNome;
    }
}

<<<<<<< HEAD
module.exports = DiretorModel;
=======
module.exports = Diretor;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
