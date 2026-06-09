const tituloGeneroDAO = require('../repository/tituloGeneroDAO');

class TituloGeneroService {

    async adicionar(idTitulo, idGenero) {

        return await tituloGeneroDAO.adicionar(
            idTitulo,
            idGenero
        );
    }

    async listar() {

        return await tituloGeneroDAO.listar();
    }

    async remover(idTitulo, idGenero) {

        return await tituloGeneroDAO.remover(
            idTitulo,
            idGenero
        );
    }
}

module.exports = TituloGeneroService;