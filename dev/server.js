// Main

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


const PORT = process.env.PORT || 3000;

const server = express();

server.set("trust proxy", 1);
// Seteamos el motor de renderizado para las vistas
server.set("view engine", "ejs");
// y le indicamos donde estan las vistas
server.set("views", path.join(__dirname, "./views"));

// configuramos el body parser para traer la data de las vistas al servidor
server.use(bodyParser.json());

server.use(bodyParser.urlencoded({ extended: false }));

// la carpeta de recursos la haremos isible para todo el servidor
// "/static" es una ruta vitual
server.use("/static", express.static(path.join(__dirname, "./resources")));

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));