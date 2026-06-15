const ListaDAO = require("../repository/listaDAO");
const TituloDAO = require("../repository/tituloDAO");
const ListaTituloDAO = require("../repository/listaTituloDAO");

class ListaTituloService {
    constructor() {
        this.listaDAO = ListaDAO;
        this.tituloDAO = TituloDAO;
        this.listaTituloDAO = ListaTituloDAO;
    }

    async adicionarTituloNaLista(idLista, idTitulo) {
        const lista = await this.listaDAO.buscarPorId(idLista);

        if (!lista) {
            throw new Error("Lista não encontrada");
        }

        const titulo = await this.tituloDAO.buscarPorId(idTitulo);

        if (!titulo) {
            throw new Error("Título não encontrado");
        }

        await this.listaTituloDAO.adicionarTituloNaLista(idLista, idTitulo);
    }

    async removerTituloDaLista(idLista, idTitulo) {
        await this.listaTituloDAO.removerTituloDaLista(idLista, idTitulo);
    }

    async listarTitulosDaLista(idLista) {
        const lista = await this.listaDAO.buscarPorId(idLista);

        if (!lista) {
            throw new Error("Lista não encontrada");
        }

        return await this.listaTituloDAO.listarTitulosDaLista(idLista);
    }

    async listarListasDoTitulo(idTitulo) {
        const titulo = await this.tituloDAO.buscarPorId(idTitulo);

        if (!titulo) {
            throw new Error("Título não encontrado");
        }

        return await this.listaTituloDAO.listarListasDoTitulo(idTitulo);
    }
}

module.exports = new ListaTituloService();
