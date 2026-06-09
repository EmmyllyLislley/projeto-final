const validator = require('validator');

class UsuarioModel {
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

    get senha() {
        return this.#senha;
    }

    set nome(nome) {
        if(!nome || nome.trim() === "") {
            throw new Error("Insira um nome")
        }
        this.#nome = nome;
    }

    set email(email) {
        if (!validator.isEmail(email)) {
            throw new Error("Email inválido!");
        }
        this.#email = email;
    }

    set senha(senha) {
        if (!senha || senha.length < 6) {
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

module.exports = UsuarioModel;