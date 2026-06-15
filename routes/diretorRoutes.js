const express = require("express");
const diretorRouter = express.Router();

const diretorController = require("../controllers/diretorController");

diretorRouter.post("/", diretorController.cadastrar.bind(diretorController));

diretorRouter.get("/", diretorController.listar.bind(diretorController));

diretorRouter.get("/:id", diretorController.buscarPorId.bind(diretorController));

diretorRouter.get("/nome/:nome", diretorController.buscarPorNome.bind(diretorController),);

diretorRouter.put("/:id", diretorController.atualizar.bind(diretorController));

diretorRouter.delete("/:id", diretorController.remover.bind(diretorController));

module.exports = diretorRouter;
