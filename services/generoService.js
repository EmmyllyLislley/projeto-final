const GeneroModel = require("../models/generoModel");
const GeneroDAO = require("../repository/generoDAO");

class GeneroService {
    constructor() {
        this.generoDAO = GeneroDAO;
    }

    async cadastrar(nome) {
        if (!nome?.trim()) {
            throw new Error("O nome do gênero é obrigatório");
        }

        const genero = new GeneroModel(null, nome.trim());
        const id = await this.generoDAO.adicionar(genero);

        return {
            id,
            nome: genero.nome,
        };
    }

    async atualizar(id, nome) {
        if (!id) throw new Error("ID é obrigatório");

        const generoExistente = await this.generoDAO.buscarPorId(id);
        if (!generoExistente) {
            throw new Error("Gênero não encontrado");
        }

        if (!nome?.trim()) {
            throw new Error("O nome do gênero é obrigatório para atualização");
        }

        const genero = new GeneroModel(id, nome.trim());
        await this.generoDAO.atualizar(id, genero);

        return genero;
    }

    async remover(id) {
        if (!id) throw new Error("ID é obrigatório");
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
        if (!id) throw new Error("ID é obrigatório");
        const genero = await this.generoDAO.buscarPorId(id);

        if (!genero) {
            throw new Error("Gênero não encontrado");
        }

        return genero;
    }
}

module.exports = new GeneroService();