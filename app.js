const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const usuarioRoutes = require("./routes/usuarioRoutes");
const filmeRoutes = require("./routes/filmesRoutes");
const serieRoutes = require("./routes/serieRoutes");
const diretorRoutes = require("./routes/diretorRoutes");
const atorRoutes = require("./routes/atorRoutes");
const tituloAtorRoutes = require("./routes/tituloAtorRoutes");
const generoRoutes = require("./routes/generoRoutes");
const tituloGeneroRoutes = require("./routes/tituloGeneroRoutes");
const listaRoutes = require("./routes/listaRoutes");
const listaTituloRoutes = require("./routes/listaTituloRoutes");
const avaliacaoRoutes = require("./routes/avaliacaoRoutes");


app.use("/usuarios", usuarioRoutes);
app.use("/filmes", filmeRoutes);
app.use("/series", serieRoutes);
app.use("/diretores", diretorRoutes);
app.use("/atores", atorRoutes);
app.use("/titulos-atores", tituloAtorRoutes);
app.use("/generos", generoRoutes);
app.use("/titulos-generos", tituloGeneroRoutes);
app.use("./listas", listaRoutes);
app.use("/listas-titulos", listaTituloRoutes);
app.use("/avaliacoes", avaliacaoRoutes);


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
