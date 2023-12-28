const express = require("express");
const path = require("path");

const routerPerfil = require("./routes/perfil");

const app = express();
const porta = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", routerPerfil);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
