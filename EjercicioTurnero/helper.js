"use strict";
exports.__esModule = true;
exports.borrarPaciente = exports.cargarNuevoPaciente = exports.existeDni = exports.cargarPacientes = exports.borrarMedico = exports.crearNuevoMedico = exports.cargarMedico = exports.borrarEspecialidad = exports.crearEspecialidad = exports.cargarEspecialidades = exports.crearNumRamdom = void 0;
var especialidad_1 = require("./class/especialidad");
var ReadlineSync = require("readline-sync");
var medico_1 = require("./class/medico");
var paciente_1 = require("./class/paciente");
function crearNumRamdom(max) {
    return Math.floor(Math.random() * max); //Math.floor 
}
exports.crearNumRamdom = crearNumRamdom;
//-----------------------FUNCIONES PARA ESPECIALIDADES--------CRUD-- "Crear, Leer, Actualizar y Borrar" 
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
function borrarEspecialidad(arregloEspecialidad, nombreEspecialidad) {
    for (var i = 0; i < arregloEspecialidad.length; i++) {
        if (nombreEspecialidad == arregloEspecialidad[i].getNombre()) {
            arregloEspecialidad.splice(i, 1);
        }
    }
}
exports.borrarEspecialidad = borrarEspecialidad;
//-----------------------FUNCIONES PARA MEDICOS--------CRUD-- "Crear, Leer, Actualizar y Borrar" 
//funcion cargar lista de Medicos
function cargarMedico(arregloMedico, especialidad, medico) {
    var datosArreglo = medico.split(",");
    var nombre = datosArreglo[0];
    var matricula = Number(datosArreglo[1]);
    var nuevoMedico = new medico_1["default"](nombre, matricula, especialidad);
    arregloMedico.push(nuevoMedico);
    return arregloMedico;
}
exports.cargarMedico = cargarMedico;
//-------funcion para crear una nuevo Medico 
// funcion que verifica si existe matricula
function existeMatricula(arregloMedico, matricula) {
    var existe = false;
    var i = 0;
    while ((existe == false) && (i < arregloMedico.length)) {
        if (matricula == arregloMedico[i].getMatricula()) {
            existe = true;
        }
        i = i + 1;
    }
    return existe;
}
function crearNuevoMedico(arregloMedico, arregloEspecialidad) {
    var nombreMedico = ReadlineSync.question("Ingrese el nombre del medico: ");
    var nuevaMatricula = Number(ReadlineSync.question("Ingrese la nueva matricula: "));
    while (existeMatricula(arregloMedico, nuevaMatricula) == true) {
        nuevaMatricula = Number(ReadlineSync.question("La matricula ya existe, ingrese otra: "));
    }
    // for (let i:number= 0 ; i<arregloMedico.length ; i++){
    //     if (nuevaMatricula == arregloMedico[i].getMatricula()){
    //         console.log("La matricula ya exixte, debe ingresar una nueva matricula")}
    // }
    var especialidad = arregloEspecialidad[crearNumRamdom(arregloEspecialidad.length)];
    var nuevoMedico = new medico_1["default"](nombreMedico, nuevaMatricula, especialidad);
    arregloMedico.push(nuevoMedico);
    return nuevoMedico;
}
exports.crearNuevoMedico = crearNuevoMedico;
//Funcion para borrar un Medico
function borrarMedico(arregloMedico) {
    var numeroMatricula = ReadlineSync.questionInt("Ingrese la matricula del medico a eliminar: ");
    var i = 0;
    while (i < arregloMedico.length) {
        if (existeMatricula(arregloMedico, numeroMatricula) == true) {
            for (var i_1 = 0; i_1 < arregloMedico.length; i_1++) {
                if (numeroMatricula == arregloMedico[i_1].getMatricula()) {
                    arregloMedico.splice(i_1, 1);
                }
            }
        }
        else if (existeMatricula(arregloMedico, numeroMatricula) == false) {
            numeroMatricula = ReadlineSync.questionInt("La matricula ingresada no existe, debe ingresar una nueva matricula: ");
        }
        i = i + 1;
    }
}
exports.borrarMedico = borrarMedico;
// while((existeMatricula(arregloMedico,numeroMatricula)==false)&&(i< arregloMedico.length)){
//     if (numeroMatricula==arregloMedico[i].getMatricula()){
//         arregloMedico.splice(i,1);
//     }
//     i=i+1;
// }
// for (let i:number=0; i<arregloMedico.length;i++){
//     if(numeroMatricula==arregloMedico[i].getMatricula()){
//         arregloMedico.splice(i,1)
//     }
// }
//------------------FUNCIONES PARA PACIENTES--------CRUD-- "Crear, Leer, Actualizar y Borrar" 
//funcion para cargar pacientes
function cargarPacientes(arregloPacientes, paciente) {
    var datosDelArreglo = paciente.split(",");
    var nombre = datosDelArreglo[0];
    var dni = Number(datosDelArreglo[1]);
    var telefono = Number(datosDelArreglo[2]);
    var obra_social = datosDelArreglo[3];
    var nuevoPaciente = new paciente_1["default"](nombre, dni, telefono, obra_social);
    arregloPacientes.push(nuevoPaciente);
    return nuevoPaciente;
}
exports.cargarPacientes = cargarPacientes;
//funcion para cargar nuevo Paciente
//funcion para verificar si existe dni a cargar.
function existeDni(arregloPacientes, numeroDni) {
    var existe = false;
    var i = 0;
    while ((existe == false) && (i < arregloPacientes.length)) {
        if (numeroDni == arregloPacientes[i].getDni()) {
            existe = true;
        }
        i = i + 1;
    }
    return existe;
}
exports.existeDni = existeDni;
//funcion para crear un nuevo PACIENTE
function cargarNuevoPaciente(arregloPacientes) {
    var nombrePaciente = ReadlineSync.question("Ingrese el nombre del paciente: ");
    var dni = ReadlineSync.questionInt("Ingrese dni del paciente: ");
    //comprobacion si existe dni ingreso
    var i = 0;
    while ((existeDni(arregloPacientes, dni) == true) && (i < arregloPacientes.length)) {
        dni = ReadlineSync.questionInt("El dni ya existe, debe ingresar un nuevo dni: ");
        i = i + 1;
    }
    var telefono = ReadlineSync.questionInt("Ingrese numero de telefono: ");
    var obra_social = ReadlineSync.question("Ingrese nombre de la Obra Social: ");
    var nuevoPaciente = new paciente_1["default"](nombrePaciente, dni, telefono, obra_social);
    arregloPacientes.push(nuevoPaciente);
    return nombrePaciente;
}
exports.cargarNuevoPaciente = cargarNuevoPaciente;
//Funcion para borrar un PACIENTE.
function borrarPaciente(arregloPacientes) {
    var numeroDni = ReadlineSync.questionInt("Ingrese el dni del paciente a eliminar: ");
    var i = 0;
    while ((existeDni(arregloPacientes, numeroDni) == false) && (i < arregloPacientes.length)) {
        if (numeroDni == arregloPacientes[i].getDni()) {
            numeroDni = ReadlineSync.questionInt("El dni ingresado no existe, debe ingresar un nuevo ");
        }
    }
}
exports.borrarPaciente = borrarPaciente;
