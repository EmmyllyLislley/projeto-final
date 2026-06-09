const DiretorService =
    require('../services/diretorService');

class DiretorController {

    constructor() {
        this.diretorService =
            new DiretorService();
    }

    async cadastrar(req, res) {

        try {

            const {
                nome,
                dataNascimento,
                nacionalidade
            } = req.body;

            await this.diretorService
                .cadastrarDiretor(
                    nome,
                    dataNascimento,
                    nacionalidade
                );

            res.send(
                "Diretor cadastrado com sucesso!"
            );

        } catch(err) {

            res.send(err.message);

        }

    }

    async buscarPorId(req, res) {

        try {

            const { id } = req.params;

            const diretor =
                await this.diretorService
                    .buscarPorId(id);

            res.send(diretor);

        } catch(err) {

            res.send(err.message);

        }

    }

    async listar(req, res) {

        try {

            const diretores =
                await this.diretorService
                    .listarDiretores();

            res.send(diretores);

        } catch(err) {

            res.send(err.message);

        }

    }

    async atualizar(req, res) {

        try {

            const { id } = req.params;

            const {
                nome,
                dataNascimento,
                nacionalidade
            } = req.body;

            const diretor =
                await this.diretorService
                    .atualizarDiretor(
                        id,
                        nome,
                        dataNascimento,
                        nacionalidade
                    );

            res.send(diretor);

        } catch(err) {

            res.send(err.message);

        }

    }

    async remover(req, res) {

        try {

            const { id } = req.params;

            await this.diretorService
                .removerDiretor(id);

            res.send(
                "Diretor removido com sucesso!"
            );

        } catch(err) {

            res.send(err.message);

        }

    }

}

module.exports = DiretorController;