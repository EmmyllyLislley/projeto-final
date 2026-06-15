const express = require("express");
const generoRouter = express.Router();

const generoController = require("../controllers/generoController");

generoRouter.post("/", generoController.cadastrar.bind(generoController));

generoRouter.get("/", generoController.listar.bind(generoController));

generoRouter.get("/:id", generoController.buscarPorId.bind(generoController));

generoRouter.put("/:id", generoController.atualizar.bind(generoController));

generoRouter.delete("/:id", generoController.remover.bind(generoController));

module.exports = generoRouter;
