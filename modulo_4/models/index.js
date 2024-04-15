const mongoose = require("mongoose");

const Perfil = require("./perfil");

const connect = () => {
  mongoose.connect("mongodb://localhost:27017/usuarios");
};

module.exports = {
  connect,
  Perfil,
};
