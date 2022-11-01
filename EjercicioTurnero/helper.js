"use strict";
exports.__esModule = true;
exports.cargarMedico = exports.borrarEspecialidad = exports.crearEspecialidad = exports.cargarEspecialidades = exports.crearNumRamdom = void 0;
var especialidad_1 = require("./class/especialidad");
var ReadlineSync = require("readline-sync");
var medico_1 = require("./class/medico");
function crearNumRamdom(max) {
    return Math.floor(Math.random() * max); //Math.floor 
}
exports.crearNumRamdom = crearNumRamdom;
//en esta funcion voy a cargar el arreglo de obj de tipo Especialidad, 
//utilizando el arreglo datosEspecialidad de tipo String que creo el GestorDeArchivos.
function cargarEspecialidades(arreglo, nombreEspecialidad) {
    var nuevaEspecialidad = new especialidad_1["default"](nombreEspecialidad);
    arreglo.push(nuevaEspecialidad);
    return arreglo;
}
exports.cargarEspecialidades = cargarEspecialidades;
//funcion para crear una nueva especialidad.
function crearEspecialidad(arreglo) {
    var nombreEspecialidad = ReadlineSync.question("Ingrese nombre de la especialidad: ");
    var nuevaEspecialidad = new especialidad_1["default"](nombreEspecialidad);
    arreglo.push(nuevaEspecialidad);
    return nuevaEspecialidad;
}
exports.crearEspecialidad = crearEspecialidad;
//Funcion para borrar una especialidad
function borrarEspecialidad(arreglo, nombreEspecialidad) {
    for (var i = 0; i < arreglo.length; i++) {
        if (nombreEspecialidad == arreglo[i].getNombre()) {
            arreglo.splice(i, 1);
        }
    }
}
exports.borrarEspecialidad = borrarEspecialidad;
//------------FUNCIONES PARA MEDICOS--------
function cargarMedico(arregloMedico, especialidad, medico) {
    var datosArreglo = medico.split(",");
    var nombre = datosArreglo[0];
    var matricula = Number(datosArreglo[1]);
    var nuevoMedico = new medico_1["default"](nombre, matricula, especialidad);
    arregloMedico.push(nuevoMedico);
    return arregloMedico;
}
exports.cargarMedico = cargarMedico;
