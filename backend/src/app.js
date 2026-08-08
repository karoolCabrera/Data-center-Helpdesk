const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./config/database');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/tickets', ticketRoutes);

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Data Center Helpdesk funcionando'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);

    try {
        await pool.query('SELECT NOW()');
        console.log('Conexión a PostgreSQL establecida correctamente');
    } catch (error) {
        console.error('Error al conectar con PostgreSQL:', error.message);
    }
});