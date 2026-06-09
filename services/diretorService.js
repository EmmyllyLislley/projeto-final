const DiretorDAO = require('../repository/diretorDAO');
const DiretorModel = require('../models/diretorModel');

class DiretorService {
    constructor() {
        this.diretorDAO = new DiretorDAO();
    }

    async cadastrarDiretor(
        nome,
        dataNascimento,
        nacionalidade
    ) {

        const diretor = new DiretorModel(
            null,
            nome,
            dataNascimento,
            nacionalidade
        );

        await this.diretorDAO
            .adicionarDiretor(diretor);

        return diretor;
    }

    async buscarPorId(id) {

        const diretor =
            await this.diretorDAO.buscarPorId(id);

        if(!diretor) {
            throw new Error(
                "Diretor não encontrado."
            );
        }

        return diretor;
    }

    async listarDiretores() {

        return await this.diretorDAO
            .listarDiretores();

    }

    async atualizarDiretor(
        id,
        nome,
        dataNascimento,
        nacionalidade
    ) {

        const diretorExistente =
            await this.diretorDAO.buscarPorId(id);

        if(!diretorExistente) {
            throw new Error(
                "Diretor não encontrado."
            );
        }

        const diretor = new DiretorModel(
            id,
            nome,
            dataNascimento,
            nacionalidade
        );

        await this.diretorDAO
            .atualizarDiretor(id, diretor);

        return diretor;
    }

    async removerDiretor(id) {

        const diretor =
            await this.diretorDAO.buscarPorId(id);

        if(!diretor) {
            throw new Error(
                "Diretor não encontrado."
            );
        }

        await this.diretorDAO
            .removerDiretor(id);

    }

}

module.exports = DiretorService;