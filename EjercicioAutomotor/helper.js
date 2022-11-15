"use strict";
exports.__esModule = true;
exports.deleteVehiculo = exports.buscarUbicacionVehiculo = exports.cargarNuevoVehiculo = exports.cargarVehiculo = exports.borrarTitular = exports.crearTitular = exports.cargarTitular = exports.crearNumRamdom = void 0;
var titular_1 = require("./clases/titular");
var vehiculo_1 = require("./clases/vehiculo");
var ReadlineSync = require("readline-sync");
function crearNumRamdom(max) {
    return Math.floor(Math.random() * max); //Math.floor 
}
exports.crearNumRamdom = crearNumRamdom;
//Funcion para cargar lista de Titulares CRUD--"Crear, Leer, Actualizar y Borrar" 
//en esta funcion voy a cargar el arreglo de obj de tipo Titular, 
//utilizando el arreglo datosDelGestor de tipo String que creo el GestorDeArchivos.
function cargarTitular(arregloTitular, titular) {
    var datosDelGestor = titular.split(",");
    var nombre = datosDelGestor[0];
    var dni = Number(datosDelGestor[1]);
    var domicilio = datosDelGestor[2];
    var nuevoTitular = new titular_1["default"](nombre, dni, domicilio);
    arregloTitular.push(nuevoTitular);
    return arregloTitular;
}
exports.cargarTitular = cargarTitular;
//Funcion para cargar un nuevo titular
//funcion para verificar que existe dni
function existeDni(arregloTitular, dni) {
    var existe = false;
    var i = 0;
    while ((existe == false) && (i < arregloTitular.length)) {
        if (dni == arregloTitular[i].getDni()) {
            existe = true;
        }
        i = i + 1;
    }
    return existe;
}
function crearTitular(arregloTitular) {
    var nombre = ReadlineSync.question("Ingrese nombre del titular: ");
    var dni = ReadlineSync.questionInt("Ingrese el dni del tiular: ");
    if (existeDni(arregloTitular, dni) == true) {
        dni = ReadlineSync.questionInt("El dni ingresado ya existe, debe ingresar un nuevo numero: ");
    }
    var domicilio = ReadlineSync.question("Ingrese el domicilio del titular: ");
    var nuevoTitular = new titular_1["default"](nombre, dni, domicilio);
    arregloTitular.push(nuevoTitular);
    return nuevoTitular;
}
exports.crearTitular = crearTitular;
//funcion Borrar titular
//funcion buscar por posicion
function buscarUbicacion(arregloTitular, dni) {
    var ok = false;
    var ubicacion = -1;
    var i = 0;
    while ((ok == false) && (i < arregloTitular.length)) {
        if (arregloTitular[i].getDni() == dni) {
            ubicacion = i;
            ok = true;
        }
        else {
            i = i + 1;
        }
    }
    return ubicacion;
}
function borrarTitular(arregloTitular) {
    var dni = ReadlineSync.questionInt("Ingrese el dni del titular a borrar: ");
    var u = buscarUbicacion(arregloTitular, dni);
    if (u == -1) {
        console.log("No se encontro dni ingresado");
    }
    else {
        console.log("Se elimino el titular ".concat(arregloTitular[u].getNombre()));
        arregloTitular.splice(u, 1);
    }
    // if (existeDni(arregloTitular,dni)==false){
    //     console.log("El dni ingresado no existe")
    // }else{
    //     for(let i:number=0; i< arregloTitular.length;i++){
    //         if
    //     }
    // }
}
exports.borrarTitular = borrarTitular;
//------------------------VEHICULOS-----------------------
//Funcion para cargar lista de Vehiculos CRUD--"Crear, Leer, Actualizar y Borrar" 
function cargarVehiculo(arregloVehiculos, vehiculo, arregloTitular) {
    var datosDelGestor = vehiculo.split(",");
    var dominio = datosDelGestor[0];
    var marca = datosDelGestor[1];
    var modelo = datosDelGestor[2];
    var titular = arregloTitular[crearNumRamdom(arregloTitular.length)];
    var nuevoVehiculo = new vehiculo_1["default"](dominio, marca, modelo, titular);
    arregloVehiculos.push(nuevoVehiculo);
    return arregloVehiculos;
}
exports.cargarVehiculo = cargarVehiculo;
//Funcion para cargar un nuevo Vehiculo
//Funcion para verificar si existe dominio
function existeDominio(arregloVehiculos, dominio) {
    var existe = false;
    var i = 0;
    while ((existe == false) && (i < arregloVehiculos.length)) {
        if (dominio == arregloVehiculos[i].getDominio()) {
            existe = true;
        }
        i = i + 1;
    }
    return existe;
}
function cargarNuevoVehiculo(arregloVehiculos, arregloTitular) {
    var dominio = ReadlineSync.question("Ingrese Dominio del Vehiculo: ");
    if (existeDominio(arregloVehiculos, dominio) == true) {
        dominio = ReadlineSync.question("El dominio ingresado ya existe, debe ingresar un nuevo dominio: ");
    }
    var marca = ReadlineSync.question("Ingrese marca del vehiculo: ");
    var modelo = ReadlineSync.question("Ingrese modelo del vehiculo: ");
    var titular = crearTitular(arregloTitular);
    var nuevoVehiculo = new vehiculo_1["default"](dominio, marca, modelo, titular);
    arregloVehiculos.push(nuevoVehiculo);
    return nuevoVehiculo;
}
exports.cargarNuevoVehiculo = cargarNuevoVehiculo;
//funcion Borrar Vehiculo
//funcion para buscar por posicion
function buscarUbicacionVehiculo(arregloVehiculos, dominio) {
    var ok = false;
    var ubicacion = -1;
    var i = 0;
    while ((ok == false) && (i < arregloVehiculos.length)) {
        if (dominio == arregloVehiculos[i].getDominio()) {
            ok = true;
        }
        else {
            i = i + 1;
        }
    }
}
exports.buscarUbicacionVehiculo = buscarUbicacionVehiculo;
function deleteVehiculo(arregloVehiculos) {
}
exports.deleteVehiculo = deleteVehiculo;
