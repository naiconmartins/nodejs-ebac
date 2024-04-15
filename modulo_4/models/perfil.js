const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const perfilSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
  },
  { collection: "Perfil" }
);

const Perfil = mongoose.model("Perfil", perfilSchema);

module.exports = Perfil;
