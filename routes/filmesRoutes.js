const express = require("express");
const filmeRouter = express.Router();

const filmeController = require("../controllers/filmeController");

filmeRouter.post("/", filmeController.cadastrar.bind(filmeController));
filmeRouter.get("/", filmeController.listar.bind(filmeController));
filmeRouter.get("/:id", filmeController.buscarPorId.bind(filmeController));
filmeRouter.put("/:id", filmeController.atualizar.bind(filmeController));
filmeRouter.delete("/:id", filmeController.remover.bind(filmeController));

module.exports = filmeRouter;
