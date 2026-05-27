class Avaliacao {
    #id
    #usuario
    #titulo 
    #nota 
    #critica 

    constructor(usuario, titulo, nota, critica) {
        this.#usuario = usuario;
        this.#titulo = titulo;
        this.#nota = nota;
        this.#critica = critica;
    }

    get id() {
        return this.#id;
    }

    get usuario() {
        return this.#usuario;
    }

    get titulo() {
        return this.#titulo;
    }

    get nota() {
        return this.#nota;
    }

    get critica() {
        return this.#critica;
    }

    set nota(novaNota) {
        this.#nota = novaNota;
    }

    set critica(novaCritica) {
        this.#critica = novaCritica;
    }
}

module.exports = Avaliacao;