const AvaliacaoModel = require("../models/avaliacaoModel");

const AvaliacaoDAO = require("../repository/avaliacaoDAO");

class AvaliacaoService {
    constructor() {
        this.avaliacaoDAO = AvaliacaoDAO;
    }

    async cadastrar(idUsuario, idTitulo, nota, critica) {
        const avaliacao = new AvaliacaoModel(null, idUsuario, nota, critica);

        const id = await this.avaliacaoDAO.adicionar(avaliacao, idTitulo);

        return {
            id,
            usuario: avaliacao.usuario,
            nota: avaliacao.nota,
            critica: avaliacao.critica,
        };
    }

    async atualizar(id, idUsuario, nota, critica) {
        const avaliacaoExistente = await this.avaliacaoDAO.buscarPorId(id);

        if (!avaliacaoExistente) {
            throw new Error("Avaliação não encontrada");
        }

        const avaliacao = new AvaliacaoModel(id, idUsuario, nota, critica);

        await this.avaliacaoDAO.atualizar(id, avaliacao);

        return avaliacao;
    }

    async remover(id) {
        const avaliacao = await this.avaliacaoDAO.buscarPorId(id);

        if (!avaliacao) {
            throw new Error("Avaliação não encontrada");
        }

        await this.avaliacaoDAO.remover(id);
    }

    async listar() {
        return await this.avaliacaoDAO.listar();
    }

    async buscarPorId(id) {
        const avaliacao = await this.avaliacaoDAO.buscarPorId(id);

        if (!avaliacao) {
            throw new Error("Avaliação não encontrada");
        }

        return avaliacao;
    }

    async listarPorTitulo(idTitulo) {
        return await this.avaliacaoDAO.listarPorTitulo(idTitulo);
    }
}

module.exports = new AvaliacaoService();
