const FilmeService = require("../services/filmeService");

class FilmeController {
    constructor() {
        this.filmeService = FilmeService;
    }

    async cadastrar(req, res) {
        try {
            const {
                nome,
                dataLancamento,
                classificacaoIndicativa,
                duracao,
                idDiretor,
                generos
            } = req.body;

            const filme = await this.filmeService.cadastrar(
                nome,
                dataLancamento,
                classificacaoIndicativa,
                duracao,
                idDiretor,
            );

            if(generos && generos.length > 0) {
                await this.filmeService.vincularGeneros(filme.id, generos)
            }

            res.status(201).json({
                mensagem: "Filme cadastrado com sucesso!",
                filme: {
                    nome: filme.nome,
                    dataLancamento: filme.dataLancamento,
                    classificacaoIndicativa: filme.classificacaoIndicativa,
                    duracao: filme.duracao,
                },
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, dataLancamento, classificacaoIndicativa, duracao, idDiretor } =
                req.body;

            const filme = await this.filmeService.atualizar(
                id,
                nome,
                dataLancamento,
                classificacaoIndicativa,
                idDiretor,
                duracao
            );

            res.status(200).json({
                mensagem: "Atualização realizada com sucesso",
                filme: {
                    nome: filme.nome,
                    dataLancamento: filme.dataLancamento,
                    classificacaoIndicativa: filme.classificacaoIndicativa,
                    duracao: filme.duracao,
                },
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async remover(req, res) {
        try {
            const { id } = req.params;

            await this.filmeService.remover(id);

            res.status(200).json({
                mensagem: "Filme removido",
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async listar(req, res) {
        try {
            const filmes = await this.filmeService.listar();

            res.status(200).json({
                mensagem: "Lista de filmes: ",
                filmes,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;

            const filme = await this.filmeService.buscarPorId(id);

            res.status(200).json({
                mensagem: "Filme encontrado",
                filme,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }
}
module.exports = new FilmeController();
