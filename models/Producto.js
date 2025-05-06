const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
  descripcion: String,
  peso: Number,
  bultos: Number,
  fecha_entrega: Date
});
module.exports = mongoose.model('Producto', ProductoSchema);