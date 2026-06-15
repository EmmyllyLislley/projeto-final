const ListaModel = require("../models/listaModel");
const ListaDAO = require("../repository/listaDAO");

class ListaService {
    constructor() {
        this.listaDAO = ListaDAO;
    }

    async cadastrar(nome, idUsuario) {
        const lista = new ListaModel(null, nome, idUsuario);

        const id = await this.listaDAO.adicionar(lista);

        return {
            id,
            nome: lista.nome,
            usuario: lista.usuario,
        };
    }

    async atualizar(id, nome) {
        const listaExistente = await this.listaDAO.buscarPorId(id);

        if (!listaExistente) {
            throw new Error("Lista não encontrada");
        }

        const lista = new ListaModel(id, nome, listaExistente.id_usuario);

        await this.listaDAO.atualizar(id, lista);

        return lista;
    }

    async remover(id) {
        const lista = await this.listaDAO.buscarPorId(id);

        if (!lista) {
            throw new Error("Lista não encontrada");
        }

        await this.listaDAO.remover(id);
    }

    async listar() {
        return await this.listaDAO.listar();
    }

    async buscarPorId(id) {
        const lista = await this.listaDAO.buscarPorId(id);

        if (!lista) {
            throw new Error("Lista não encontrada");
        }

        return lista;
    }
}

module.exports = new ListaService();
