import GestorDeArchivos from "./clases/gestorDeArchivo";
import Titular from "./clases/titular";
import { borrarTitular, cargarTitular, crearTitular } from "./helper";


//-----------Titulares--------

let listaTitulares:Array<Titular>=[];
let datosDelGestorTitulares:GestorDeArchivos=new GestorDeArchivos("./listas/titulares.txt");

datosDelGestorTitulares.mostrarArreglo();

for(let i:number=0; i< datosDelGestorTitulares.getArregloString().length; i++){
    cargarTitular(listaTitulares,datosDelGestorTitulares.getArregloString()[i])
}

console.log(listaTitulares);

crearTitular(listaTitulares);

console.log(listaTitulares);

borrarTitular(listaTitulares)

console.log(listaTitulares);

