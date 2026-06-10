const listaDAO = require('../repository/listaDAO');

class ListaService {

    async cadastrarLista(lista) {

        return await listaDAO.adicionarLista(lista);
    }

    async listarListas() {

        return await listaDAO.buscarTodas();
    }

    async excluirLista(id) {

        return await listaDAO.excluir(id);
    }
}

module.exports = ListaService;