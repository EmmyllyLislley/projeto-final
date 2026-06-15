const DiretorService = require("../services/diretorService");

class DiretorController {
    constructor() {
        this.diretorService = DiretorService;
    }

    async cadastrar(req, res) {
        try {
            const { nome } = req.body;

            const diretor = await this.diretorService.cadastrar(nome);

            res.status(201).json({
                mensagem: "Diretor cadastrado com sucesso!",
                diretor,
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
            const { nome } = req.body;

            const diretor = await this.diretorService.atualizar(
                id,
                nome
            );

            res.status(200).json({
                mensagem: "Diretor atualizado com sucesso",
                diretor: {
                    id: diretor.id,
                    nome: diretor.nome
                }
            });

        } catch (err) {
            res.status(400).json({
                erro: err.message
            });
        }
    }

    async remover(req, res) {
        try {
            const { id } = req.params;

            await this.diretorService.remover(id);

            res.status(200).json({
                mensagem: "Diretor removido com sucesso!",
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async listar(req, res) {
        try {
            const diretores = await this.diretorService.listar();

            res.status(200).json({
                mensagem: "Lista de diretores",
                diretores,
            });
        } catch (err) {
            res.status(400).json({
                erro: err.message,
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;

            const diretor = await this.diretorService.buscarPorId(id);

            res.status(200).json({
                mensagem: "Diretor encontrado",
                diretor,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }

    async buscarPorNome(req, res) {
        try {
            const { nome } = req.params;

            const diretores = await this.diretorService.buscarPorNome(nome);

            res.status(200).json({
                mensagem: "Diretor(es) encontrado(s)",
                diretores,
            });
        } catch (err) {
            res.status(404).json({
                erro: err.message,
            });
        }
    }
}

module.exports = new DiretorController();
