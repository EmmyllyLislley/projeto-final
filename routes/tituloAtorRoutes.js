const express = require("express");
const tituloAtorRouter = express.Router();

const tituloAtorController = require("../controllers/tituloAtorController");

tituloAtorRouter.post("/", tituloAtorController.adicionar.bind(tituloAtorController));

tituloAtorRouter.delete("/", tituloAtorController.remover.bind(tituloAtorController));

tituloAtorRouter.get("/titulo/:idTitulo", tituloAtorController.listarAtoresDoTitulo.bind(tituloAtorController));

tituloAtorRouter.get("/ator/:idAtor", tituloAtorController.listarTitulosDoAtor.bind(tituloAtorController));

module.exports = tituloAtorRouter;
