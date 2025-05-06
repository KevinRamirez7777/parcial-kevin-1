const express = require('express');
const router = express.Router();
const envioCtrl = require('../controllers/envioController');

router.post('/', envioCtrl.crearEnvio);
router.get('/:id', envioCtrl.obtenerEnviosPorUsuario);
router.delete('/:id', envioCtrl.eliminarEnvio);

module.exports = router;