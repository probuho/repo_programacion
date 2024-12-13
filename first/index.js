// Importación de módulos necesarios
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Configuración para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración del motor de plantillas y vistas
app.set("view engine", "ejs"); // Usaremos EJS como motor
app.set("views", "./views"); // Carpeta de vistas

// Ruta principal para mostrar el formulario
app.get("/", (req, res) => {
  res.render("form"); // Renderiza la vista 'form.ejs'
});

// Ruta para procesar el formulario y mostrar el resultado
app.post("/animal", (req, res) => {
  const animalName = req.body.animal; // Captura el nombre del animal
  res.render("result", { animal: animalName }); // Renderiza la vista 'result.ejs'
});

// Inicia el servidor en el puerto definido
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
