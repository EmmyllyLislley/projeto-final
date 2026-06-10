const tituloAtorDAO = require('../repository/tituloAtorDAO');

class TituloAtorService {

    async adicionar(idTitulo, idAtor) {

        return await tituloAtorDAO.adicionar(
            idTitulo,
            idAtor
        );
    }

    async listar() {

        return await tituloAtorDAO.listar();
    }

    async remover(idTitulo, idAtor) {

        return await tituloAtorDAO.remover(
            idTitulo,
            idAtor
        );
    }
}

module.exports = TituloAtorService;