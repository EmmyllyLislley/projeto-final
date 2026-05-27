class Usuario {
    #id
    #nome
    #email
    #senha

    constructor(nome, email, senha) {
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
    }

    alterarSenha(senhaAtual, novaSenha) {
        if(senhaAtual !== this.#senha) {
            throw new Error("Senha incorreta");
        }
        this.#senha = novaSenha;
    }
}

module.exports = Usuario;