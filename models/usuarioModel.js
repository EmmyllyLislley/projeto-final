const validator = require('validator');

class Usuario {
    #id
    #nome
    #email
    #senha

    constructor(id, nome, email, senha) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    set nome(novoNome) {
        if(!novoNome || novoNome.trim() === "") {
            throw new Error("Insira um nome")
        }
        this.#nome = novoNome;
    }

    set email(novoEmail) {
        if (!validator.isEmail(novoEmail)) {
            throw new Error("Email inválido!");
        }
        this.#email = novoEmail;
    }

    set senha(novaSenha) {
        if (!novaSenha || novaSenha.length < 8) {
            throw new Error("Senha inválida");
        }
        this.#senha = novaSenha;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if(senhaAtual !== this.#senha) {
            throw new Error("Senha incorreta");
        }
        this.#senha = novaSenha;
    }
}