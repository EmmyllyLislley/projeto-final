<<<<<<< HEAD
const validator = require('validator');

class UsuarioModel {
=======
class Usuario {
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
    #id
    #nome
    #email
    #senha

<<<<<<< HEAD
    constructor(id, nome, email, senha) {
        this.#id = id;
=======
    constructor(nome, email, senha) {
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
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

<<<<<<< HEAD
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
=======
    set nome(novo_nome) {
        if(!novo_nome) {
            throw new Error("Insira um nome")
        }
        this.#nome = novo_nome;
    }

    set email(novo_email) {
        if (!novo_email.includes("@")) {
            throw new Error("Email inválido!");
        }
        this.#email = novo_email;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
    }

    alterarSenha(senhaAtual, novaSenha) {
        if(senhaAtual !== this.#senha) {
            throw new Error("Senha incorreta");
        }
        this.#senha = novaSenha;
    }
}

<<<<<<< HEAD
module.exports = UsuarioModel;
=======
module.exports = Usuario;
>>>>>>> cb761d988d34a99c583e387b260e48aaea97ad52
