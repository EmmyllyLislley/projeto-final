const AvaliacaoDAO = require('../repository/avaliacaoDAO');
const AvaliacaoModel = require('../models/avaliacaoModel');

const UsuarioDAO = require('../repository/UsuarioDAO');
const TituloDAO = require('../repository/tituloDAO');

class AvaliacaoService {

    constructor() {
        this.avaliacaoDAO = new AvaliacaoDAO();
        this.usuarioDAO = new UsuarioDAO();
        this.tituloDAO = new TituloDAO();
    }

    async cadastrarAvaliacao(
        usuarioId,
        tituloId,
        nota,
        critica
    ) {

        const usuario =
            await this.usuarioDAO.buscarUsuarioPorId(
                usuarioId
            );

        if(!usuario) {
            throw new Error(
                "Usuário não encontrado."
            );
        }

        const titulo =
            await this.tituloDAO.buscarTituloPorId(
                tituloId
            );

        if(!titulo) {
            throw new Error(
                "Título não encontrado."
            );
        }

        if(
            typeof nota !== 'number' ||
            nota < 0 ||
            nota > 10
        ) {
            throw new Error(
                "A nota deve estar entre 0 e 10."
            );
        }

        const avaliacao = new AvaliacaoModel(
            null,
            usuarioId,
            tituloId,
            nota,
            critica
        );

        await this.avaliacaoDAO.adicionarAvaliacao(
            avaliacao
        );

        return avaliacao;
    }

    async buscarPorId(id) {

        const avaliacao =
            await this.avaliacaoDAO.buscarAvaliacaoPorId(
                id
            );

        if(!avaliacao) {
            throw new Error(
                "Avaliação não encontrada."
            );
        }

        return avaliacao;
    }

    async listarAvaliacoes() {

        return await this.avaliacaoDAO
            .listarAvaliacoes();

    }

    async atualizarAvaliacao(
        id,
        nota,
        critica
    ) {

        const avaliacao =
            await this.avaliacaoDAO
                .buscarAvaliacaoPorId(id);

        if(!avaliacao) {
            throw new Error(
                "Avaliação não encontrada."
            );
        }

        if(
            typeof nota !== 'number' ||
            nota < 0 ||
            nota > 10
        ) {
            throw new Error(
                "A nota deve estar entre 0 e 10."
            );
        }

        avaliacao.nota = nota;
        avaliacao.critica = critica;

        await this.avaliacaoDAO.atualizarAvaliacao(
            id,
            avaliacao
        );

        return avaliacao;
    }

    async removerAvaliacao(id) {

        const avaliacao =
            await this.avaliacaoDAO
                .buscarAvaliacaoPorId(id);

        if(!avaliacao) {
            throw new Error(
                "Avaliação não encontrada."
            );
        }

        await this.avaliacaoDAO
            .removerAvaliacao(id);
    }

    async buscarPorUsuario(usuarioId) {

        const usuario =
            await this.usuarioDAO
                .buscarUsuarioPorId(usuarioId);

        if(!usuario) {
            throw new Error(
                "Usuário não encontrado."
            );
        }

        return await this.avaliacaoDAO
            .buscarAvaliacoesPorUsuario(
                usuarioId
            );
    }

    async buscarPorTitulo(tituloId) {

        const titulo =
            await this.tituloDAO
                .buscarTituloPorId(tituloId);

        if(!titulo) {
            throw new Error(
                "Título não encontrado."
            );
        }

        return await this.avaliacaoDAO
            .buscarAvaliacoesPorTitulo(
                tituloId
            );
    }

}

module.exports = AvaliacaoService;