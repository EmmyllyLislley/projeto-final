const TituloDAO = require("../repository/tituloDAO");
const AtorDAO = require("../repository/atorDAO");
const TituloAtorDAO = require("../repository/tituloAtorDAO");

class TituloAtorService {
    constructor() {
        this.tituloDAO = TituloDAO;
        this.atorDAO = AtorDAO;
        this.tituloAtorDAO = TituloAtorDAO;
    }

    async adicionarAtorAoTitulo(idTitulo, idAtor) {
        if (!idTitulo || !idAtor) {
            throw new Error("ID do título e ID do ator são obrigatórios");
        }

        const titulo = await this.tituloDAO.buscarPorId(idTitulo);
        if (!titulo) {
            throw new Error("Título não encontrado");
        }

        const ator = await this.atorDAO.buscarPorId(idAtor);
        if (!ator) {
            throw new Error("Ator não encontrado");
        }

        await this.tituloAtorDAO.adicionarAtorAoTitulo(idTitulo, idAtor);
    }

    async removerAtorDoTitulo(idTitulo, idAtor) {
        if (!idTitulo || !idAtor) {
            throw new Error("ID do título e ID do ator são obrigatórios");
        }
        await this.tituloAtorDAO.removerAtorDoTitulo(idTitulo, idAtor);
    }

    async listarAtoresDoTitulo(idTitulo) {
        if (!idTitulo) throw new Error("ID do título é obrigatório");
        return await this.tituloAtorDAO.listarAtoresDoTitulo(idTitulo);
    }

    async listarTitulosDoAtor(idAtor) {
        if (!idAtor) throw new Error("ID do ator é obrigatório");
        return await this.tituloAtorDAO.listarTitulosDoAtor(idAtor);
    }
}

module.exports = new TituloAtorService();