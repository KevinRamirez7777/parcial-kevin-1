const mongoose = require('mongoose');
const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  credito: {
    tipo: Number,
    enviosDisponibles: Number,
    costoPorEnvio: Number
  }
});
module.exports = mongoose.model('Usuario', UsuarioSchema);