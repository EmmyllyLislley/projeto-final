const SerieModel = require("../models/serieModel");
const TituloDAO = require("../repository/tituloDAO");
const SerieDAO = require("../repository/serieDAO");

class SerieService {
    constructor() {
        this.tituloDAO = TituloDAO;
        this.serieDAO = SerieDAO;
    }

   async cadastrar(nome, dataLancamento, classificacaoIndicativa, temporadas, totalEpisodios, idDiretor) {
    
    if (!nome?.trim() || temporadas === undefined || totalEpisodios === undefined || !idDiretor) {
        throw new Error("Campos obrigatórios ausentes (nome, temporadas, episódios, diretor)");
    }

    
    const data = new Date(dataLancamento);
    if (isNaN(data.getTime())) {
        throw new Error("Data de lançamento inválida");
    }

    const classeNormalizada = classificacaoIndicativa === "livre" ? "livre" : Number(classificacaoIndicativa);
    const classificacoesValidas = ["livre", 10, 12, 14, 16, 18];
    if (!classificacoesValidas.includes(classeNormalizada)) {
        throw new Error("Insira uma classificação válida.");
    }

 
    const tempNum = Number(temporadas);
    const epNum = Number(totalEpisodios);
    if (tempNum <= 0 || epNum <= 0) {
        throw new Error("O número de temporadas e episódios deve ser maior que zero");
    }


    const novoTitulo = {
        nome: nome.trim(),
        dataLancamento: dataLancamento,
        classificacaoIndicativa: classificacaoIndicativa
    };

    const novaSerie = {
        temporadas: tempNum,
        totalEpisodios: epNum
    };

    const idTitulo = await this.tituloDAO.adicionar(novoTitulo, idDiretor);
    await this.serieDAO.adicionar(idTitulo, novaSerie);

    return { id: idTitulo, ...novoTitulo, ...novaSerie };
}

    async atualizar(id, nome, dataLancamento, classificacaoIndicativa, temporadas, totalEpisodios, idDiretor) {
        if (!id) throw new Error("ID é obrigatório");

        const titulo = await this.tituloDAO.buscarPorId(id);
        if (!titulo) {
            throw new Error("Série não encontrada");
        }

        if (!nome?.trim() || temporadas === undefined || totalEpisodios === undefined || !idDiretor) {
            throw new Error("Todos os campos são obrigatórios para a atualização");
        }

        const data = new Date(dataLancamento);
        if (isNaN(data.getTime())) {
            throw new Error("Data de lançamento inválida");
        }

        const classeNormalizada = classificacaoIndicativa === "livre" ? "livre" : Number(classificacaoIndicativa);
        const classificacoesValidas = ["livre", 10, 12, 14, 16, 18];
        if (!classificacoesValidas.includes(classeNormalizada)) {
            throw new Error("Insira uma classificação válida.");
        }

        if (Number(temporadas) <= 0 || Number(totalEpisodios) <= 0) {
            throw new Error("O número de temporadas e episódios deve ser maior que zero");
        }

        // CORREÇÃO: Passando o 'id' em vez de 'null' no construtor para persistir corretamente
        const serie = new SerieModel(
            id,
            nome.trim(),
            dataLancamento,
            classificacaoIndicativa,
            idDiretor,
            Number(temporadas),
            Number(totalEpisodios),
        );

        await this.tituloDAO.atualizar(id, serie);
        await this.serieDAO.atualizar(id, serie);

        return serie;
    }

    async remover(id) {
        if (!id) throw new Error("ID é obrigatório");
        const titulo = await this.tituloDAO.buscarPorId(id);

        if (!titulo) {
            throw new Error("Série não encontrada");
        }

        await this.serieDAO.remover(id);
        await this.tituloDAO.remover(id);
    }

    async listar() {
        return await this.serieDAO.listar();
    }

    async buscarPorId(id) {
        if (!id) throw new Error("ID é obrigatório");
        const titulo = await this.tituloDAO.buscarPorId(id);

        if (!titulo) {
            throw new Error("Série não encontrada");
        }

        return await this.serieDAO.buscarPorId(id);
    }
}

module.exports = new SerieService();