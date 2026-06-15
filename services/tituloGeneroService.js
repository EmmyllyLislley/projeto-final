const TituloDAO = require("../repository/tituloDAO");
const GeneroDAO = require("../repository/generoDAO");
const TituloGeneroDAO = require("../repository/tituloGeneroDAO");

class TituloGeneroService {
    constructor() {
        this.tituloDAO = TituloDAO;
        this.generoDAO = GeneroDAO;
        this.tituloGeneroDAO = TituloGeneroDAO;
    }

    async adicionarGeneroAoTitulo(idTitulo, idGenero) {
        const titulo = await this.tituloDAO.buscarPorId(idTitulo);

        if (!titulo) {
            throw new Error("Título não encontrado");
        }

        const genero = await this.generoDAO.buscarPorId(idGenero);

        if (!genero) {
            throw new Error("Genero não encontrado");
        }

        await this.tituloGeneroDAO.adicionarGeneroAoTitulo(idTitulo, idGenero);
    }

    async removerGeneroDoTitulo(idTitulo, idGenero) {
        await this.tituloGeneroDAO.removerGeneroDoTitulo(idTitulo, idGenero);
    }

    async listarGeneroesDoTitulo(idTitulo) {
        return await this.tituloGeneroDAO.listarGeneroesDoTitulo(idTitulo);
    }

    async listarTitulosDoGenero(idGenero) {
        return await this.tituloGeneroDAO.listarTitulosDoGenero(idGenero);
    }
}

module.exports = new TituloGeneroService();
