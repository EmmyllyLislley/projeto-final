const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/UsuarioController");

router.post("/", usuarioController.cadastrar.bind(usuarioController));

router.post("/login", usuarioController.login.bind(usuarioController));

router.get("/", usuarioController.listar.bind(usuarioController));

router.get("/:id", usuarioController.buscarPorId.bind(usuarioController));

router.put("/:id", usuarioController.atualizar.bind(usuarioController));

router.put("/:id/senha", usuarioController.alterarSenha.bind(usuarioController));

router.delete("/:id", usuarioController.remover.bind(usuarioController));

module.exports = router;
