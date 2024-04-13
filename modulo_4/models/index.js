// Suggested code may be subject to a license. Learn more: ~LicenseLog:4129496241.
const mongoose = require('mongoose')

const Perfil = require("./perfil");

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/perfil')
}

module.exports = {
    connect,
    Perfil
};