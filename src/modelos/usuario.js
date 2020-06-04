const mongoose = require('mongoose')

const { Schema } = mongoose

const Usuario = new Schema({
    nombreCompleto: String,
    nombreUsuario: String,
    clave: String,
    correo: String,
    // 0: master
    // 1: psicologo
    // 2: paciente,
    permisos: Number,
    activado: Boolean
})

module.exports = mongoose.model('Usuario', Usuario)
