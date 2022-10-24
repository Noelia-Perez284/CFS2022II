
import  Alumno  from './Clases/Alumno';
import  GestorDeArchivos  from './Clases/gestorDeArchivos';
import  Profesor from './Clases/Profesor';
import  Escuela  from './Clases/Escuela';

//instalar npm install @types/node
//creamos un gestor que nos permite leer un archivo de texto

//funcion para crear un nuevo profe

function crearProfesor(profesor: string, arrayProfesor: Array<Profesor>, arrayAlumnos: Array<Alumno>): void {

    //transformo el elemento de tipo string en un objeto de tipo Profesor
    let propiedadProfe = profesor.split(','); //[Juan Perez, 333333333, Karen Simari, 22222222]
    let nombre: string = propiedadProfe[0];
    let DNI: number = Number(propiedadProfe[1]);
    let listaAlumnos: Array<Alumno> = arrayAlumnos;
    let nuevoProfe : Profesor = new Profesor(nombre,DNI,listaAlumnos);
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoProfe);
}

//Eliminar profesor en una posicion y agregar uno nuevo
//instalamos readline-sync -- npm install readline-sync

function borrarrProfe(arregloProfe: Array<Profesor>,  position: number, arregloAlumnos: Array<Alumno>): void {
    
    //editar un profesor en el arreglo
    let readlineSync = require('readline-sync');
     let nombre: string = readlineSync.question("Ingrese el nombre: ")
     let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
     let listaAlumnos: Array<Alumno> = arregloAlumnos;
     let nuevoProfe: Profesor = new Profesor(nombre,DNI,listaAlumnos);
     delete arregloProfe[position];
     arregloProfe[position] = nuevoProfe;
 
}

//-----------funcion para crear un nuevo alumno-----------

function crearAlumno(alumno: string, arrayAlumnos: Array<Alumno>): void {
     //transformo el elemento de tipo string en un objeto de tipo Alumno
     let propiedadAlumno = alumno.split(','); //[Gabriela Serrano,23456786; Ezequiel Hernandez,34234643; Natalia Garcia,45345980]
     let nombre: string = propiedadAlumno[0];
     let DNI: number = Number(propiedadAlumno[1]);
     let nota:number= Number(propiedadAlumno[2]);
     let nuevoAlumno : Alumno = new Alumno(nombre,DNI,nota);

     //inserto el elemento de tipo Alumno en el arreglo recibido
     arrayAlumnos.push(nuevoAlumno);

}

//--------funcion borrar alumno-----
function borrarrAlumno(arregloAlumnos: Array<Alumno>,  position: number): void {
            //editar un Alumno en el arreglo
     let readlineSync = require('readline-sync');
     let nombre: string = readlineSync.question("Ingrese el nombre: ");
     let DNI: number = Number(readlineSync.question("Ingrese el DNI: "));
     let nota: number = Number(readlineSync.question("Ingrese la nota del alumno: "));
     let listaAlumnos: Array<Alumno> = arregloAlumnos;
     let nuevoAlumno: Alumno = new Alumno(nombre,DNI,nota);
     delete arregloAlumnos[position];
     arregloAlumnos [position] = nuevoAlumno;

}

//--------Inicio programa-------

let datosAlumnos: GestorDeArchivos = new GestorDeArchivos('alumnado.txt');
let arrayAlumnosDesdeArchivo: Array<Alumno> = [];

//creo array de objetos alumno
for (let i: number = 0; i < datosAlumnos.getArregloString().length; i++) {
    
    crearAlumno(datosAlumnos.getArregloString()[i],arrayAlumnosDesdeArchivo);
 }

console.log(arrayAlumnosDesdeArchivo);


//creo array de objetos Profe

let datos: GestorDeArchivos = new GestorDeArchivos('profes.txt');
let arrayProfe: Array<Profesor> = [];

for (let i: number = 0; i < datos.getArregloString().length; i++) {

   crearProfesor(datos.getArregloString()[i], arrayProfe, arrayAlumnosDesdeArchivo);
}


console.table(arrayProfe);
console.log(JSON.stringify(arrayProfe))


borrarrAlumno(arrayAlumnosDesdeArchivo,2);
console.log(arrayAlumnosDesdeArchivo);
