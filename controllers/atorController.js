const AtorService = require('../services/atorService');

class AtorController {
    constructor() {
        this.atorService = new AtorService();
    }

    async cadastrar(req, res) {
        try {
            const {nome, dataNascimento, nacionalidade} = req.body;

            await this.atorService.cadastrarAtor(nome, dataNascimento, nacionalidade);

            res.send("Ator cadastrado com sucesso!");

        } catch(err) {
            res.send(err.message);
        }
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;

            const ator = await this.atorService.buscarPorId(id);

            res.send(ator);

        } catch(err) {
            res.send(err.message);
        }
    }

    async listar(req, res) {
        try {
            const atores = await this.atorService.listarAtores();

            res.send(atores);

        } catch(err) {
            res.send(err.message);
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;

            const {nome, dataNascimento, nacionalidade} = req.body;

            const ator = await this.atorService.atualizarAtor(id, nome, dataNascimento, nacionalidade);

            res.send(ator);

        } catch(err) {
            res.send(err.message);
        }
    }

    async remover(req, res) {
        try {
            const { id } = req.params;
            await this.atorService.removerAtor(id);

            res.send("Ator removido com sucesso!");

        } catch(err) {
            res.send(err.message);
        }
    }

    async adicionarAoTitulo(req, res) {
        try {
            const { tituloId, atorId } = req.params;

            await this.atorService.adicionarAtorAoTitulo(tituloId, atorId);

            res.send("Ator vinculado ao título com sucesso!");

        } catch(err) {
            res.send(err.message);
        }
    }

}

module.exports = AtorController;