const express = require('express');
const os = require(`os`);
const app = express();
const PORT = 3000;

app.get('/api/v1/saludo', (res) => {
    res.json({
        message: "hola desde js",
        // SOLUCIÓN 5: demostración visual; muestra el id que recibió la petición
        container_id: os.hostname(),
        date_time: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});