const express = require("express");
const avaliacaoRouter = express.Router();

const avaliacaoController = require("../controllers/avaliacaoController");

avaliacaoRouter.post("/", avaliacaoController.cadastrar.bind(avaliacaoController));
avaliacaoRouter.get("/", avaliacaoController.listar.bind(avaliacaoController));
avaliacaoRouter.get("/:id", avaliacaoController.buscarPorId.bind(avaliacaoController));
avaliacaoRouter.get("/titulo/:idTitulo", avaliacaoController.listarPorTitulo.bind(avaliacaoController));
avaliacaoRouter.put("/:id", avaliacaoController.atualizar.bind(avaliacaoController));
avaliacaoRouter.delete("/:id", avaliacaoController.remover.bind(avaliacaoController));

module.exports = avaliacaoRouter;
