class AvaliacaoModel {
    #id;
    #usuario;
    #nota;
    #critica;

    constructor(id, usuario, nota, critica) {
        this.#id = id;
        this.#usuario = usuario;
        this.#nota = nota;
        this.#critica = critica;
    }

    get id() {
        return this.#id;
    }

    get usuario() {
        return this.#usuario;
    }

    get nota() {
        return this.#nota;
    }

    get critica() {
        return this.#critica;
    }
}

module.exports = AvaliacaoModel;