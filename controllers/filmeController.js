const FilmeService = require('../services/FilmeService');

class FilmeController {

    constructor() {
        this.filmeService = new FilmeService();
    }

    async cadastrar(req, res) {
        try {

            const {
                nome,
                dataLancamento,
                classificacaoIndicativa,
                diretorId,
                duracao
            } = req.body;

            const filme =
                await this.filmeService.cadastrarFilme(
                    nome,
                    dataLancamento,
                    classificacaoIndicativa,
                    diretorId,
                    duracao
                );

            res.send(filme);

        } catch(err) {
            res.send(err.message);
        }
    }

    async buscarPorId(req, res) {
        try {

            const { id } = req.params;

            const filme =
                await this.filmeService.buscarPorId(id);

            res.send(filme);

        } catch(err) {
            res.send(err.message);
        }
    }

    async listar(req, res) {
        try {

            const filmes =
                await this.filmeService.listarFilmes();

            res.send(filmes);

        } catch(err) {
            res.send(err.message);
        }
    }

    async atualizar(req, res) {
        try {

            const { id } = req.params;

            const {
                nome,
                dataLancamento,
                classificacaoIndicativa,
                diretorId,
                duracao
            } = req.body;

            const filme =
                await this.filmeService.atualizarFilme(
                    id,
                    nome,
                    dataLancamento,
                    classificacaoIndicativa,
                    diretorId,
                    duracao
                );

            res.send(filme);

        } catch(err) {
            res.send(err.message);
        }
    }

    async remover(req, res) {
        try {

            const { id } = req.params;

            await this.filmeService.removerFilme(id);

            res.send("Filme removido com sucesso!");

        } catch(err) {
            res.send(err.message);
        }
    }

}

module.exports = FilmeController;