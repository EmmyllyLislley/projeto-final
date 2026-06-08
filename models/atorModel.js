class Ator {
    #id;
    #nome;
    #dataNascimento;
    #nacionalidade;

    constructor(id, nome, dataNascimento, nacionalidade) {
        this.#id = id;
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
        this.#nacionalidade = nacionalidade;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    get nacionalidade() {
        return this.#nacionalidade;
    }

    set nome(novoNome) {
        if (!novoNome || novoNome.trim() === "") {
            throw new Error("Nome do ator inválido.");
        }
        this.#nome = -novoNome;
    }

    set dataNascimento(novaDataNascimento) {
        if (!novaDataNascimento) {
            throw new Error("Data de nascimento obrigatória.");
        }
        this.#dataNascimento = novaDataNascimento;
    }

    set nacionalidade(novaNacionalidade) {
        if (!novaNacionalidade || novaNacionalidade.trim() === "") {
            throw new Error("Nacionalidade inválida.");
        }
        this.#nacionalidade = novaNacionalidade;
    }

}

module.exports = Ator;