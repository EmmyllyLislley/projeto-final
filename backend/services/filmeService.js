const FilmeModel = require('../models/filmeModel');

const FilmeDAO = require('../repository/filmeDAO');
const TituloDAO = require('../repository/tituloDAO');
const DiretorDAO = require('../repository/diretorDAO');

class FilmeService {

    constructor() {
        this.filmeDAO = new FilmeDAO();
        this.tituloDAO = new TituloDAO();
        this.diretorDAO = new DiretorDAO();
    }

    async cadastrarFilme(
        nome,
        dataLancamento,
        classificacaoIndicativa,
        diretorId,
        duracao
    ) {

        const diretor =
            await this.diretorDAO.buscarPorId(diretorId);

        if(!diretor) {
            throw new Error(
                "Diretor não encontrado."
            );
        }

        const filme = new FilmeModel(
            null,
            nome,
            dataLancamento,
            classificacaoIndicativa,
            duracao
        );

        const idTitulo =
            await this.tituloDAO.adicionarTitulo(
                filme,
                diretorId
            );

        await this.filmeDAO.adicionarFilme(
            idTitulo,
            filme
        );

        return filme;
    }

 async buscarPorId(id) {

    const filme =
        await this.filmeDAO.buscarPorId(id);

    if(!filme) {
        throw new Error("Filme não encontrado.");
    }

    return filme;
}

    async atualizarFilme(
        id,
        nome,
        dataLancamento,
        classificacaoIndicativa,
        diretorId,
        duracao
    ) {

        const titulo =
            await this.tituloDAO.buscarPorId(id);

        if(!titulo) {
            throw new Error(
                "Filme não encontrado."
            );
        }

        const filme = new FilmeModel(
            id,
            nome,
            dataLancamento,
            classificacaoIndicativa,
            duracao
        );

        await this.tituloDAO.atualizarTitulo(
            id,
            filme,
            diretorId
        );

        await this.filmeDAO.atualizarFilme(
            id,
            filme
        );

        return filme;
    }

    async removerFilme(id) {

        const titulo =
            await this.tituloDAO.buscarPorId(id);

        if(!titulo) {
            throw new Error(
                "Filme não encontrado."
            );
        }

        await this.filmeDAO.removerFilme(id);

        await this.tituloDAO.removerTitulo(id);
    }

    async listarFilmes() {

    return await this.filmeDAO.listarFilmes();

}

}

module.exports = FilmeService;