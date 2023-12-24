const express = require("express");

const router = express.Router();

router.get("/", (_, res) => {
  res.render("perfil/index", {
    nomeDoUsuario: "Naicon Martins",
    idadeDoUsuario: 32,
  });
});

module.exports = router;
