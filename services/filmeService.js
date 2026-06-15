const FilmeModel = require("../models/filmeModel");
const TituloDAO = require("../repository/tituloDAO");
const FilmeDAO = require("../repository/filmeDAO");

class FilmeService {
    constructor() {
        this.tituloDAO = TituloDAO;
        this.filmeDAO = FilmeDAO;
    }

    async cadastrar(
        nome,
        dataLancamento,
        classificacaoIndicativa,
        duracao,
        idDiretor,
    ) {
        if (!nome?.trim() || !duracao) {
            throw new Error("Os campos são obrigatórios");
        }
        nome = nome.trim();

        const data = new Date(dataLancamento);

        if (isNaN(data.getTime())) {
            throw new Error("Data de lançamento inválida");
        }

        if (duracao <= 0) {
            throw new Error("Duração inválida");
        }

        const classificacoesValidas = ["livre", 10, 12, 14, 16, 18];

        if (!classificacoesValidas.includes(classificacaoIndicativa)) {
            throw new Error("Insira uma classificação válida.");
        }

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

    async atualizar(
        id,
        nome,
        dataLancamento,
        classificacaoIndicativa,
        duracao,
        idDiretor,
    ) {
        if (!id) {
            throw new Error("ID é obrigatório");
        }

        const tituloId = await this.tituloDAO.buscarPorId(id);

        if (!tituloId) {
            throw new Error("Filme não encontrado");
        }

        if (!nome?.trim() || !duracao) {
            throw new Error("Todos os campos são obrigatórios");
        }

        nome = nome.trim();

        const data = new Date(dataLancamento);

        if (isNaN(data.getTime())) {
            throw new Error("Data de lançamento inválida");
        }

        if (duracao <= 0) {
            throw new Error("Duração inválida");
        }

        const classificacoesValidas = ["livre", 10, 12, 14, 16, 18];

        if (!classificacoesValidas.includes(classificacaoIndicativa)) {
            throw new Error("Insira uma classificação válida.");
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
        if (!id) {
            throw new Error("ID é obrigatório");
        }

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
        if (!id) {
            throw new Error("ID é obrigatório");
        }

        const tituloId = await this.tituloDAO.buscarPorId(id);

        if (!tituloId) {
            throw new Error("Filme não encontrado");
        }

        return await this.filmeDAO.buscarPorId(id);
    }
}

module.exports = new FilmeService();
