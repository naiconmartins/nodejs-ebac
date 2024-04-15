const express = require("express");
const { connect } = require("../models");

connect();

const { Perfil } = require("../models");

const router = express.Router();

router.get("/", (_, res) => {
  Perfil.find({}).then((perfil) => {
    res.render("perfil/index", {
      nomeDoUsuario: perfil[0].nome,
      idadeDoUsuario: perfil[0].idade,
    });
  });
});

module.exports = router;
