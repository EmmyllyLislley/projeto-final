const express = require("express");
const serieRouter = express.Router();

const serieController = require("../controllers/serieController");

serieRouter.post("/", serieController.cadastrar.bind(serieController));
serieRouter.get("/", serieController.listar.bind(serieController));
serieRouter.get("/:id", serieController.buscarPorId.bind(serieController));
serieRouter.put("/:id", serieController.atualizar.bind(serieController));
serieRouter.delete("/:id", serieController.remover.bind(serieController));

module.exports = serieRouter;
