const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Importação das rotas
const usuarioRoutes = require("./routes/usuarioRoutes");
const filmeRoutes = require("./routes/filmesRoutes"); // Verifique se é no plural mesmo
const serieRoutes = require("./routes/serieRoutes");
const diretorRoutes = require("./routes/diretorRoutes");
const atorRoutes = require("./routes/atorRoutes");
const tituloAtorRoutes = require("./routes/tituloAtorRoutes");
const generoRoutes = require("./routes/generoRoutes");
const tituloGeneroRoutes = require("./routes/tituloGeneroRoutes");
const listaRoutes = require("./routes/listaRoutes");
const listaTituloRoutes = require("./routes/listaTituloRoutes");
const avaliacaoRoutes = require("./routes/avaliacaoRoutes");

// Definição dos endpoints (Prefixos)
app.use("/usuarios", usuarioRoutes);
app.use("/filmes", filmeRoutes);
app.use("/series", serieRoutes);
app.use("/diretores", diretorRoutes);
app.use("/atores", atorRoutes);
app.use("/titulos-atores", tituloAtorRoutes);
app.use("/generos", generoRoutes);
app.use("/titulos-generos", tituloGeneroRoutes);
app.use("/listas", listaRoutes); // Corrigido de "./listas" para "/listas"
app.use("/listas-titulos", listaTituloRoutes);
app.use("/avaliacoes", avaliacaoRoutes);

// Inicialização do servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});