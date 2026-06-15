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

    // set nome(nome) {
    //     if (!nome || nome.trim() === "") {
    //         throw new Error("Insira um nome");
    //     }
    //     this.#nome = nome;
    // }

    // set username(username) {
    //     if (!username || username.trim() === "") {
    //         throw new Error("Insira um username");
    //     }
    //     this.#username = username;
    // }

    // set email(email) {
    //     if (!email || !validator.isEmail(email)) {
    //         throw new Error("Email inválido!");
    //     }
    //     this.#email = email;
    // }

    set senha(senha) {
        if (!senha || senha.length < 6) {
            throw new Error("Senha inválida");
        }
        this.#senha = senha;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual !== this.#senha) {
            throw new Error("Senha incorreta");
        }

        if (!novaSenha || novaSenha.length < 6) {
            throw new Error("A nova senha deve nom mínimo 6 caracteres");
        }

        this.#senha = novaSenha;
    }
}

module.exports = UsuarioModel;
