"use strict";
exports.__esModule = true;
var gestorDeArchivo_1 = require("./clases/gestorDeArchivo");
var helper_1 = require("./helper");
//-----------Titulares--------
var listaTitulares = [];
var datosDelGestorTitulares = new gestorDeArchivo_1["default"]("./listas/titulares.txt");
datosDelGestorTitulares.mostrarArreglo();
for (var i = 0; i < datosDelGestorTitulares.getArregloString().length; i++) {
    (0, helper_1.cargarTitular)(listaTitulares, datosDelGestorTitulares.getArregloString()[i]);
}
console.log(listaTitulares);
(0, helper_1.crearTitular)(listaTitulares);
console.log(listaTitulares);
(0, helper_1.borrarTitular)(listaTitulares);
console.log(listaTitulares);
