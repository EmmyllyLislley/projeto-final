const AtorModel = require("../models/atorModel");
const AtorDAO = require("../repository/atorDAO");

class AtorService {
    constructor() {
        this.atorDAO = AtorDAO;
    }

    async cadastrar(nome, dataNascimento, nacionalidade) {
        if (!nome?.trim() || !nacionalidade?.trim() || !dataNascimento) {
            throw new Error("Todos os campos (nome, data de nascimento e nacionalidade) são obrigatórios");
        }

        const data = new Date(dataNascimento);
        if (isNaN(data.getTime())) {
            throw new Error("Data de nascimento inválida");
        }

        // CORRIGIDO: Alterado 'dataLancamento' para 'dataNascimento'
        const ator = new AtorModel(null, nome.trim(), dataNascimento, nacionalidade.trim());
        const id = await this.atorDAO.adicionar(ator);

        return {
            id,
            nome: ator.nome,
            dataNascimento: ator.dataNascimento,
            nacionalidade: ator.nacionalidade,
        };
    }

    async atualizar(id, nome, dataNascimento, nacionalidade) {
        if (!id) throw new Error("ID é obrigatório");

        const atorExistente = await this.atorDAO.buscarPorId(id);
        if (!atorExistente) {
            throw new Error("Ator não encontrado");
        }

        if (!nome?.trim() || !nacionalidade?.trim() || !dataNascimento) {
            throw new Error("Todos os campos são obrigatórios para a atualização");
        }

        const data = new Date(dataNascimento);
        if (isNaN(data.getTime())) {
            throw new Error("Data de nascimento inválida");
        }

        const ator = new AtorModel(id, nome.trim(), dataNascimento, nacionalidade.trim());
        await this.atorDAO.atualizar(id, ator);

        return ator;
    }

    async remover(id) {
        if (!id) throw new Error("ID é obrigatório");
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
        if (!id) throw new Error("ID é obrigatório");
        const ator = await this.atorDAO.buscarPorId(id);

        if (!ator) {
            throw new Error("Ator não encontrado");
        }

        return ator;
    }
}

module.exports = new AtorService();