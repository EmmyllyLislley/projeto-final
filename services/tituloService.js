const TituloDAO = require('../repository/tituloDAO');
const TituloModel = require('../models/tituloModel');
const FilmeModel = require('../models/filmeModel');
const SerieModel = require('../models/serieModel');

class TituloService {
    constructor() {
        this.tituloDAO = new TituloDAO();
    }

    
}

module.exports = TituloService;