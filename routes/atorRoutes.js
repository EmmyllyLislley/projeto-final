const express = require("express");
const atorRouter = express.Router();

const atorController = require("../controllers/atorController");

atorRouter.post("/", atorController.cadastrar.bind(atorController));
atorRouter.get("/", atorController.listar.bind(atorController));
atorRouter.get("/:id", atorController.buscarPorId.bind(atorController));
atorRouter.put("/:id", atorController.atualizar.bind(atorController));
atorRouter.delete("/:id", atorController.remover.bind(atorController));

module.exports = atorRouter;
