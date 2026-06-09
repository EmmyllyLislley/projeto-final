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