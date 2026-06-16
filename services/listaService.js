const ListaModel = require("../models/listaModel");
const ListaDAO = require("../repository/listaDAO");

class ListaService {
    constructor() {
        this.listaDAO = ListaDAO;
    }

    async cadastrar(nome, idUsuario) {
        if (!nome?.trim() || !idUsuario) {
            throw new Error("Nome da lista e ID do usuário são obrigatórios");
        }

        const lista = new ListaModel(null, nome.trim(), idUsuario);
        const id = await this.listaDAO.adicionar(lista);

        return {
            id,
            nome: lista.nome,
            usuario: lista.usuario,
        };
    }

    async atualizar(id, nome) {
        if (!id) throw new Error("ID da lista é obrigatório");

        const listaExistente = await this.listaDAO.buscarPorId(id);
        if (!listaExistente) {
            throw new Error("Lista não encontrada");
        }

        if (!nome?.trim()) {
            throw new Error("O nome da lista é obrigatório para atualização");
        }

        const lista = new ListaModel(id, nome.trim(), listaExistente.idUsuario);
        await this.listaDAO.atualizar(id, lista);

        return lista;
    }

    async remover(id) {
        if (!id) throw new Error("ID é obrigatório");
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
        if (!id) throw new Error("ID é obrigatório");
        const lista = await this.listaDAO.buscarPorId(id);

        if (!lista) {
            throw new Error("Lista não encontrada");
        }

        return lista;
    }
}

module.exports = new ListaService();