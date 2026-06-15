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
        await this.tituloAtorDAO.removerAtorDoTitulo(idTitulo, idAtor);
    }

    async listarAtoresDoTitulo(idTitulo) {
        return await this.tituloAtorDAO.listarAtoresDoTitulo(idTitulo);
    }

    async listarTitulosDoAtor(idAtor) {
        return await this.tituloAtorDAO.listarTitulosDoAtor(idAtor);
    }
}

module.exports = new TituloAtorService();
