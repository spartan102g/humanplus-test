const mongoose = require("mongoose");

const { Schema } = mongoose;

const Usuario = new Schema({
  nombreCompleto: { type: String, required: true },
  nombreUsuario: { type: String, required: true },
  clave: { type: String, required: true },
  correo: { type: String, required: true },
  // 0: master
  // 1: psicologo
  // 2: paciente,
  permisos: { type: Number, required: false, default: 2 },
  activado: { type: Boolean, required: false, default: false },
});

module.exports = mongoose.model("Usuario", Usuario);
