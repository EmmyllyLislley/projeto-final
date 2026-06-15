const DiretorModel = require("../models/diretorModel");
const DiretorDAO = require("../repository/diretorDAO");

class DiretorService {
    constructor() {
        this.diretorDAO = DiretorDAO;
    }

    async cadastrar(nome) {
        const diretor = new DiretorModel(
            null,
            nome
        );

        const id = await this.diretorDAO.adicionar(diretor);

        return {
            id,
            nome: diretor.nome
        };
    }

    async atualizar(id, nome) {
        const diretorExistente =
            await this.diretorDAO.buscarPorId(id);

        if (!diretorExistente) {
            throw new Error("Diretor não encontrado");
        }

        const diretor = new DiretorModel(
            id,
            nome
        );

        await this.diretorDAO.atualizar(id, diretor);

        return diretor;
    }

    async remover(id) {
        const diretor =
            await this.diretorDAO.buscarPorId(id);

        if (!diretor) {
            throw new Error("Diretor não encontrado");
        }

        await this.diretorDAO.remover(id);
    }

    async listar() {
        return await this.diretorDAO.listar();
    }

    async buscarPorId(id) {
        const diretor =
            await this.diretorDAO.buscarPorId(id);

        if (!diretor) {
            throw new Error("Diretor não encontrado");
        }

        return diretor;
    }

    async buscarPorNome(nome) {
        const diretores =
            await this.diretorDAO.buscarPorNome(nome);

        if (!diretores || diretores.length === 0) {
            throw new Error("Diretor não encontrado");
        }

        return diretores;
    }
}

module.exports = new DiretorService();