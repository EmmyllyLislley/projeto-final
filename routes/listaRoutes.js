const express = require("express");
const listaRouter = express.Router();

const listaController = require("../controllers/listaController");

listaRouter.post("/", listaController.cadastrar.bind(listaController));

listaRouter.get("/", listaController.listar.bind(listaController));

listaRouter.get("/:id", listaController.buscarPorId.bind(listaController));

listaRouter.put("/:id", listaController.atualizar.bind(listaController));

listaRouter.delete("/:id", listaController.remover.bind(listaController));

module.exports = listaRouter;
