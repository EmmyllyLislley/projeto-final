// const validator = require("validator");

class UsuarioModel {
    #id;
    #nome;
    #username;
    #email;
    #senha;

    constructor(id, nome, username, email, senha) {
        this.#id = id;
        this.#nome = nome;
        this.#username = username;
        this.#email = email;
        this.#senha = senha;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get senha() {
        return this.#senha;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual !== this.#senha) {
            throw new Error("Senha incorreta");
        }

        if (!novaSenha || novaSenha.length < 6) {
            throw new Error("A nova senha deve ter no mínimo 6 caracteres");
        }

        this.#senha = novaSenha;
    }
}

module.exports = UsuarioModel;
