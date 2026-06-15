const express = require("express");
const listaTituloRouter = express.Router();

const listaTituloController = require("../controllers/listaTituloController");

listaTituloRouter.post("/", listaTituloController.adicionar.bind(listaTituloController));

listaTituloRouter.delete("/", listaTituloController.remover.bind(listaTituloController));

listaTituloRouter.get("/lista/:idLista", listaTituloController.listarTitulosDaLista.bind(listaTituloController));

listaTituloRouter.get("/titulo/:idTitulo", listaTituloController.listarListasDoTitulo.bind(listaTituloController));

module.exports = listaTituloRouter;
