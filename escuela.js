"use strict";
exports.__esModule = true;
var Alumno_1 = require("./Clases/Alumno");
var gestorDeArchivos_1 = require("./Clases/gestorDeArchivos");
var Profesor_1 = require("./Clases/Profesor");
//instalar npm install @types/node
//creamos un gestor que nos permite leer un archivo de texto
//funcion para crear un nuevo profe
function crearProfesor(profesor, arrayProfesor, arrayAlumnos) {
    //transformo el elemento de tipo string en un objeto de tipo Profesor
    var propiedadProfe = profesor.split(','); //[Juan Perez, 333333333, Karen Simari, 22222222]
    var nombre = propiedadProfe[0];
    var DNI = Number(propiedadProfe[1]);
    var listaAlumnos = arrayAlumnos;
    var nuevoProfe = new Profesor_1["default"](nombre, DNI, listaAlumnos);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoProfe);
}
//Eliminar profesor en una posicion y agregar uno nuevo
//instalamos readline-sync -- npm install readline-sync
function borrarrProfe(arregloProfe, position, arregloAlumnos) {
    //editar un profesor en el arreglo
    var readlineSync = require('readline-sync');
    var nombre = readlineSync.question("Ingrese el nombre: ");
    var DNI = Number(readlineSync.question("Ingrese el DNI: "));
    var listaAlumnos = arregloAlumnos;
    var nuevoProfe = new Profesor_1["default"](nombre, DNI, listaAlumnos);
    delete arregloProfe[position];
    arregloProfe[position] = nuevoProfe;
}
//-----------funcion para crear un nuevo alumno-----------
function crearAlumno(alumno, arrayAlumnos) {
    //transformo el elemento de tipo string en un objeto de tipo Alumno
    var propiedadAlumno = alumno.split(','); //[Gabriela Serrano,23456786; Ezequiel Hernandez,34234643; Natalia Garcia,45345980]
    var nombre = propiedadAlumno[0];
    var DNI = Number(propiedadAlumno[1]);
    var nota = Number(propiedadAlumno[2]);
    var nuevoAlumno = new Alumno_1["default"](nombre, DNI, nota);
    //inserto el elemento de tipo Alumno en el arreglo recibido
    arrayAlumnos.push(nuevoAlumno);
}
//--------funcion borrar alumno-----
function borrarrAlumno(arregloAlumnos, position) {
    //editar un Alumno en el arreglo
    var readlineSync = require('readline-sync');
    var nombre = readlineSync.question("Ingrese el nombre: ");
    var DNI = Number(readlineSync.question("Ingrese el DNI: "));
    var nota = Number(readlineSync.question("Ingrese la nota del alumno: "));
    var listaAlumnos = arregloAlumnos;
    var nuevoAlumno = new Alumno_1["default"](nombre, DNI, nota);
    delete arregloAlumnos[position];
    arregloAlumnos[position] = nuevoAlumno;
}
//--------Inicio programa-------
var datosAlumnos = new gestorDeArchivos_1["default"]('alumnado.txt');
var arrayAlumnosDesdeArchivo = [];
//creo array de objetos alumno
for (var i = 0; i < datosAlumnos.getArregloString().length; i++) {
    crearAlumno(datosAlumnos.getArregloString()[i], arrayAlumnosDesdeArchivo);
}
console.log(arrayAlumnosDesdeArchivo);
//creo array de objetos Profe
var datos = new gestorDeArchivos_1["default"]('profes.txt');
var arrayProfe = [];
for (var i = 0; i < datos.getArregloString().length; i++) {
    //Creo Profe uno por uno leyendo el txt
    crearProfesor(datos.getArregloString()[i], arrayProfe, arrayAlumnosDesdeArchivo);
}
console.log("EL primer profesor de la lista es------>");
//console.table(arrayProfe);
console.log(JSON.stringify(arrayProfe));
console.log("Fin primer profesor");
borrarrAlumno(arrayAlumnosDesdeArchivo, 2);
console.log(arrayAlumnosDesdeArchivo);
