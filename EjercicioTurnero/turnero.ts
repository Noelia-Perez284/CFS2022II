import Especialidad from "./class/especialidad";
import GestorDeArchivos from "./class/gestorDeArchivo";
import {cargarEspecialidades,crearEspecialidad,borrarEspecialidad, cargarMedico, crearNumRamdom} from "./helper"
import { readFileSync } from "fs";
import Medico from "./class/medico";




let listaEspecialidades: Array <Especialidad>=[]; //este arreglo es donde voy a cargar los objetos de tipo Especialidad

let datosEspecialidad:GestorDeArchivos=new GestorDeArchivos ("./listas/especialidades.txt");//este es un arreglo de tipo String, que lo creara el GestorDeArchivos con las especialidades del txt.

datosEspecialidad.mostrarArreglo();

for (let i:number=0; i< datosEspecialidad.getArregloString().length;i++){
    cargarEspecialidades(listaEspecialidades,datosEspecialidad.getArregloString()[i])
}

console.log(listaEspecialidades);

crearEspecialidad(listaEspecialidades);
console.log(listaEspecialidades);

borrarEspecialidad(listaEspecialidades, "odontologo")
console.log(listaEspecialidades)

//------------MEDICOS------------------------------------------------------------

let listaMedicos: Array <Medico>=[];

let datosMedicos:GestorDeArchivos=new GestorDeArchivos("./listas/medicos.txt")



for( let i:number=0; i<datosMedicos.getArregloString().length; i++){
    cargarMedico(listaMedicos, listaEspecialidades[crearNumRamdom(listaEspecialidades.length)], datosMedicos.getArregloString()[i])

}
console.log(listaMedicos)