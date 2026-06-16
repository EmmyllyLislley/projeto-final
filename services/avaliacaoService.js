const AvaliacaoModel = require("../models/avaliacaoModel");
const AvaliacaoDAO = require("../repository/avaliacaoDAO");

class AvaliacaoService {
    constructor() {
        this.avaliacaoDAO = AvaliacaoDAO;
    }

    async cadastrar(idUsuario, idTitulo, nota, critica) {
        if (!idUsuario || !idTitulo || nota === undefined || nota === null) {
            throw new Error("Usuário, Título e Nota são obrigatórios");
        }

        const notaNum = Number(nota);
        if (isNaN(notaNum) || notaNum < 0 || notaNum > 10) {
            throw new Error("A nota deve ser um número entre 0 e 10");
        }

        const avaliacao = new AvaliacaoModel(null, idUsuario, notaNum, critica?.trim() || null);
        const id = await this.avaliacaoDAO.adicionar(avaliacao, idTitulo);

        return {
            id,
            idUsuario: avaliacao.idUsuario, // Corrigido de avaliacao.usuario que não existia no new
            nota: avaliacao.nota,
            critica: avaliacao.critica,
        };
    }

    async atualizar(id, idUsuario, nota, critica) {
        if (!id) throw new Error("ID da avaliação é obrigatório");

        const avaliacaoExistente = await this.avaliacaoDAO.buscarPorId(id);
        if (!avaliacaoExistente) {
            throw new Error("Avaliação não encontrada");
        }

        if (!idUsuario || nota === undefined || nota === null) {
            throw new Error("Usuário e Nota são obrigatórios");
        }

        const notaNum = Number(nota);
        if (isNaN(notaNum) || notaNum < 0 || notaNum > 10) {
            throw new Error("A nota deve ser um número entre 0 e 10");
        }

        const avaliacao = new AvaliacaoModel(id, idUsuario, notaNum, critica?.trim() || null);
        await this.avaliacaoDAO.atualizar(id, avaliacao);

        return avaliacao;
    }

    async remover(id) {
        if (!id) throw new Error("ID é obrigatório");
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
        if (!id) throw new Error("ID é obrigatório");
        const avaliacao = await this.avaliacaoDAO.buscarPorId(id);

        if (!avaliacao) {
            throw new Error("Avaliação não encontrada");
        }

        return avaliacao;
    }

    async listarPorTitulo(idTitulo) {
        if (!idTitulo) throw new Error("ID do Título é obrigatório");
        return await this.avaliacaoDAO.listarPorTitulo(idTitulo);
    }
}

module.exports = new AvaliacaoService();