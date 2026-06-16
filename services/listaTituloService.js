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
        if (!idLista || !idTitulo) {
            throw new Error("ID da lista e ID do título são obrigatórios");
        }

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
        if (!idLista || !idTitulo) {
            throw new Error("ID da lista e ID do título são obrigatórios");
        }
        await this.listaTituloDAO.removerTituloDaLista(idLista, idTitulo);
    }

    async listarTitulosDaLista(idLista) {
        if (!idLista) throw new Error("ID da lista é obrigatório");

        const lista = await this.listaDAO.buscarPorId(idLista);
        if (!lista) {
            throw new Error("Lista não encontrada");
        }

        return await this.listaTituloDAO.listarTitulosDaLista(idLista);
    }

    async listarListasDoTitulo(idTitulo) {
        if (!idTitulo) throw new Error("ID do título é obrigatório");

        const titulo = await this.tituloDAO.buscarPorId(idTitulo);
        if (!titulo) {
            throw new Error("Título não encontrado");
        }

        return await this.listaTituloDAO.listarListasDoTitulo(idTitulo);
    }
}

module.exports = new ListaTituloService();