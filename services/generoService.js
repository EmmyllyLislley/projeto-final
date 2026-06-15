const GeneroModel = require("../models/generoModel");
const GeneroDAO = require("../repository/generoDAO");

class GeneroService {
    constructor() {
        this.generoDAO = GeneroDAO;
    }

    async cadastrar(nome) {
        const genero = new GeneroModel(null, nome);

        const id = await this.generoDAO.adicionar(genero);

        return {
            id,
            nome: genero.nome,
        };
    }

    async atualizar(id, nome) {
        const generoExistente = await this.generoDAO.buscarPorId(id);

        if (!generoExistente) {
            throw new Error("Gênero não encontrado");
        }

        const genero = new GeneroModel(id, nome);

        await this.generoDAO.atualizar(id, genero);

        return genero;
    }

    async remover(id) {
        const genero = await this.generoDAO.buscarPorId(id);

        if (!genero) {
            throw new Error("Gênero não encontrado");
        }

        await this.generoDAO.remover(id);
    }

    async listar() {
        return await this.generoDAO.listar();
    }

    async buscarPorId(id) {
        const genero = await this.generoDAO.buscarPorId(id);

        if (!genero) {
            throw new Error("Gênero não encontrado");
        }

        return genero;
    }
}

module.exports = new GeneroService();
