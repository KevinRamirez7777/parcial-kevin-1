require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/postmail', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error de conexión:', err));

app.use(express.json());
app.use('/api/envios', require('./routes/envios'));
app.use('/api/productos', require('./routes/productos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));