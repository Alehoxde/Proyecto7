// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001; // Usa un puerto diferente al de Expo (8081)

app.use(cors());
app.use(express.json());

// Tu primera ruta
app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: '¡Conexión exitosa desde el móvil!' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend funcionando en http://localhost:${PORT}`);
});