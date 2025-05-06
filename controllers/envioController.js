const Envio = require('../models/Envio');
const Producto = require('../models/Producto');
const Usuario = require('../models/Usuario');

exports.crearEnvio = async (req, res) => {
  try {
    const { userId, nombre, direccion, telefono, referencia, observacion, productoId } = req.body;
    const usuario = await Usuario.findById(userId);
    const producto = await Producto.findById(productoId);

    if (!usuario || !producto) return res.status(404).json({ msg: 'Usuario o producto no encontrados' });

    const factor = Math.ceil(producto.peso / 3);
    const totalCosto = factor * usuario.credito.costoPorEnvio;

    if (usuario.credito.enviosDisponibles < factor)
      return res.status(400).json({ msg: 'Crédito insuficiente' });

    usuario.credito.enviosDisponibles -= factor;
    await usuario.save();

    const envio = new Envio({ usuario, producto, nombre, direccion, telefono, referencia, observacion });
    await envio.save();

    res.status(201).json(envio);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear el envío', error });
  }
};

exports.obtenerEnviosPorUsuario = async (req, res) => {
  try {
    const envios = await Envio.find({ usuario: req.params.id }).populate('producto');
    res.json(envios);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener envíos', error });
  }
};

exports.eliminarEnvio = async (req, res) => {
  try {
    const envio = await Envio.findById(req.params.id);
    if (!envio) return res.status(404).json({ msg: 'Envío no encontrado' });

    const usuario = await Usuario.findById(envio.usuario);
    const producto = await Producto.findById(envio.producto);
    const factor = Math.ceil(producto.peso / 3);

    usuario.credito.enviosDisponibles += factor;
    await usuario.save();
    await envio.remove();

    res.json({ msg: 'Envío eliminado y crédito restaurado' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar envío', error });
  }
};