const AtorModel = require("../models/atorModel");
const AtorDAO = require("../repository/atorDAO");

class AtorService {
    constructor() {
        this.atorDAO = AtorDAO;
    }

    async cadastrar(nome, dataNascimento, nacionalidade) {
        const ator = new AtorModel(null, nome, dataNascimento, nacionalidade);

        const id = await this.atorDAO.adicionar(ator);

        return {
            id,
            nome: ator.nome,
            dataNascimento: ator.dataNascimento,
            nacionalidade: ator.nacionalidade,
        };
    }

    async atualizar(id, nome, dataNascimento, nacionalidade) {
        const atorExistente = await this.atorDAO.buscarPorId(id);

        if (!atorExistente) {
            throw new Error("Ator não encontrado");
        }

        const ator = new AtorModel(null, nome, dataNascimento, nacionalidade);

        await this.atorDAO.atualizar(id, ator);

        return ator;
    }

    async remover(id) {
        const ator = await this.atorDAO.buscarPorId(id);

        if (!ator) {
            throw new Error("Ator não encontrado");
        }

        await this.atorDAO.remover(id);
    }

    async listar() {
        return await this.atorDAO.listar();
    }

    async buscarPorId(id) {
        const ator = await this.atorDAO.buscarPorId(id);

        if (!ator) {
            throw new Error("Ator não encontrado");
        }

        return ator;
    }
}

module.exports = new AtorService();
