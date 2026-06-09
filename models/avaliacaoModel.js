<<<<<<< HEAD
class AvaliacaoModel {
    #id;
    #usuario;
    #nota;
    #critica;

    constructor(id, usuario, nota, critica) {
        this.#id = id;
        this.#usuario = usuario;
=======
class Avaliacao {
    #id
    #usuario
    #titulo 
    #nota 
    #critica 

    constructor(usuario, titulo, nota, critica) {
        this.#usuario = usuario;
        this.#titulo = titulo;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
        this.#nota = nota;
        this.#critica = critica;
    }

    get id() {
        return this.#id;
    }

    get usuario() {
        return this.#usuario;
    }

<<<<<<< HEAD
=======
    get titulo() {
        return this.#titulo;
    }

>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
    get nota() {
        return this.#nota;
    }

    get critica() {
        return this.#critica;
    }

<<<<<<< HEAD
    set usuario(usuario) {
        if (!usuario) {
            throw new Error("Usuário obrigatório.");
        }
        this.#usuario = usuario;
    }

    set nota(nota) {
        if (typeof nota !== 'number' || nota < 0 || nota > 5) {
            throw new Error("A nota deve estar entre 0 e 10.");
        }
        this.#nota = nota;
    }

    set critica(critica) {
        if (!critica || critica.trim() === "") {
            throw new Error("Comentário obrigatório.");
        }
        this.#critica = critica;
    }
}

module.exports = AvaliacaoModel;
=======
    set nota(novaNota) {
        this.#nota = novaNota;
    }

    set critica(novaCritica) {
        this.#critica = novaCritica;
    }
}

module.exports = Avaliacao;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
