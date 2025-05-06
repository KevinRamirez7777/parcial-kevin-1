const mongoose = require('mongoose');
const EnvioSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
  nombre: String,
  direccion: String,
  telefono: String,
  referencia: String,
  observacion: String
});
module.exports = mongoose.model('Envio', EnvioSchema);