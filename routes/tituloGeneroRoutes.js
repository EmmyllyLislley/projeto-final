const express = require("express");
const tituloGeneroRouter = express.Router();

const tituloGeneroController = require("../controllers/tituloGeneroController");

tituloGeneroRouter.post("/", tituloGeneroController.adicionar.bind(tituloGeneroController));

tituloGeneroRouter.delete("/", tituloGeneroController.remover.bind(tituloGeneroController));

tituloGeneroRouter.get("/titulo/:idTitulo", tituloGeneroController.listarGenerosDoTitulo.bind(tituloGeneroController));

tituloGeneroRouter.get("/genero/:idGenero", tituloGeneroController.listarTitulosDoGenero.bind(tituloGeneroController));

module.exports = tituloGeneroRouter;
