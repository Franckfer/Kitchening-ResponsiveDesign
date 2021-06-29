const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


// middleware
app.use(express.static('public'));


// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})


// Routes
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}\nAbrir navegador en http://localhost:${port}`))
//\nAbrir en el navegador http://localhost:${port}