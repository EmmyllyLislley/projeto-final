const express = require("express");
const usuarioRouter = express.Router();

const usuarioController = require("../controllers/UsuarioController");

usuarioRouter.post("/", usuarioController.cadastrar.bind(usuarioController));
usuarioRouter.post("/login", usuarioController.login.bind(usuarioController));
usuarioRouter.get("/", usuarioController.listar.bind(usuarioController));
usuarioRouter.get("/:id", usuarioController.buscarPorId.bind(usuarioController));
usuarioRouter.put("/:id", usuarioController.atualizar.bind(usuarioController));
usuarioRouter.put("/:id/senha", usuarioController.alterarSenha.bind(usuarioController));
usuarioRouter.delete("/:id", usuarioController.remover.bind(usuarioController));

module.exports = usuarioRouter;
