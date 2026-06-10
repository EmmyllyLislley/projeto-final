const AtorDAO = require('../repository/atorDAO');
const AtorModel = require('../models/atorModel');

class AtorService {
    constructor() {
        this.atorDAO = new AtorDAO();
    }


    async cadastrarAtor(nome, dataNascimento, nacionalidade) {
        const ator = new AtorModel(null, nome, dataNascimento, nacionalidade);

        await this.atorDAO.adicionarAtor(ator);

        return ator;
    }


    async atualizarAtor(id, nome, dataNascimento, nacionalidade) {
        const atorExistente = await this.atorDAO.buscarPorId(id);

        if (!atorExistente) {
            throw new Error("Ator não encontrado.");
        }

        const ator = new AtorModel(
            id, 
            nome, 
            dataNascimento, 
            nacionalidade);

        await this.atorDAO.atualizarAtor(id, ator);

        return ator;
    }


    async buscarPorId(id) {
        const ator = await this.atorDAO.buscarPorId(id);

        if (!ator) {
            throw new Error("Ator não encontrado.");
        }

        return ator;
    }


    async listarAtores() {
        return await this.atorDAO.listarAtores();

    }


    async removerAtor(id) {
        const ator = await this.atorDAO.buscarPorId(id);

        if (!ator) {
            throw new Error("Ator não encontrado.");
        }

        await this.atorDAO.removerAtor(id);
    }


    async adicionarAtorAoTitulo(tituloId, atorId) {
        const ator = await this.atorDAO.buscarPorId(atorId);

        if (!ator) {
            throw new Error("Ator não encontrado.");
        }

        await this.atorDAO.adicionarAtorAoTitulo(tituloId, atorId);
    }
}

module.exports = AtorService;