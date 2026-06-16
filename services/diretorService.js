const DiretorModel = require("../models/diretorModel");
const DiretorDAO = require("../repository/diretorDAO");

class DiretorService {
    constructor() {
        this.diretorDAO = DiretorDAO;
    }

    async cadastrar(nome) {
        if (!nome?.trim()) {
            throw new Error("O nome do diretor é obrigatório");
        }

        const diretor = new DiretorModel(null, nome.trim());
        const id = await this.diretorDAO.adicionar(diretor);

        return {
            id,
            nome: diretor.nome
        };
    }

    async atualizar(id, nome) {
        if (!id) throw new Error("ID é obrigatório");
        
        const diretorExistente = await this.diretorDAO.buscarPorId(id);
        if (!diretorExistente) {
            throw new Error("Diretor não encontrado");
        }

        if (!nome?.trim()) {
            throw new Error("O nome do diretor é obrigatório para atualização");
        }

        const diretor = new DiretorModel(id, nome.trim());
        await this.diretorDAO.atualizar(id, diretor);

        return diretor;
    }

    async remover(id) {
        if (!id) throw new Error("ID é obrigatório");
        const diretor = await this.diretorDAO.buscarPorId(id);

        if (!diretor) {
            throw new Error("Diretor não encontrado");
        }

        await this.diretorDAO.remover(id);
    }

    async listar() {
        return await this.diretorDAO.listar();
    }

    async buscarPorId(id) {
        if (!id) throw new Error("ID é obrigatório");
        const diretor = await this.diretorDAO.buscarPorId(id);

        if (!diretor) {
            throw new Error("Diretor não encontrado");
        }

        return diretor;
    }

    async buscarPorNome(nome) {
        if (!nome?.trim()) {
            throw new Error("O nome para busca é obrigatório");
        }

        const diretores = await this.diretorDAO.buscarPorNome(nome.trim());
        if (!diretores || diretores.length === 0) {
            throw new Error("Diretor não encontrado");
        }

        return diretores;
    }
}

module.exports = new DiretorService();