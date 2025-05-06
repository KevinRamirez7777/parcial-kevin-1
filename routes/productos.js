const express = require('express');
const router = express.Router();
const productoCtrl = require('../controllers/productoController');

router.post('/', productoCtrl.crearProducto);

module.exports = router;