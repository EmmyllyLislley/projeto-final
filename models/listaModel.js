<<<<<<< HEAD
class ListaModel {
=======
class Lista {
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
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
<<<<<<< HEAD
}

module.exports = ListaModel;
=======

    adicionarTitulo(titulo) {
        this.#titulos.push(titulo);
    }
    
    removerTitulo() {}
}

module.exports = Lista;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
