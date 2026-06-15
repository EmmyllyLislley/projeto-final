const FilmeModel = require("../models/filmeModel");
const TituloDAO = require("../repository/tituloDAO");
const FilmeDAO = require("../repository/filmeDAO");

class FilmeService {
    constructor() {
        this.tituloDAO = TituloDAO
        this.filmeDAO = FilmeDAO;
    }

    async cadastrar(nome, dataLancamento, classificacaoIndicativa, duracao, idDiretor) {
        const filme = new FilmeModel(
            null,
            nome,
            dataLancamento,
            classificacaoIndicativa,
            idDiretor,
            duracao,
        );

        const idTitulo = await this.tituloDAO.adicionar(filme, idDiretor);

        await this.filmeDAO.adicionar(idTitulo, duracao);

        return filme;
    }


    async atualizar(id, nome, dataLancamento, classificacaoIndicativa, duracao, idDiretor) {
        const tituloId = await this.tituloDAO.buscarPorId(id);

        if (!tituloId) {
            throw new Error("Filme não encontrado");
        }

        const filme = new FilmeModel(
            null,
            nome,
            dataLancamento,
            classificacaoIndicativa,
            idDiretor,
            duracao,
        );

        await this.tituloDAO.atualizar(id, filme);
        await this.filmeDAO.atualizar(id, filme);

        return filme;
    }

    async remover(id) {
        const titulo = await this.tituloDAO.buscarPorId(id);

        if (!titulo) {
            throw new Error("Filme não encontrado");
        }

        await this.filmeDAO.remover(id);
        await this.tituloDAO.remover(id);
    }


    async listar() {
        return await this.filmeDAO.listar();
    }
    

    async buscarPorId(id) {
        const tituloId = await this.tituloDAO.buscarPorId(id);

        if (!tituloId) {
            throw new Error("Filme não encontrado");
        }

        const filme = await this.filmeDAO.buscarPorId(id);
        return filme;
    }
}

module.exports = new FilmeService();
