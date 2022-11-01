"use strict";
exports.__esModule = true;
var gestorDeArchivo_1 = require("./class/gestorDeArchivo");
var helper_1 = require("./helper");
var listaEspecialidades = []; //este arreglo es donde voy a cargar los objetos de tipo Especialidad
var datosEspecialidad = new gestorDeArchivo_1["default"]("./listas/especialidades.txt"); //este es un arreglo de tipo String, que lo creara el GestorDeArchivos con las especialidades del txt.
datosEspecialidad.mostrarArreglo();
for (var i = 0; i < datosEspecialidad.getArregloString().length; i++) {
    (0, helper_1.cargarEspecialidades)(listaEspecialidades, datosEspecialidad.getArregloString()[i]);
}
console.log(listaEspecialidades);
(0, helper_1.crearEspecialidad)(listaEspecialidades);
console.log(listaEspecialidades);
(0, helper_1.borrarEspecialidad)(listaEspecialidades, "odontologo");
console.log(listaEspecialidades);
//------------MEDICOS------------------------------------------------------------
var listaMedicos = [];
var datosMedicos = new gestorDeArchivo_1["default"]("./listas/medicos.txt");
for (var i = 0; i < datosMedicos.getArregloString().length; i++) {
    (0, helper_1.cargarMedico)(listaMedicos, listaEspecialidades[(0, helper_1.crearNumRamdom)(listaEspecialidades.length)], datosMedicos.getArregloString()[i]);
}
console.log(listaMedicos);
